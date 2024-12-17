import { AdvancedRateLimiter } from './advanced-rate-limiter';
import { sanitizeInput } from './security';

interface FormProtectionConfig {
  rateLimitConfig?: {
    windowMs?: number;
    maxAttempts?: number;
    blockDuration?: number;
    useRedis?: boolean;
    redisConfig?: {
      host: string;
      port: number;
      password?: string;
    };
    ipWhitelist?: string[];
    maxBlockDuration?: number;
  };
}

export class FormProtection {
  private rateLimiter: AdvancedRateLimiter;

  constructor(config: FormProtectionConfig = {}) {
    this.rateLimiter = new AdvancedRateLimiter(config.rateLimitConfig);
  }

  /**
   * Validate and sanitize form submission with IP-based rate limiting
   */
  public async validateSubmission(
    ip: string,
    formData: Record<string, string>
  ): Promise<{
    valid: boolean;
    sanitizedData?: Record<string, string>;
    error?: string;
    nextAttemptAt?: Date;
    rateLimitInfo?: {
      remainingAttempts: number;
      isBlocked: boolean;
      blockExpires?: Date;
    };
  }> {
    // Check rate limit first
    const rateLimit = await this.rateLimiter.checkLimit(ip);

    if (!rateLimit.allowed) {
      return {
        valid: false,
        error: rateLimit.nextAttemptAt
          ? `Too many attempts. Please try again after ${rateLimit.nextAttemptAt.toLocaleTimeString()}`
          : 'Too many attempts. Please try again later.',
        nextAttemptAt: rateLimit.nextAttemptAt,
        rateLimitInfo: {
          remainingAttempts: rateLimit.remainingAttempts,
          isBlocked: rateLimit.isBlocked,
          blockExpires: rateLimit.blockExpires,
        },
      };
    }

    // Sanitize all form inputs
    const sanitizedData: Record<string, string> = {};
    for (const [key, value] of Object.entries(formData)) {
      sanitizedData[key] = sanitizeInput(value);
    }

    // Basic form validation
    if (!this.validateFormData(sanitizedData)) {
      return {
        valid: false,
        error: 'Invalid form data',
        rateLimitInfo: {
          remainingAttempts: rateLimit.remainingAttempts,
          isBlocked: false,
        },
      };
    }

    return {
      valid: true,
      sanitizedData,
      rateLimitInfo: {
        remainingAttempts: rateLimit.remainingAttempts,
        isBlocked: false,
      },
    };
  }

  /**
   * Get detailed rate limit information for an IP
   */
  public async getRateLimitInfo(ip: string) {
    return this.rateLimiter.getRateLimitInfo(ip);
  }

  /**
   * Reset protection for an IP
   */
  public async reset(ip: string): Promise<void> {
    await this.rateLimiter.reset(ip);
  }

  /**
   * Close rate limiter connections (important for cleanup)
   */
  public async close(): Promise<void> {
    await this.rateLimiter.close();
  }

  private validateFormData(data: Record<string, string>): boolean {
    // Add specific form validation rules here
    return Object.values(data).every(value => value.length > 0);
  }
}

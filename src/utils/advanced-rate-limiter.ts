/**
 * Advanced rate limiter with IP-based tracking
 */

interface AdvancedRateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxAttempts: number; // Maximum attempts within the window
  blockDuration: number; // How long to block after exceeding limit (ms)
  ipWhitelist?: string[]; // IPs to exclude from rate limiting
  maxBlockDuration: number; // Maximum block duration after repeated violations
}

interface RateLimitInfo {
  allowed: boolean;
  nextAttemptAt?: Date;
  remainingAttempts: number;
  isBlocked: boolean;
  blockExpires?: Date;
}

export class AdvancedRateLimiter {
  private config: AdvancedRateLimitConfig;
  private store: Map<string, any>;
  private readonly DEFAULT_MAX_BLOCK = 24 * 60 * 60 * 1000; // 24 hours

  constructor(config: Partial<AdvancedRateLimitConfig> = {}) {
    this.config = {
      windowMs: config.windowMs || 60000, // 1 minute default
      maxAttempts: config.maxAttempts || 5, // 5 attempts default
      blockDuration: config.blockDuration || 300000, // 5 minutes default
      ipWhitelist: config.ipWhitelist || [],
      maxBlockDuration: config.maxBlockDuration || this.DEFAULT_MAX_BLOCK,
    };

    this.store = new Map();
  }

  /**
   * Check rate limit for an IP address
   */
  public async checkLimit(ip: string): Promise<RateLimitInfo> {
    // Check whitelist
    if (this.config.ipWhitelist?.includes(ip)) {
      return {
        allowed: true,
        remainingAttempts: this.config.maxAttempts,
        isBlocked: false,
      };
    }

    return this.checkMemoryLimit(ip);
  }

  /**
   * Get detailed rate limit information
   */
  public async getRateLimitInfo(ip: string): Promise<RateLimitInfo> {
    return this.getMemoryRateLimitInfo(ip);
  }

  /**
   * Reset rate limit for an IP
   */
  public async reset(ip: string): Promise<void> {
    this.store.delete(ip);
  }

  private checkMemoryLimit(ip: string): RateLimitInfo {
    this.cleanup();

    const entry = this.store.get(ip) || this.createEntry();

    // Check if blocked
    if (entry.blocked) {
      if (entry.blockExpires && entry.blockExpires <= Date.now()) {
        this.store.delete(ip);
        return this.checkMemoryLimit(ip);
      }
      return {
        allowed: false,
        nextAttemptAt: entry.blockExpires ? new Date(entry.blockExpires) : undefined,
        remainingAttempts: 0,
        isBlocked: true,
        blockExpires: entry.blockExpires ? new Date(entry.blockExpires) : undefined,
      };
    }

    // Check window expiration
    if (Date.now() - entry.firstAttempt >= this.config.windowMs) {
      this.store.set(ip, this.createEntry());
      return {
        allowed: true,
        remainingAttempts: this.config.maxAttempts - 1,
        isBlocked: false,
      };
    }

    // Increment attempts
    entry.attempts++;
    this.store.set(ip, entry);

    // Check if should block
    if (entry.attempts > this.config.maxAttempts) {
      const violations = entry.violations || 0;
      const blockDuration = Math.min(
        this.config.blockDuration * Math.pow(2, violations),
        this.config.maxBlockDuration
      );

      entry.blocked = true;
      entry.blockExpires = Date.now() + blockDuration;
      entry.violations = violations + 1;
      this.store.set(ip, entry);

      return {
        allowed: false,
        nextAttemptAt: new Date(entry.blockExpires),
        remainingAttempts: 0,
        isBlocked: true,
        blockExpires: new Date(entry.blockExpires),
      };
    }

    return {
      allowed: true,
      remainingAttempts: this.config.maxAttempts - entry.attempts,
      isBlocked: false,
    };
  }

  private getMemoryRateLimitInfo(ip: string): RateLimitInfo {
    const entry = this.store.get(ip);
    if (!entry) {
      return {
        allowed: true,
        remainingAttempts: this.config.maxAttempts,
        isBlocked: false,
      };
    }

    if (entry.blocked && entry.blockExpires > Date.now()) {
      return {
        allowed: false,
        nextAttemptAt: new Date(entry.blockExpires),
        remainingAttempts: 0,
        isBlocked: true,
        blockExpires: new Date(entry.blockExpires),
      };
    }

    return {
      allowed: true,
      remainingAttempts: this.config.maxAttempts - entry.attempts,
      isBlocked: false,
    };
  }

  private createEntry() {
    return {
      attempts: 1,
      firstAttempt: Date.now(),
      blocked: false,
      violations: 0,
    };
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [ip, entry] of this.store.entries()) {
      if (
        (!entry.blocked && now - entry.firstAttempt >= this.config.windowMs) ||
        (entry.blocked && entry.blockExpires && entry.blockExpires <= now)
      ) {
        this.store.delete(ip);
      }
    }
  }
}

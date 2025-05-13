/**
 * Advanced rate limiter with IP-based tracking
 */

export interface AdvancedRateLimitConfig {
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

interface RateLimitStore {
  attempts: number;
  windowStart: number;
  blockedUntil?: number;
  consecutiveViolations?: number;
}

export class AdvancedRateLimiter {
  /**
   * Dummy close method for compatibility (no-op for in-memory store)
   */
  public async close(): Promise<void> {
    // No resources to clean up in memory
  }

  private config: AdvancedRateLimitConfig;
  private store: Map<string, RateLimitStore>;
  private readonly DEFAULT_MAX_BLOCK = 24 * 60 * 60 * 1000; // 24 hours
  private readonly instanceId: string;

  constructor(config: Partial<AdvancedRateLimitConfig> = {}) {
    this.config = {
      windowMs: config.windowMs || 60000, // 1 minute default
      maxAttempts: config.maxAttempts || 5, // 5 attempts default
      blockDuration: config.blockDuration || 300000, // 5 minutes default
      ipWhitelist: config.ipWhitelist || [],
      maxBlockDuration: config.maxBlockDuration || this.DEFAULT_MAX_BLOCK,
    };

    this.store = new Map();
    this.instanceId = Math.random().toString(36).substring(2, 15);
  }

  /**
   * Check rate limit for an IP address
   */
  public checkLimit(ip: string): RateLimitInfo {
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
  public getRateLimitInfo(ip: string): RateLimitInfo {
    return this.getMemoryRateLimitInfo(ip);
  }

  /**
   * Reset rate limit for an IP
   */
  public reset(ip: string): void {
    const key = this.getStoreKey(ip);
    this.store.delete(key);
  }

  private createEntry(): RateLimitStore {
    return {
      attempts: 0,
      windowStart: Date.now(),
      blockedUntil: undefined,
      consecutiveViolations: 0,
    };
  }

  private getStoreKey(ip: string): string {
    return `${ip}:${this.instanceId}`;
  }

  private checkMemoryLimit(ip: string): RateLimitInfo {
    this.cleanup();

    const key = this.getStoreKey(ip);
    let entry = this.store.get(key);
    if (!entry) {
      entry = this.createEntry();
      this.store.set(key, entry);
    }

    // Check if blocked
    if (entry.blockedUntil && entry.blockedUntil > Date.now()) {
      return {
        allowed: false,
        nextAttemptAt: new Date(entry.blockedUntil),
        remainingAttempts: 0,
        isBlocked: true,
        blockExpires: new Date(entry.blockedUntil),
      };
    }

    // Check window expiration
    if (Date.now() - entry.windowStart >= this.config.windowMs) {
      entry = this.createEntry();
      this.store.set(key, entry);
    }

    // Check if should block
    if (entry.attempts >= this.config.maxAttempts) {
      const violations = entry.consecutiveViolations || 0;
      const blockDuration = Math.min(
        this.config.blockDuration * Math.pow(2, violations),
        this.config.maxBlockDuration
      );

      entry.blockedUntil = Date.now() + blockDuration;
      entry.consecutiveViolations = violations + 1;
      this.store.set(key, entry);

      return {
        allowed: false,
        nextAttemptAt: new Date(entry.blockedUntil),
        remainingAttempts: 0,
        isBlocked: true,
        blockExpires: new Date(entry.blockedUntil),
      };
    }

    // Increment attempts
    entry.attempts++;
    this.store.set(key, entry);

    return {
      allowed: true,
      remainingAttempts: this.config.maxAttempts - entry.attempts,
      isBlocked: false,
    };
  }

  private getMemoryRateLimitInfo(ip: string): RateLimitInfo {
    const key = this.getStoreKey(ip);
    const entry = this.store.get(key);
    if (!entry) {
      return {
        allowed: true,
        remainingAttempts: this.config.maxAttempts,
        isBlocked: false,
      };
    }

    if (entry.blockedUntil && entry.blockedUntil > Date.now()) {
      return {
        allowed: false,
        nextAttemptAt: new Date(entry.blockedUntil),
        remainingAttempts: 0,
        isBlocked: true,
        blockExpires: new Date(entry.blockedUntil),
      };
    }

    return {
      allowed: true,
      remainingAttempts: this.config.maxAttempts - entry.attempts,
      isBlocked: false,
    };
  }

  public cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.store.entries()) {
      if (
        (!entry.blockedUntil && now - entry.windowStart >= this.config.windowMs) ||
        (entry.blockedUntil && entry.blockedUntil <= now)
      ) {
        this.store.delete(key);
      }
    }
  }
}

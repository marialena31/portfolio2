/**
 * Advanced rate limiter for form submissions
 */

interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxAttempts: number; // Maximum attempts within the window
  blockDuration: number; // How long to block after exceeding limit (ms)
}

interface RateLimitEntry {
  attempts: number;
  firstAttempt: number;
  blocked: boolean;
  blockExpires?: number;
}

export class RateLimiter {
  private store: Map<string, RateLimitEntry>;
  private config: RateLimitConfig;

  constructor(config: Partial<RateLimitConfig> = {}) {
    this.config = {
      windowMs: config.windowMs || 60000, // 1 minute default
      maxAttempts: config.maxAttempts || 5, // 5 attempts default
      blockDuration: config.blockDuration || 300000, // 5 minutes default
    };
    this.store = new Map();
  }

  /**
   * Check if an identifier is rate limited
   */
  public checkLimit(identifier: string): { allowed: boolean; nextAttemptAt?: Date } {
    this.cleanup();

    const entry = this.store.get(identifier) || this.createEntry();

    // Check if currently blocked
    if (entry.blocked) {
      if (entry.blockExpires && entry.blockExpires <= Date.now()) {
        // Block duration expired, reset entry
        this.store.delete(identifier);
        return this.checkLimit(identifier);
      }
      return {
        allowed: false,
        nextAttemptAt: entry.blockExpires ? new Date(entry.blockExpires) : undefined,
      };
    }

    // Check if window expired
    if (Date.now() - entry.firstAttempt >= this.config.windowMs) {
      // Reset window
      this.store.set(identifier, this.createEntry());
      return { allowed: true };
    }

    // Increment attempts
    entry.attempts++;
    this.store.set(identifier, entry);

    // Check if should block
    if (entry.attempts > this.config.maxAttempts) {
      entry.blocked = true;
      entry.blockExpires = Date.now() + this.config.blockDuration;
      this.store.set(identifier, entry);
      return {
        allowed: false,
        nextAttemptAt: new Date(entry.blockExpires),
      };
    }

    return { allowed: true };
  }

  /**
   * Get remaining attempts for an identifier
   */
  public getRemainingAttempts(identifier: string): number {
    const entry = this.store.get(identifier);
    if (!entry || entry.blocked) return 0;
    return Math.max(0, this.config.maxAttempts - entry.attempts);
  }

  /**
   * Reset rate limit for an identifier
   */
  public reset(identifier: string): void {
    this.store.delete(identifier);
  }

  private createEntry(): RateLimitEntry {
    return {
      attempts: 1,
      firstAttempt: Date.now(),
      blocked: false,
    };
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [identifier, entry] of this.store.entries()) {
      if (
        (!entry.blocked && now - entry.firstAttempt >= this.config.windowMs) ||
        (entry.blocked && entry.blockExpires && entry.blockExpires <= now)
      ) {
        this.store.delete(identifier);
      }
    }
  }
}

// Example usage:
// const rateLimiter = new RateLimiter({
//   windowMs: 60000,     // 1 minute
//   maxAttempts: 5,      // 5 attempts
//   blockDuration: 300000 // 5 minutes block
// });

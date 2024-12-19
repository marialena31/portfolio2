/**
 * Express middleware implementation of the AdvancedRateLimiter.
 * Provides rate limiting capabilities for Gatsby API routes with proper HTTP headers.
 *
 * Features:
 * - IP-based rate limiting
 * - Configurable time windows and attempt limits
 * - Standard rate limit headers (X-RateLimit-*)
 * - Whitelist support
 * - Exponential backoff for repeated violations
 *
 * @example
 * ```typescript
 * const rateLimiter = new RateLimiterMiddleware({
 *   windowMs: 60000,    // 1 minute
 *   maxAttempts: 100,   // 100 requests per minute
 *   blockDuration: 300000 // 5 minutes block
 * });
 * app.use('/api/*', rateLimiter.middleware);
 * ```
 */
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { AdvancedRateLimiter, AdvancedRateLimitConfig } from '../utils/advanced-rate-limiter';

/**
 * RateLimiterMiddleware class.
 *
 * @class RateLimiterMiddleware
 */
export class RateLimiterMiddleware {
  /**
   * The AdvancedRateLimiter instance.
   *
   * @private
   * @type {AdvancedRateLimiter}
   */
  private limiter: AdvancedRateLimiter;

  /**
   * Creates an instance of RateLimiterMiddleware.
   *
   * @param {Object} [config] - The configuration object.
   * @param {number} [config.windowMs] - The time window in milliseconds.
   * @param {number} [config.maxAttempts] - The maximum number of attempts.
   * @param {number} [config.blockDuration] - The block duration in milliseconds.
   * @param {string[]} [config.ipWhitelist] - The IP whitelist.
   * @param {number} [config.maxBlockDuration] - The maximum block duration in milliseconds.
   */
  constructor(config: Partial<AdvancedRateLimitConfig> = {}) {
    this.limiter = new AdvancedRateLimiter(config);
  }

  /**
   * Gets the client IP address from various headers and fallbacks
   *
   * @private
   * @param {Request} req - The Express request object
   * @returns {string} The client IP address
   */
  private getClientIp(req: Request): string {
    // Check X-Forwarded-For header
    const forwardedFor = req.headers['x-forwarded-for'];
    if (forwardedFor) {
      // Get the first IP if it's a comma-separated list
      const ips = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor.split(',')[0].trim();
      return ips;
    }

    // Fallback to other headers or direct IP
    return req.ip || req.socket.remoteAddress || 'unknown';
  }

  /**
   * The Express middleware function.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The Express next function.
   */
  public get middleware(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction): void => {
      /**
       * The client IP address.
       *
       * @type {string}
       */
      const ip = this.getClientIp(req);

      /**
       * The rate limit check result.
       *
       * @type {Object}
       */
      const result = this.limiter.checkLimit(ip);

      // Set rate limit headers
      res.setHeader('X-RateLimit-Limit', this.limiter['config'].maxAttempts.toString());
      res.setHeader('X-RateLimit-Remaining', result.remainingAttempts.toString());
      if (result.blockExpires) {
        res.setHeader('X-RateLimit-Reset', result.blockExpires.getTime().toString());
      }

      if (!result.allowed) {
        res.status(429).json({
          error: 'Too Many Requests',
          nextAttemptAt: result.nextAttemptAt,
          blockExpires: result.blockExpires,
        });
        return;
      }

      next();
    };
  }
}

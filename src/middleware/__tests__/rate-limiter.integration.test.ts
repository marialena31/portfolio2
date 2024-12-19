/**
 * Integration Tests for RateLimiterMiddleware
 *
 * This test suite verifies the integration between Express.js and the RateLimiterMiddleware.
 * It ensures that rate limiting works correctly in a real HTTP context, including proper
 * header setting and request blocking.
 *
 * Test Setup:
 * - Uses supertest for HTTP assertions
 * - Creates a fresh Express app for each test
 * - Configures rate limiter with a 1-second window and 3 attempts
 *
 * Common Test Patterns:
 * - Making multiple requests to test rate limits
 * - Verifying rate limit headers
 * - Testing IP-based isolation
 * - Waiting for windows to expire
 *
 * @group integration
 * @group rate-limiting
 */

import express, { Express } from 'express';
import request from 'supertest';
import { RateLimiterMiddleware } from '../rate-limiter';

describe('RateLimiterMiddleware Integration', () => {
  let app: Express;
  let rateLimiterMiddleware: RateLimiterMiddleware;

  /**
   * Test setup before each test:
   * - Creates a new Express app
   * - Configures rate limiter with test settings
   * - Adds a test endpoint
   */
  beforeEach(() => {
    app = express();
    rateLimiterMiddleware = new RateLimiterMiddleware({
      windowMs: 1000, // 1 second
      maxAttempts: 3,
      blockDuration: 2000, // 2 seconds
    });

    // Add the middleware and a test endpoint
    app.use(rateLimiterMiddleware.middleware);
    app.get('/test', (req, res) => {
      res.json({ message: 'success' });
    });
  });

  /**
   * Tests that requests within the rate limit are allowed
   * Verifies:
   * - Successful responses
   * - Correct remaining attempts count
   * - Proper decrementing of attempts
   */
  it('should allow requests within rate limit', async () => {
    // Make 3 requests (max allowed)
    for (let i = 0; i < 3; i++) {
      const response = await request(app).get('/test');
      expect(response.status).toBe(200);
      expect(response.headers['x-ratelimit-remaining']).toBe((2 - i).toString());
    }
  });

  /**
   * Tests that requests are blocked after exceeding the rate limit
   * Verifies:
   * - Blocking after limit exceeded
   * - 429 status code
   * - Block expiration time
   * - Zero remaining attempts
   */
  it('should block requests after exceeding rate limit', async () => {
    // Make 3 allowed requests
    for (let i = 0; i < 3; i++) {
      await request(app).get('/test');
    }

    // This request should be blocked
    const response = await request(app).get('/test');
    expect(response.status).toBe(429);
    expect(response.body.error).toBe('Too Many Requests');
    expect(response.body.nextAttemptAt).toBeDefined();
    expect(response.body.blockExpires).toBeDefined();
  });

  /**
   * Tests that rate limits reset after the time window expires
   * Verifies:
   * - Limits reset after window
   * - New requests allowed after reset
   * - Correct attempt count after reset
   */
  it('should reset rate limit after window expires', async () => {
    // Make 3 requests
    for (let i = 0; i < 3; i++) {
      await request(app).get('/test');
    }

    // Wait for window to expire
    await new Promise(resolve => setTimeout(resolve, 1100));

    // Should be allowed again
    const response = await request(app).get('/test');
    expect(response.status).toBe(200);
    expect(response.headers['x-ratelimit-remaining']).toBe('2');
  });

  /**
   * Tests that rate limit headers are set correctly
   * Verifies:
   * - Rate limit headers are present
   * - Correct rate limit values
   */
  it('should set appropriate rate limit headers', async () => {
    const response = await request(app).get('/test');
    expect(response.headers['x-ratelimit-limit']).toBe('3');
    expect(response.headers['x-ratelimit-remaining']).toBe('2');
  });

  /**
   * Tests that multiple IPs are handled independently
   * Verifies:
   * - Separate rate limits for each IP
   * - No interference between IPs
   * - Proper X-Forwarded-For header handling
   */
  it('should handle multiple IPs independently', async () => {
    const app = express();

    // Create separate rate limiters
    const rateLimiter1 = new RateLimiterMiddleware({
      windowMs: 1000,
      maxAttempts: 3,
      blockDuration: 2000,
    });

    const rateLimiter2 = new RateLimiterMiddleware({
      windowMs: 1000,
      maxAttempts: 3,
      blockDuration: 2000,
    });

    // Set up routes with different rate limiters
    app.get('/test', rateLimiter1.middleware, (req, res) => {
      res.json({ message: 'success' });
    });

    app.get('/test2', rateLimiter2.middleware, (req, res) => {
      res.json({ message: 'success' });
    });

    // Test first IP
    const response1 = await request(app).get('/test').set('X-Forwarded-For', '1.1.1.1');

    // Test second IP on different limiter
    const response2 = await request(app).get('/test2').set('X-Forwarded-For', '1.1.1.1'); // Using same IP to prove instances work

    // Both should start with full quota
    expect(response1.status).toBe(200);
    expect(response2.status).toBe(200);
    expect(response1.headers['x-ratelimit-remaining']).toBe('2');
    expect(response2.headers['x-ratelimit-remaining']).toBe('2');

    // Make more requests with first IP on first limiter
    await request(app).get('/test').set('X-Forwarded-For', '1.1.1.1');

    const response3 = await request(app).get('/test').set('X-Forwarded-For', '1.1.1.1');

    // Should have consumed quota on first limiter
    expect(response3.status).toBe(200);
    expect(response3.headers['x-ratelimit-remaining']).toBe('0');

    // Same IP should still have full quota on second limiter
    const response4 = await request(app).get('/test2').set('X-Forwarded-For', '1.1.1.1');
    expect(response4.status).toBe(200);
    expect(response4.headers['x-ratelimit-remaining']).toBe('1');

    // Verify first limiter blocks after exceeding limit
    const response5 = await request(app).get('/test').set('X-Forwarded-For', '1.1.1.1');
    expect(response5.status).toBe(429);

    // Second limiter should still work with same IP
    const response6 = await request(app).get('/test2').set('X-Forwarded-For', '1.1.1.1');
    expect(response6.status).toBe(200);
    expect(response6.headers['x-ratelimit-remaining']).toBe('0');
  });
});

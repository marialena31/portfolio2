import { AdvancedRateLimiter } from '../advanced-rate-limiter';

describe('AdvancedRateLimiter', () => {
  let rateLimiter: AdvancedRateLimiter;
  const testIp = '127.0.0.1';

  beforeEach(() => {
    rateLimiter = new AdvancedRateLimiter({
      windowMs: 1000, // 1 second
      maxAttempts: 3,
      blockDuration: 2000, // 2 seconds
      maxBlockDuration: 5000, // 5 seconds
    });
  });

  it('should allow requests within limits', () => {
    const result1 = rateLimiter.checkLimit(testIp);
    expect(result1.allowed).toBe(true);
    expect(result1.remainingAttempts).toBe(2);

    const result2 = rateLimiter.checkLimit(testIp);
    expect(result2.allowed).toBe(true);
    expect(result2.remainingAttempts).toBe(1);

    const result3 = rateLimiter.checkLimit(testIp);
    expect(result3.allowed).toBe(true);
    expect(result3.remainingAttempts).toBe(0);
  });

  it('should block requests after exceeding limit', () => {
    // Make allowed requests
    for (let i = 0; i < 3; i++) {
      rateLimiter.checkLimit(testIp);
    }

    // This should be blocked
    const result = rateLimiter.checkLimit(testIp);
    expect(result.allowed).toBe(false);
    expect(result.isBlocked).toBe(true);
    expect(result.blockExpires).toBeDefined();
    expect(result.remainingAttempts).toBe(0);
  });

  it('should respect whitelist', () => {
    rateLimiter = new AdvancedRateLimiter({
      windowMs: 1000,
      maxAttempts: 1,
      blockDuration: 2000,
      ipWhitelist: [testIp],
    });

    // Should allow more requests than maxAttempts for whitelisted IP
    for (let i = 0; i < 5; i++) {
      const result = rateLimiter.checkLimit(testIp);
      expect(result.allowed).toBe(true);
      expect(result.isBlocked).toBe(false);
    }
  });

  it('should reset after window expires', async () => {
    // Make some requests
    for (let i = 0; i < 3; i++) {
      rateLimiter.checkLimit(testIp);
    }

    // Wait for window to expire
    await new Promise(resolve => setTimeout(resolve, 1100));

    // Should be allowed again
    const result = rateLimiter.checkLimit(testIp);
    expect(result.allowed).toBe(true);
    expect(result.remainingAttempts).toBe(2);
  });

  it('should cleanup expired entries', () => {
    const cleanupSpy = jest.spyOn(rateLimiter, 'cleanup');

    // Make some requests
    rateLimiter.checkLimit(testIp);
    rateLimiter.checkLimit('different-ip');

    expect(cleanupSpy).toHaveBeenCalled();
  });
});

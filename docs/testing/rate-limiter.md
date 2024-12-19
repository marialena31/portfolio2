# Rate Limiter Testing Guide

## Overview

The rate limiting system is a critical security component that prevents API abuse. This document outlines the testing strategy and patterns used to ensure its reliability.

## Test Structure

### Unit Tests (`src/utils/__tests__/advanced-rate-limiter.test.ts`)

Tests the core rate limiting logic:

```typescript
describe('AdvancedRateLimiter', () => {
  // Basic rate limiting
  it('should allow requests within limits');
  it('should block requests after exceeding limit');

  // Time windows
  it('should reset after window expires');

  // IP handling
  it('should respect whitelist');

  // Cleanup
  it('should cleanup expired entries');
});
```

### Integration Tests (`src/middleware/__tests__/rate-limiter.integration.test.ts`)

Tests the Express.js middleware integration:

```typescript
describe('RateLimiterMiddleware Integration', () => {
  // HTTP integration
  it('should allow requests within rate limit');
  it('should block requests after exceeding limit');

  // Headers
  it('should set appropriate rate limit headers');

  // Multi-client handling
  it('should handle multiple IPs independently');
});
```

## Test Data Patterns

1. **Time-based Testing**

   - Use small time windows (1s) for faster tests
   - Mock time when needed using Jest timers
   - Wait periods should be slightly longer than windows

2. **IP Addresses**

   - Use predictable test IPs (127.0.0.1)
   - Test IPv4 and IPv6 formats
   - Test various IP header formats

3. **Request Patterns**
   - Single requests
   - Burst requests
   - Distributed requests over time
   - Concurrent requests

## Mocking Patterns

1. **Time Mocking**

   ```typescript
   jest.useFakeTimers();
   jest.advanceTimersByTime(1000);
   ```

2. **IP Headers**
   ```typescript
   request(app).get('/test').set('X-Forwarded-For', '1.1.1.1');
   ```

## Common Test Scenarios

1. **Basic Rate Limiting**

   - Verify request counting
   - Check remaining attempts
   - Confirm blocking behavior

2. **Time Windows**

   - Test window reset
   - Verify attempt reset
   - Check block duration

3. **Headers**

   - X-RateLimit-Limit
   - X-RateLimit-Remaining
   - X-RateLimit-Reset

4. **Error Cases**
   - Invalid IPs
   - Missing headers
   - Concurrent requests

## Best Practices

1. **Test Independence**

   - Reset state between tests
   - Use beforeEach for setup
   - Clean up after tests

2. **Async Testing**

   - Use async/await
   - Handle promises properly
   - Set appropriate timeouts

3. **Error Handling**
   - Test error responses
   - Verify error messages
   - Check status codes

## Coverage Requirements

- Statements: 80%
- Branches: 80%
- Functions: 80%
- Lines: 80%

## Running Tests

```bash
# Run rate limiter tests
yarn test src/utils/__tests__/advanced-rate-limiter.test.ts
yarn test src/middleware/__tests__/rate-limiter.integration.test.ts

# Run with coverage
yarn test:coverage
```

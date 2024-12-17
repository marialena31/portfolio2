# Security Best Practices

## Overview

This document outlines the security measures implemented in our Gatsby v5 project.

## Security Headers

We use gatsby-plugin-netlify to implement the following security headers:

- X-Frame-Options: Prevents clickjacking attacks
- X-XSS-Protection: Provides XSS protection for legacy browsers
- X-Content-Type-Options: Prevents MIME-type sniffing
- Content-Security-Policy: Controls resource loading
- Strict-Transport-Security: Enforces HTTPS
- Permissions-Policy: Controls browser features
- Referrer-Policy: Controls referrer information

## Form Protection

The project implements robust form protection through multiple layers:

### Rate Limiting

- Time-based window limiting
- Progressive blocking for repeated violations
- Configurable attempts and block durations
- IP-based tracking (when available)

### Input Validation & Sanitization

- All user inputs are sanitized against XSS
- Form data validation before processing
- Input length and content restrictions

### Usage Example

```typescript
import { FormProtection } from '../utils/form-protection';

const formProtection = new FormProtection({
  rateLimitConfig: {
    windowMs: 60000, // 1 minute window
    maxAttempts: 5, // 5 attempts allowed
    blockDuration: 300000, // 5 minutes block
  },
});

// In your form submission handler:
const result = await formProtection.validateSubmission(userIdentifier, formData);

if (!result.valid) {
  // Handle error: result.error
  // Next attempt allowed at: result.nextAttemptAt
  return;
}

// Process sanitized form data: result.sanitizedData
```

### Complete Implementation Example

Here's a full example of a secure contact form implementation:

````typescript
// contact-form.tsx
import React, { useState } from 'react';
import { FormProtection } from '../utils/form-protection';

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

const formProtection = new FormProtection({
  rateLimitConfig: {
    windowMs: 60000,      // 1 minute window
    maxAttempts: 5,       // 5 attempts allowed
    blockDuration: 300000 // 5 minutes block
  }
});

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Get user identifier (could be IP address or session ID in production)
      const userIdentifier = 'user-session-id';

      // Validate and sanitize form data
      const result = await formProtection.validateSubmission(
        userIdentifier,
        formData
      );

      if (!result.valid) {
        if (result.nextAttemptAt) {
          setError(`Too many attempts. Please try again after ${result.nextAttemptAt.toLocaleTimeString()}`);
        } else {
          setError(result.error || 'Validation failed');
        }
        return;
      }

      // Process the sanitized form data
      const response = await submitToAPI(result.sanitizedData);

      if (response.ok) {
        // Reset form on success
        setFormData({ name: '', email: '', message: '' });
        onSubmitSuccess();
        // Reset rate limiter after successful submission
        formProtection.reset(userIdentifier);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show remaining attempts if available
  const remainingAttempts = formProtection.getRemainingAttempts('user-session-id');

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {error && <div className="error-message">{error}</div>}
      {remainingAttempts < 3 && (
        <div className="warning-message">
          {remainingAttempts} attempts remaining
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          minLength={2}
          maxLength={100}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          pattern="[^@]+@[^@]+\.[^@]+"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={1000}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

// API submission function
async function submitToAPI(data: Record<string, string>) {
  // Replace with your actual API endpoint
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
}

## Advanced Rate Limiting
The project implements a sophisticated rate-limiting system with the following features:

### Distributed Rate Limiting
- Redis support for distributed environments
- Consistent rate limiting across multiple server instances
- Configurable Redis connection settings

### IP-Based Protection
- IP-based tracking and blocking
- IP whitelist support
- Progressive blocking duration for repeat offenders

### Adaptive Rate Limiting
- Exponential backoff for repeated violations
- Configurable time windows and attempt limits
- Maximum block duration settings

### Example Configuration
```typescript
import { FormProtection } from '../utils/form-protection';

// Basic memory-based configuration
const formProtection = new FormProtection({
  rateLimitConfig: {
    windowMs: 60000,        // 1 minute window
    maxAttempts: 5,         // 5 attempts allowed
    blockDuration: 300000,  // 5 minutes initial block
    maxBlockDuration: 86400000, // Max 24 hour block
    ipWhitelist: ['127.0.0.1'] // Whitelist localhost
  }
});

// Redis-enabled configuration for production
const productionFormProtection = new FormProtection({
  rateLimitConfig: {
    useRedis: true,
    redisConfig: {
      host: 'your-redis-host',
      port: 6379,
      password: process.env.REDIS_PASSWORD
    },
    windowMs: 60000,
    maxAttempts: 5,
    blockDuration: 300000,
    maxBlockDuration: 86400000
  }
});

// Usage in form handler
async function handleSubmit(req, res) {
  try {
    const result = await formProtection.validateSubmission(
      req.ip,
      req.body
    );

    if (!result.valid) {
      return res.status(429).json({
        error: result.error,
        nextAttemptAt: result.nextAttemptAt,
        rateLimitInfo: result.rateLimitInfo
      });
    }

    // Process the sanitized form data
    await processForm(result.sanitizedData);

    // Reset rate limit after successful submission
    await formProtection.reset(req.ip);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

// Cleanup when shutting down
process.on('SIGTERM', async () => {
  await formProtection.close();
});
````

### Rate Limit Response Format

```typescript
interface RateLimitInfo {
  allowed: boolean;
  nextAttemptAt?: Date;
  remainingAttempts: number;
  isBlocked: boolean;
  blockExpires?: Date;
}
```

### Progressive Blocking

The system implements exponential backoff for repeated violations:

1. First block: 5 minutes
2. Second block: 10 minutes
3. Third block: 20 minutes
4. And so on, up to the configured maxBlockDuration

## Build-time Security

- `npm run security-check` runs before each build
- Dependencies are automatically audited
- Environment variables are checked before deployment

## Best Practices

1. Always use FormProtection for handling form submissions
2. Keep dependencies updated
3. Regular security audits with `npm run security-check`
4. Monitor rate limit violations

## Security Updates

To update security measures:

1. Review and update Content-Security-Policy headers as needed
2. Keep gatsby-plugin-netlify updated
3. Regularly check npm audit reports
4. Adjust rate limiting parameters based on actual usage patterns

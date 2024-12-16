# Types Directory

This directory contains TypeScript type definitions and interfaces used throughout the application.

## Contents

- Component prop interfaces
- GraphQL query types
- Shared type definitions
- Custom type utilities

## Structure

- `index.ts` - Exports all types
- `components.ts` - Component-specific types
- `gatsby.ts` - Gatsby-specific type extensions
- `api.ts` - API response types

## Usage

Import types from this directory:

```typescript
import { HeroProps, ServiceItem, TestimonialData } from '../types';
```

## Best Practices

- Keep types DRY (Don't Repeat Yourself)
- Use descriptive names
- Document complex types
- Use strict typing where possible
- Export all types through index.ts

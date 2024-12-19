# Testing Guide

This document outlines the testing setup and best practices for the Portfolio project.

## Setup

The project uses Jest and React Testing Library for testing. The following packages are installed:

- `jest`: Testing framework
- `@types/jest`: TypeScript definitions for Jest
- `ts-jest`: TypeScript support for Jest
- `@testing-library/react`: React component testing utilities
- `@testing-library/jest-dom`: Custom Jest matchers for DOM testing

## Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage report
yarn test:coverage
```

## Test File Structure

Tests should be placed next to the files they test with the following naming convention:

- Unit tests: `[filename].test.ts(x)`
- Integration tests: `[filename].integration.test.ts(x)`

Example:

```
src/
  components/
    Button/
      Button.tsx
      Button.test.tsx
      Button.integration.test.tsx
```

## Writing Tests

### Component Tests

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    await userEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### Utility Tests

```typescript
import { createSlug } from '../utils/slugify';

describe('createSlug', () => {
  it('converts string to slug format', () => {
    expect(createSlug('Hello World')).toBe('hello-world');
    expect(createSlug('Complex! @#$ String')).toBe('complex-string');
  });
});
```

### Hook Tests

```typescript
import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('increments counter', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
```

## Best Practices

1. **Test Behavior, Not Implementation**

   - Focus on what the component does, not how it does it
   - Test from the user's perspective
   - Avoid testing implementation details

2. **Arrange-Act-Assert Pattern**

   ```typescript
   it('shows success message on form submission', async () => {
     // Arrange
     render(<ContactForm />)

     // Act
     await userEvent.type(screen.getByLabelText('Email'), 'test@example.com')
     await userEvent.click(screen.getByText('Submit'))

     // Assert
     expect(screen.getByText('Message sent!')).toBeInTheDocument()
   })
   ```

3. **Mock External Dependencies**

   ```typescript
   jest.mock('../api/contact', () => ({
     sendMessage: jest.fn().mockResolvedValue({ success: true }),
   }));
   ```

4. **Use Data-testid Sparingly**

   - Prefer querying by role, text, or label
   - Use data-testid only when other options aren't suitable

5. **Test Error States**
   ```typescript
   it('shows error message when API call fails', async () => {
     const error = new Error('API Error')
     sendMessage.mockRejectedValueOnce(error)

     render(<ContactForm />)
     await userEvent.click(screen.getByText('Submit'))

     expect(screen.getByText('Failed to send message')).toBeInTheDocument()
   })
   ```

## Coverage Requirements

The project maintains a minimum coverage threshold of 80% for:

- Statements
- Branches
- Functions
- Lines

Coverage reports can be viewed in the `coverage` directory after running `yarn test:coverage`.

## Continuous Integration

Tests are automatically run in the CI pipeline. The build will fail if:

- Any test fails
- Coverage drops below the required thresholds
- TypeScript or lint errors are present

## Mocking

### Gatsby Specific Mocks

For Gatsby-specific features, use the provided mocks:

```typescript
// Mock gatsby
jest.mock('gatsby', () => ({
  graphql: jest.fn(),
  Link: jest
    .fn()
    .mockImplementation(({ to, ...rest }) => React.createElement('a', { ...rest, href: to })),
  navigate: jest.fn(),
}));
```

### File Mocks

Image and other file imports are automatically mocked via the configuration in `jest.config.js`.

## Debugging Tests

1. **Interactive Mode**

   ```bash
   yarn test --watch
   ```

2. **Debug Mode**

   ```bash
   node --inspect-brk node_modules/.bin/jest --runInBand
   ```

3. **Verbose Output**
   ```bash
   yarn test --verbose
   ```

## Common Issues and Solutions

1. **Test Environment**

   - Tests run in jsdom environment by default
   - Use `@testing-library/jest-dom` matchers for DOM assertions

2. **Async Testing**

   - Always await async operations
   - Use `findBy` queries for elements that appear asynchronously

3. **Event Testing**

   - Use `userEvent` over `fireEvent` for more realistic user interactions
   - Remember to await `userEvent` operations

4. **Component Testing**
   - Wrap components that need context providers in a custom render function
   - Create test-utils.tsx for shared testing utilities

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Common Testing Library Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

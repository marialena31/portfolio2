# Portfolio Website

A portfolio website built with Gatsby, TypeScript, and GraphQL.

## Documentation

- For GraphQL query best practices, see below
- For GraphQL schema modifications and type generation, see [docs/graphql-schema.md](./docs/graphql-schema.md)

## GraphQL Query Best Practices

### 1. Co-locate Queries with Components

Always keep GraphQL queries in the same file as the component that uses them. This follows Gatsby's best practices for several reasons:

- **Maintainability**: Makes it easier to understand what data each component needs
- **Discoverability**: No need to jump between files to understand the data requirements
- **Type Safety**: TypeScript types can be directly associated with the component's props

✅ Good Example:

```tsx
// pages/portfolio.tsx
const PortfolioPage = ({ data }) => { ... }

export const query = graphql`
  query PortfolioQuery {
    allProject {
      nodes {
        id
        title
      }
    }
  }
`;
```

❌ Bad Example:

```tsx
// queries/index.ts (Don't do this!)
export const portfolioQuery = graphql`...`;

// pages/portfolio.tsx
import { portfolioQuery } from '../queries';
```

### 2. Always Name Your Queries

Every GraphQL query in the codebase MUST have a unique name. This is especially important when using multiple queries across different components.

✅ Good Example:

```graphql
query PortfolioPageQuery {
  allPortfolioProject {
    nodes {
      id
      title
    }
  }
}
```

❌ Bad Example:

```graphql
query {
  # Anonymous query - Don't do this!
  allPortfolioProject {
    nodes {
      id
      title
    }
  }
}
```

### 3. Naming Conventions

- Page Queries: Use the format `[PageName]PageQuery`
  Example: `PortfolioPageQuery`, `AboutPageQuery`
- Component Queries: Use the format `[ComponentName]Query`
  Example: `SEOQuery`, `BrandsQuery`
- Template Queries: Use the format `[TemplateName]TemplateQuery`
  Example: `ProjectTemplateQuery`

### 4. Use Static Queries for Components

For non-page components that need data, use `useStaticQuery` hook:

✅ Good Example:

```tsx
// components/Header.tsx
const Header = () => {
  const data = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return <header>{data.site.siteMetadata.title}</header>;
};
```

### 5. Page Queries vs Static Queries

- Use **Page Queries** when:
  - You need variables (like `$id` for dynamic pages)
  - The component is a page or template
- Use **Static Queries** when:
  - The query doesn't need variables
  - The component is reusable and not a page

### 6. TypeScript Integration

Define types that match your GraphQL schema:

✅ Good Example:

```tsx
// types/page-props.ts
interface ProjectQuery {
  project: {
    id: string;
    title: string;
  };
}

type ProjectPageProps = PageProps<ProjectQuery>;
```

### 7. Query Organization

- Keep queries simple and focused
- Break down complex queries into smaller ones when possible
- Use fragments for reusable query parts
- Name your queries descriptively (e.g., `PortfolioQuery`, `SingleProjectQuery`)

## Testing

This project uses Jest for unit and integration testing. The test suite includes:

### Test Categories

- **Unit Tests**: Testing individual components and utilities
- **Integration Tests**: Testing component interactions and middleware
- **API Tests**: Testing Gatsby API endpoints and middleware
- **Component Tests**: Testing React components with React Testing Library

### Rate Limiting Tests

The rate limiting system is tested at multiple levels:

1. **Unit Tests** (`src/utils/__tests__/advanced-rate-limiter.test.ts`)

   - Core rate limiting logic
   - Time window management
   - Attempt counting
   - IP whitelisting

2. **Integration Tests** (`src/middleware/__tests__/rate-limiter.integration.test.ts`)
   - Express.js middleware integration
   - HTTP header handling
   - Request blocking
   - Multi-IP scenarios

### Running Tests

```bash
# Run all tests
yarn test

# Run tests with coverage
yarn test:coverage

# Run specific test file
yarn test path/to/test.ts

# Watch mode for development
yarn test:watch
```

### Test Patterns

1. **Component Testing**

   - Use React Testing Library
   - Focus on user interactions
   - Test accessibility

2. **API Testing**

   - Use Supertest for HTTP assertions
   - Mock external services
   - Test rate limiting and security

3. **Integration Testing**
   - Test component interactions
   - Verify middleware chains
   - Test Gatsby API integration

### Writing Tests

Follow these guidelines when writing tests:

1. **Naming Convention**

   - Test files: `*.test.ts` or `*.test.tsx`
   - Integration tests: `*.integration.test.ts`
   - End-to-end tests: `*.e2e.test.ts`

2. **Test Structure**

   - Use descriptive test names
   - Follow AAA pattern (Arrange, Act, Assert)
   - Group related tests with `describe`

3. **Mocking**

   - Mock external services
   - Use Jest mock functions
   - Reset mocks between tests

4. **Coverage**
   - Aim for 80% coverage
   - Focus on critical paths
   - Document uncovered edge cases

### Continuous Integration

Tests are automatically run in CI/CD pipeline:

- On pull requests
- Before deployment
- Nightly for dependency updates

For more details on specific test suites, see the documentation in the `docs/testing/` directory.

## Development

To start the development server:

```bash
npm run develop
```

## Building

To create a production build:

```bash
npm run build
```

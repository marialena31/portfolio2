# 📋 Ticket List: FrontGatsby Portfolio

## 🟥 High Priority

### 1. TypeScript Strictness & Type Safety ✅ (En cours)

- **Description:** Audit all components and pages to ensure strict typing, especially for GraphQL query results and props. Use auto-generated types from `graphql-types.d.ts` where possible.
- **Why:** Prevents runtime errors and improves maintainability.
- **Files to check:** All files in `src/components`, `src/pages`, and GraphQL queries.

### 2. GraphQL Query Best Practices

- **Description:** Ensure all GraphQL queries are:
  - Co-located with their components/pages.
  - Have unique, descriptive names.
  - Follow naming conventions (`[PageName]PageQuery`, `[ComponentName]Query`, etc.).
- **Why:** Ensures maintainability, discoverability, and type safety.
- **Files to check:** All files using GraphQL queries.

### 3. Type Generation Consistency

- **Description:** Ensure all GraphQL schema modifications are reflected in the generated TypeScript types (`src/types/graphql-types.d.ts`). Run codegen after schema or query changes.
- **Why:** Prevents type drift and runtime errors.
- **Files to check:** GraphQL schema, `codegen.yml`, `src/types/graphql-types.d.ts`.

### 4. Testing Coverage

- **Description:** Review and expand test coverage for components and pages, especially for business logic and data fetching. Ensure all tests pass.
- **Why:** Prevents regressions and ensures reliability.
- **Files to check:** `src/components/__tests__`, `src/pages`, test scripts.

---

## 🟧 Medium Priority

### 5. Consistent Linting & Formatting

- **Description:** Ensure all files conform to ESLint and Prettier rules. Run `yarn lint` and `yarn format`, and fix all reported issues.
- **Why:** Improves code readability and team collaboration.
- **Files to check:** All source files.

### 6. Storybook Stories for All Components

- **Description:** Ensure every reusable component has a corresponding Storybook story for documentation and visual testing.
- **Why:** Enhances component discoverability and design QA.
- **Files to check:** `src/components`, `.stories.tsx` files.

### 7. Accessibility Audit

- **Description:** Audit all pages and components for accessibility (a11y) issues using automated tools and manual checks.
- **Why:** Ensures the site is usable by everyone.
- **Files to check:** All UI components and pages.

---

## 🟨 Low Priority

### 8. Performance Optimization

- **Description:** Review image usage, bundle size, and plugin configuration for performance bottlenecks. Use Gatsby's image plugins and analyze build output.
- **Why:** Improves load times and SEO.
- **Files to check:** `gatsby-config.ts`, image assets, build reports.

### 9. Documentation Improvements

- **Description:** Update and expand documentation, especially for onboarding, GraphQL schema/type generation, and custom plugins.
- **Why:** Helps new contributors and future maintenance.
- **Files to check:** `README.md`, `docs/`, code comments.

### 10. Upgrade Dependencies

- **Description:** Review and update dependencies in `package.json` and `yarn.lock` to their latest compatible versions.
- **Why:** Ensures security and access to new features.
- **Files to check:** `package.json`, `yarn.lock`.

---

# How to Use This List

- Work on tickets from top (high priority) to bottom (low priority).
- Check off or move completed tickets to a "Done" section.

## 🟥 High Priority

### 1. TypeScript Strictness & Type Safety ✅ (En cours)

- **Description:** Audit all components and pages to ensure strict typing, especially for GraphQL query results and props. Use auto-generated types from `graphql-types.d.ts` where possible.
- **Why:** Prevents runtime errors and improves maintainability.
- **Files to check:** All files in `src/components`, `src/pages`, and GraphQL queries.

### 2. GraphQL Query Best Practices

- **Description:** Ensure all GraphQL queries are:
  - Co-located with their components/pages.
  - Have unique, descriptive names.
  - Follow naming conventions (`[PageName]PageQuery`, `[ComponentName]Query`, etc.).
- **Why:** Ensures maintainability, discoverability, and type safety.
- **Files to check:** All files using GraphQL queries.

### 3. Type Generation Consistency

- **Description:** Ensure all GraphQL schema modifications are reflected in the generated TypeScript types (`src/types/graphql-types.d.ts`). Run codegen after schema or query changes.
- **Why:** Prevents type drift and runtime errors.
- **Files to check:** GraphQL schema, `codegen.yml`, `src/types/graphql-types.d.ts`.

### 4. Testing Coverage

- **Description:** Review and expand test coverage for components and pages, especially for business logic and data fetching. Ensure all tests pass.
- **Why:** Prevents regressions and ensures reliability.
- **Files to check:** `src/components/__tests__`, `src/pages`, test scripts.

---

## 🟧 Medium Priority

### 5. Consistent Linting & Formatting

- **Description:** Ensure all files conform to ESLint and Prettier rules. Run `yarn lint` and `yarn format`, and fix all reported issues.
- **Why:** Improves code readability and team collaboration.
- **Files to check:** All source files.

### 6. Storybook Stories for All Components

- **Description:** Ensure every reusable component has a corresponding Storybook story for documentation and visual testing.
- **Why:** Enhances component discoverability and design QA.
- **Files to check:** `src/components`, `.stories.tsx` files.

### 7. Accessibility Audit

- **Description:** Audit all pages and components for accessibility (a11y) issues using automated tools and manual checks.
- **Why:** Ensures the site is usable by everyone.
- **Files to check:** All UI components and pages.

---

## 🟨 Low Priority

### 8. Performance Optimization

- **Description:** Review image usage, bundle size, and plugin configuration for performance bottlenecks. Use Gatsby's image plugins and analyze build output.
- **Why:** Improves load times and SEO.
- **Files to check:** `gatsby-config.ts`, image assets, build reports.

### 9. Documentation Improvements

- **Description:** Update and expand documentation, especially for onboarding, GraphQL schema/type generation, and custom plugins.
- **Why:** Helps new contributors and future maintenance.
- **Files to check:** `README.md`, `docs/`, code comments.

### 10. Upgrade Dependencies

- **Description:** Review and update dependencies in `package.json` and `yarn.lock` to their latest compatible versions.
- **Why:** Ensures security and access to new features.
- **Files to check:** `package.json`, `yarn.lock`.

---

# How to Use This List

- Work on tickets from top (high priority) to bottom (low priority).
- Check off or move completed tickets to a "Done" section.

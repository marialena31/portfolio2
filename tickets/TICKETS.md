# 📋 Ticket List: FrontGatsby Portfolio

## Sommaire

- [✅ Tickets Terminés](#-tickets-terminés)
- [🔜 Tickets Restants / Backlog](#-tickets-restants--backlog)

---

## ✅ Tickets Terminés

### Migration & Setup

- [x] Migration blog Markdown & best practices Gatsby
- [x] Navbar/logo (logo unique, 50px, suppression images/textes en trop)
- [x] Design page projet (plus de barre bleue, espacement réduit)
- [x] Audit des bonnes pratiques blog Gatsby effectué
- [x] Migration Tailwind (SCSS supprimé, mixins, variables, responsive)
- [x] Validation des types TypeScript critiques (props, Hero, ServiceCard, etc.)
- [x] Migration Gatsby Head API SEO

### Style Management Fix

- **Status:** Completed ✓
- **Details:**
  - Standardize z-index usage across components ✓
  - Remove inline styles from components ✓
  - Centralize SCSS variables ✓
  - Fix responsive styles in ServiceCard ✓
  - Fix gradient consistency in services page ✓
  - Standardize grid layouts ✓

### Form Validation Fix

- **Status:** Completed ✓
- **Details:**
  - Add proper client-side validation ✓
  - Improve error handling and feedback ✓
  - Fix file upload handling ✓
  - Add proper type safety ✓
  - Add proper interface for ServiceCard ✓

### Mixin Standardization

- **Status:** Fait (mixins SCSS supprimés lors de la migration Tailwind)
- **Details:**
  - [x] Remove redundant mixins (fait via migration Tailwind)
  - [x] Standardize transition effects (fait via Tailwind)
  - [x] Document usage and parameters (plus pertinent, remplacé par Tailwind)
  - [x] Fix breakpoint inconsistencies (géré par Tailwind)
  - [x] Add responsive grid mixins (géré par Tailwind)

### TypeScript Strictness

- [x] Migrer les composants critiques vers des props typées (fait, ex: Hero)
- [x] Corriger les erreurs de typage sur les pages principales
- [x] Supprimer les any inutiles sur les composants principaux
- [x] Ajouter des interfaces/types cohérents pour les props
- [x] S'assurer que tous les types sont exportés correctement
- **Status:** Completed ✓
- **Details:**
  - Add proper type definitions ✓
  - Fix type inference issues ✓
  - Add proper prop types ✓
  - Remove any types ✓
  - Add proper interface for ServiceCard ✓

### SEO Migration

- **Status:** Done

---

## 🔜 Tickets Restants / Backlog

### TypeScript Strictness (Finitions)

- [x] Vérifier les derniers warnings TypeScript éventuels (aucun warning, projet type-safe) ✓

### Component Testing

- **Status:** Open
- **Details:**
  - Add tests for ServiceCard
  - Add tests for ContactForm
  - Add tests for ProjectForm
  - Add tests for layout components
  - Add tests for responsive behavior

### Performance Optimization

- **Status:** Open
- **Details:**
  - Optimize images
  - Implement lazy loading
  - Reduce bundle size
  - Optimize transitions
  - Add proper image optimization for ServiceCard

### Accessibility Fix

- **Status:** Open
- **Details:**
  - Fix ARIA attributes
  - Add proper tab order
  - Improve keyboard navigation
  - Fix color contrast
  - Add proper ARIA labels for ServiceCard icons

### Documentation & Migration des composants

- **Status:** En cours
- **Details:**
  - [x] README et docs présents dans tous les dossiers principaux
  - [ ] Vérifier/compléter la doc si besoin (fraîcheur, exemples, props)
  - [ ] Ajouter un style guide ou des exemples avancés si pertinent
  - [ ] Migration en cours vers "1 composant = 1 dossier + README.md".

#### Suivi migration composants (à faire un par un)

- [x] ContactForm
- [x] ServiceCard
- [x] ProjectCard
- [x] ProjectForm
- [ ] CarouselTransition
- [ ] CaseStudyCard
- [ ] ClientOnly
- [ ] ContactInfos
- [ ] ContentRenderer
- [ ] CustomPdfViewer
- [ ] CustomPdfViewerNoSSR
- [ ] Icon
- [ ] LinkRenderer
- [ ] PDFViewer
- [ ] PdfViewerClientOnly
- [ ] Tabs
- [ ] Test
- [ ] TestForm
- [ ] footer
- [ ] header
- [ ] icons
- [ ] layout
- [ ] navigation
- [ ] seo
- [ ] home/\* (brands, call-to-action, hero, needs, services, etc.)

### Internationalization

- **Status:** Open

### Storybook Stories

- **Status:** Presque tout est fait
- [x] Add stories for tous les composants principaux (reste à compléter pour certains secondaires si besoin)

### ... (autres tickets backlog à compléter selon le fichier original)

---

Ainsi, tous les tickets réalisés sont clairement séparés du backlog restant à traiter.

- **Why:** Enhances component discoverability and design QA.
- **Files to check:** `src/components`, `.stories.tsx`
- **Priority:** 11
- **Status:** Open
- **Details:**
  - Add stories for ServiceCard
  - Add stories for forms
  - Add stories for layout
  - Add stories for icons

### 12. Dependency Updates

- **Description:** Update dependencies to latest versions.
- **Why:** Ensures security and access to new features.
- **Files to check:** `package.json`, `yarn.lock`
- **Priority:** 12
- **Status:** Open

### 13. Component Refactoring

- **Description:** Refactor complex components for better maintainability.
- **Files to check:** Complex components
- **Priority:** 13
- **Status:** Open
- **Details:**
  - Split large components
  - Improve component composition
  - Add proper hooks
  - Remove duplication
  - Refactor ServiceCard for better reusability

### 14. Error Handling

- **Description:** Improve global error handling.
- **Files to check:** Error boundaries, API calls
- **Priority:** 14
- **Status:** Open
- **Details:**
  - Add error boundaries
  - Improve error messages
  - Add retry logic
  - Add proper logging

### 15. Analytics Integration

- **Description:** Add proper analytics tracking.
- **Files to check:** Analytics setup
- **Priority:** 15
- **Status:** Open
- **Details:**
  - Add page tracking
  - Add event tracking
  - Add form tracking
  - Add error tracking

### 16. Responsive Design

- **Description:** Improve responsive behavior across all components.
- **Files to check:** All components and pages
- **Priority:** 16
- **Status:** Open
- **Details:**
  - Fix grid layouts on mobile
  - Improve ServiceCard responsiveness
  - Standardize breakpoint usage
  - Add proper mobile navigation

### 17. Icon System

- **Description:** Standardize and optimize the icon system.
- **Files to check:** Icon component and usage
- **Priority:** 17
- **Status:** Open
- **Details:**
  - Standardize icon sizes
  - Add proper icon variants
  - Improve icon accessibility
  - Add icon documentation

### 18. Image Optimization

- **Description:** Optimize all images for better performance.
- **Files to check:** Image assets and components
- **Priority:** 18
- **Status:** Open
- **Details:**
  - Implement proper image optimization
  - Add lazy loading
  - Add proper image formats
  - Add image fallbacks

### 19. SEO Best Practices

- **Description:** Implement SEO best practices across the site.
- **Files to check:** All pages and components
- **Priority:** 19
- **Status:** Open
- **Details:**
  - Add proper meta tags
  - Implement structured data
  - Add proper headings
  - Improve URL structure

### 20. Performance Monitoring

- **Description:** Add performance monitoring and optimization.
- **Files to check:** Performance setup
- **Priority:** 20
- **Status:** Open
- **Details:**
  - Add performance monitoring
  - Implement performance budget
  - Add bundle optimization
  - Add proper caching strategy

---

## 🟨 Low Priority

### 21. Code Cleanup

- **Description:** Clean up unused code and improve code organization.
- **Files to check:** All source files
- **Priority:** 21
- **Status:** Open
- **Details:**
  - Remove unused code
  - Improve file organization
  - Add proper comments
  - Standardize code style

### 22. Feature Flags

- **Description:** Add feature flag system for better deployment.
- **Files to check:** Feature flag setup
- **Priority:** 22
- **Status:** Open
- **Details:**
  - Add feature flag system
  - Add proper flag management
  - Add flag documentation
  - Add flag testing

### 23. CI/CD Pipeline

- **Description:** Improve CI/CD pipeline for better deployment.
- **Files to check:** CI/CD configuration
- **Priority:** 23
- **Status:** Open
- **Details:**
  - Add proper pipeline
  - Add automated testing
  - Add deployment strategy
  - Add monitoring

### 24. Security Hardening

- **Description:** Improve security across the application.
- **Files to check:** Security setup
- **Priority:** 24
- **Status:** Open
- **Details:**
  - Add security headers
  - Implement proper authentication
  - Add security monitoring
  - Add security testing

### 25. Documentation Website

- **Description:** Create a dedicated documentation website.
- **Files to check:** Documentation setup
- **Priority:** 25
- **Status:** Open
- **Details:**
  - Create documentation site
  - Add API documentation
  - Add component documentation
  - Add usage examples

---

# How to Use This List

- Work on tickets from top (high priority) to bottom (low priority).
- Check off or move completed tickets to a "Done" section.
- Update priority if needed based on new findings.
- Document any changes or blockers in the ticket description.

## Current Blockers

1. Sass compilation errors
2. Query timeouts
3. Layout issues in ServiceCard
4. Missing TypeScript types
5. Performance issues with images

## Next Steps

1. Start with Style Management Fix (Priority 1)
2. Then move to Form Validation Fix (Priority 2)
3. Followed by Mixin Standardization (Priority 3)
4. Then TypeScript Strictness (Priority 4)
5. Finally SEO Migration (Priority 5)

Each ticket includes detailed information about:

- Specific files to check
- What needs to be fixed
- Why it's important
- Current status
- Any blockers or dependencies

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

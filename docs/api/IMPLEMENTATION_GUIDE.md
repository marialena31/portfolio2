# Portfolio Backend API Implementation Guide

## Overview

This document provides guidelines for implementing the backend GraphQL API for the portfolio website. The API should follow the schema defined in `schema.graphql` and implement all the necessary resolvers and data models.

## Key Requirements

1. **GraphQL Endpoint**

   - Implement a single GraphQL endpoint that serves all queries and mutations
   - Recommended path: `/api/graphql`
   - Support both GET and POST methods

2. **Authentication & Authorization**

   - Implement JWT-based authentication for mutations
   - Queries should be public
   - Mutations should require admin authentication

3. **Rate Limiting**

   - Implement rate limiting as per the provided rate limiter configuration
   - Use the same rate limiting rules as the frontend

4. **Caching**
   - Implement response caching for queries
   - Recommended cache duration: 5 minutes for most queries
   - Cache invalidation on mutations

## Data Models

### Project

- Store complete project information including metadata
- Include timestamps for creation and updates
- Support filtering and pagination
- Implement slug generation on the backend

### Home

- Store all home page sections in a structured format
- Support partial updates through mutations
- Maintain version history of content changes

### Services & Skills

- Implement categorization and relationships
- Support ordering of items
- Include metadata for tracking usage

### Brands

- Store brand assets in a CDN or file storage
- Maintain image optimization information
- Support multiple image formats

## API Features

### Queries

1. **Pagination**

   - Implement cursor-based pagination for lists
   - Support limit/offset parameters
   - Include total counts in responses

2. **Filtering**

   - Support filtering by tags for projects
   - Enable search by name/title
   - Implement category-based filtering for skills

3. **Error Handling**
   - Use standard GraphQL error formatting
   - Include detailed error messages in development
   - Sanitize error messages in production

### Mutations

1. **Input Validation**

   - Validate all input fields
   - Implement custom validators for URLs and slugs
   - Return meaningful validation errors

2. **Asset Handling**
   - Support file uploads for images
   - Implement image optimization
   - Generate required image variants

## Best Practices

1. **Performance**

   - Implement DataLoader for efficient data fetching
   - Use database indexing appropriately
   - Optimize N+1 query problems

2. **Security**

   - Implement input sanitization
   - Use parameterized queries
   - Rate limit by IP and token
   - Implement security headers

3. **Monitoring**
   - Log all GraphQL operations
   - Track resolver performance
   - Monitor error rates
   - Implement health checks

## Testing Requirements

1. **Unit Tests**

   - Test all resolvers
   - Test input validation
   - Test authentication/authorization

2. **Integration Tests**

   - Test complete GraphQL operations
   - Test rate limiting
   - Test caching behavior

3. **Load Tests**
   - Test with expected traffic patterns
   - Verify rate limiting behavior
   - Test cache effectiveness

## Development Setup

1. **Environment Variables**

```env
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio
JWT_SECRET=your-secret-key
STORAGE_BUCKET=your-storage-bucket
NODE_ENV=development
```

2. **Database Migrations**
   - Implement proper database migrations
   - Include seed data for development
   - Document migration procedures

## API Examples

### Query Examples

```graphql
# Fetch projects with pagination
query {
  projects(limit: 10, offset: 0) {
    id
    title
    description
    image
    tags
  }
}

# Fetch home page data
query {
  home {
    hero {
      title
      subtitle
      cta {
        text
        link
      }
    }
    needs {
      title
      items {
        question
        solution
      }
    }
  }
}
```

### Mutation Examples

```graphql
# Create a new project
mutation {
  createProject(
    input: {
      title: "New Project"
      description: "Project description"
      image: "project-image.jpg"
      tags: ["React", "GraphQL"]
    }
  ) {
    id
    title
    slug
  }
}

# Update home page content
mutation {
  updateHome(
    input: {
      hero: {
        title: "Updated Title"
        subtitle: "New subtitle"
        cta: { text: "Contact Now", link: "/contact", type: PRIMARY }
      }
    }
  ) {
    hero {
      title
      subtitle
    }
  }
}
```

## Deployment Considerations

1. **Environment Setup**

   - Configure production environment variables
   - Set up proper logging
   - Configure monitoring

2. **Performance Optimization**

   - Enable compression
   - Configure proper cache headers
   - Set up CDN for assets

3. **Security Measures**
   - Enable HTTPS
   - Configure CORS properly
   - Set up proper firewall rules

## Support and Maintenance

1. **Documentation**

   - Maintain API documentation
   - Document all breaking changes
   - Keep examples up to date

2. **Monitoring**

   - Set up error tracking
   - Monitor performance metrics
   - Track API usage

3. **Updates**
   - Plan for regular security updates
   - Schedule maintenance windows
   - Communicate changes to frontend team

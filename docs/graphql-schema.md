# GraphQL Schema Modifications Guide

This guide explains how to modify the GraphQL schema in this Gatsby project. The schema is automatically generated from your data sources and can be modified in several ways.

## Table of Contents

- [1. Data Sources](#1-data-sources)
- [2. Adding New Fields](#2-adding-new-fields)
- [3. Examples](#3-examples)
- [4. Type Generation](#4-type-generation)

## 1. Data Sources

The GraphQL schema is built from these sources:

1. **Site Metadata** (`gatsby-config.ts`)
2. **Source Plugins**:
   - `gatsby-source-filesystem` (images)
   - `gatsby-source-portfolio-data` (portfolio data)
3. **Data Files** (`src/data/*.ts`)

## 2. Adding New Fields

### 2.1 Site Metadata

To add fields to site metadata:

1. Open `gatsby-config.ts`
2. Modify the `siteMetadata` object:

```typescript
siteMetadata: {
  // Existing fields
  title: `ExpertEcom`,
  // Add new fields
  newField: `value`,
  socialMedia: {
    linkedin: `url`
  }
}
```

### 2.2 Data Files

To add fields to data structures:

1. Update the type definition in `src/types/data.ts`
2. Update the data file in `src/data/`
3. Update the source plugin if necessary

Example:

```typescript
// 1. In src/types/data.ts
interface Project {
  id: string;
  title: string;
  // Add new field
  category: string;
}

// 2. In src/data/projects.ts
const createProject = (
  id: string,
  title: string,
  category: string // Add parameter
) => ({
  id,
  title,
  category, // Add field
});
```

## 3. Examples

### Example 1: Adding a Category to Projects

1. **Update Type Definition**:

```typescript
// src/types/data.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string; // New field
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
}
```

2. **Update Data File**:

```typescript
// src/data/projects.ts
const createProject = (
  id: string,
  title: string,
  description: string,
  image: string,
  tags: string[],
  category: string, // New parameter
  githubUrl?: string,
  liveUrl?: string
): Project => ({
  id,
  title,
  description,
  image,
  tags,
  category, // New field
  githubUrl: githubUrl as Project['githubUrl'],
  liveUrl: liveUrl as Project['liveUrl'],
  slug: createSlug(title),
});
```

3. **Update GraphQL Query**:

```typescript
// In your component
export const query = graphql`
  query ProjectQuery {
    allProject {
      nodes {
        id
        title
        category # New field
      }
    }
  }
`;
```

### Example 2: Adding Social Media Links

1. **Update Site Metadata**:

```typescript
// gatsby-config.ts
{
  siteMetadata: {
    // Existing fields...
    socialMedia: {
      linkedin: 'https://linkedin.com/in/your-profile',
      twitter: '@your-handle',
      github: 'your-username'
    }
  }
}
```

2. **Query New Fields**:

```typescript
export const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        socialMedia {
          linkedin
          twitter
          github
        }
      }
    }
  }
`;
```

## 4. Type Generation

After making changes:

1. Run `gatsby develop`
2. The `gatsby-plugin-graphql-codegen` plugin will automatically:
   - Generate new TypeScript types
   - Update `src/types/graphql-types.ts`

### Configuration

The type generation is configured in `gatsby-config.ts`:

```typescript
{
  resolve: 'gatsby-plugin-graphql-codegen',
  options: {
    fileName: `src/types/graphql-types.d.ts`,
    documentPaths: ['./src/**/*.{ts,tsx}'],
    codegenConfig: {
      maybeValue: 'T | undefined',
      avoidOptionals: true,
      enumsAsTypes: true,
      skipTypename: true,
      namingConvention: {
        enumValues: 'keep',
      },
      scalars: {
        Date: 'string',
        JSON: '{ [key: string]: any }',
      },
    },
  },
}
```

## Best Practices

1. Always update types before updating data
2. Run `gatsby develop` after making changes to verify type generation
3. Use TypeScript interfaces for data structures
4. Keep data files organized in `src/data/`
5. Document new fields in component queries

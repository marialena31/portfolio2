# Data Schema and Content Model Documentation

## Project Schema

Projects are the main content type representing portfolio items:

```typescript
type Project {
  id: String!
  title: String!
  description: String!
  image: String!
  tags: [String!]!
  githubUrl: String!
  liveUrl: String!
  slug: String!
}
```

## Home Page Schema

The home page content is structured into several sections:

### Hero Section

```typescript
type HomeHero {
  title: String!
  subtitle: String!
  cta: HomeButton!
}
```

### Needs Section

```typescript
type HomeNeeds {
  title: String!
  items: [HomeNeedItem!]!
}

type HomeNeedItem {
  question: String!
  solution: String!
  link: String!
}
```

### Services Section

```typescript
type HomeServices {
  title: String!
  items: [HomeServiceItem!]!
}

type HomeServiceItem {
  title: String!
  description: String!
  icon: String!
  link: String!
}
```

### Brands Section

```typescript
type HomeBrands {
  title: String!
  items: [HomeBrandItem!]!
}

type HomeBrandItem {
  name: String!
  logo: String!
  alt: String!
}
```

### Call to Action Section

```typescript
type HomeCallToAction {
  title: String!
  buttons: [HomeButton!]!
}

type HomeButton {
  text: String!
  link: String!
  type: String
}
```

## Metadata and SEO Types

### Site Metadata

```typescript
interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  image: string;
  twitterUsername: string;
  author: string;
  pageMetadata: {
    home: PageMetadata;
    about: PageMetadata;
    services: PageMetadata;
    portfolio: PageMetadata;
    contact: PageMetadata;
  };
}

interface PageMetadata {
  description: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  pageName?: 'home' | 'about' | 'services' | 'portfolio' | 'contact';
}
```

### Call to Action Button

```typescript
interface CallToActionButton {
  text: string;
  link: string;
  type: 'primary' | 'secondary';
  isExternal?: boolean;
  phoneNumber?: string;
}
```

### Home Data (Detailed Structure)

```typescript
interface HomeData {
  hero: {
    title: string;
    subtitle: string;
    cta: {
      text: string;
      link: string;
      phoneNumber: string;
    };
  };
  needs: {
    title: string;
    items: Array<{
      question: string;
      solution: string;
      link: string;
    }>;
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
      link: string;
    }>;
  };
  brands: {
    title: string;
    items: Array<{
      name: string;
      logo: string;
      alt: string;
    }>;
  };
  callToAction: {
    title: string;
    buttons: Array<CallToActionButton>;
  };
}
```

## Additional Content Types

### Skills

```typescript
interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
  category: string;
  icon: string;
}

interface SkillCategory {
  id: string;
  name: string;
  description: string;
}
```

### Services

```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
```

### Social Links

```typescript
interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}
```

### Blog Posts

```typescript
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
}
```

## Example Data

### Services Example

```typescript
{
  id: '1',
  title: 'Web Development',
  description: 'Building modern, responsive web applications',
  icon: 'code',
  features: [
    'Custom website development',
    'Single Page Applications (SPA)',
    'Progressive Web Apps (PWA)',
    'Responsive design'
  ]
}
```

### Skills Example

```typescript
// Skill Category
{
  id: 'frontend',
  name: 'Frontend Development',
  description: 'Building responsive and interactive user interfaces'
}

// Skill
{
  id: '1',
  name: 'React',
  level: 90,
  category: 'frontend',
  icon: 'react'
}
```

### Project Example

```typescript
{
  id: '1',
  title: 'E-commerce Platform',
  description: 'A modern e-commerce platform built with React and Node.js',
  image: '/images/projects/ecommerce.jpg',
  tags: ['React', 'Node.js', 'MongoDB'],
  githubUrl: 'https://github.com/yourusername/ecommerce',
  liveUrl: 'https://ecommerce-demo.com'
}
```

### Blog Post Example

```typescript
{
  id: '1',
  title: 'Introduction to React Hooks',
  excerpt: 'Exploring the power of React Hooks...',
  content: '# Understanding React Hooks\n\nReact Hooks have transformed...',
  date: '2023-11-15',
  author: 'John Doe',
  tags: ['React', 'JavaScript', 'Hooks'],
  slug: 'introduction-to-react-hooks'
}
```

### Social Link Example

```typescript
{
  id: 'github',
  name: 'GitHub',
  url: 'https://github.com/yourusername',
  icon: 'github'
}
```

## File Organization

The data is organized in the following files:

- `src/data/home.ts`: Home page content including hero, needs, services, brands, and CTAs
- `src/data/services.ts`: Service offerings and features
- `src/data/skills.ts`: Skills and skill categories
- `src/data/projects.ts`: Portfolio projects
- `src/data/mockBlogPosts.ts`: Blog post content
- `src/data/social.ts`: Social media links

## Important Notes

1. **Icons**: All icon names should match the available icons in the project's icon system
2. **Images**:
   - Project images should be stored in `/images/projects/`
   - Brand logos should be stored in the appropriate assets directory
3. **URLs**:
   - Internal links should start with `/` (e.g., `/services#maintenance`)
   - External links should include the full URL and set `isExternal: true`
4. **Phone Numbers**:
   - Should follow the format: "+33 07 61 81 11 01"
5. **Dates**:
   - Blog post dates should use ISO format: "YYYY-MM-DD"
6. **Content**:
   - Blog post content supports Markdown formatting
   - Descriptions should be concise and informative
7. **IDs**:
   - Must be unique within each content type
   - Used for routing and data relationships

## Content Organization

1. **Projects**: Each project is a standalone entity with its own page, accessible via its slug.
2. **Home Page**: The home page is composed of multiple sections:
   - Hero section with title, subtitle, and CTA
   - Needs section addressing visitor pain points
   - Services section showcasing offerings
   - Brands section displaying partnerships/technologies
   - Call to action section with customizable buttons
3. **Skills**: Technical skills organized by categories with proficiency levels
4. **Services**: Detailed service offerings with features
5. **Blog**: Blog posts with full content and metadata
6. **Social Links**: External social media and professional profiles
7. **Site Metadata**: Global site configuration including:
   - Basic site information (title, description, URL)
   - SEO metadata for each page
   - Twitter integration
   - Author information

## Data Requirements

- All fields marked with `!` are required
- Images and icons should be provided as URLs or file paths
- Links should be valid URLs or internal paths
- Skill levels should be numbers between 0-100
- Blog post dates should follow ISO format
- Icons should follow the project's icon naming convention
- Slugs should be URL-friendly strings
- Call to Action buttons must specify either 'primary' or 'secondary' type
- Page metadata must be provided for all defined pages (home, about, services, portfolio, contact)
- Phone numbers should follow a consistent format when provided

## GraphQL Queries

### Fetch All Projects

```graphql
query {
  allProject {
    edges {
      node {
        id
        title
        description
        image
        tags
        githubUrl
        liveUrl
        slug
      }
    }
  }
}
```

### Fetch Home Page Data

```graphql
query {
  homeJson {
    hero {
      title
      subtitle
      cta {
        text
        link
        type
      }
    }
    needs {
      title
      items {
        question
        solution
        link
      }
    }
    services {
      title
      items {
        title
        description
        icon
        link
      }
    }
    brands {
      title
      items {
        name
        logo
        alt
      }
    }
    callToAction {
      title
      buttons {
        text
        link
        type
      }
    }
  }
}
```

### Fetch Skills and Categories

```graphql
query {
  allSkill {
    edges {
      node {
        id
        name
        level
        category
        icon
      }
    }
  }
  allSkillCategory {
    edges {
      node {
        id
        name
        description
      }
    }
  }
}
```

### Fetch Services

```graphql
query {
  allService {
    edges {
      node {
        id
        title
        description
        icon
        features
      }
    }
  }
}
```

### Fetch Blog Posts

```graphql
query {
  allBlogPost {
    edges {
      node {
        id
        title
        excerpt
        content
        date
        author
        tags
        slug
      }
    }
  }
}
```

### Fetch Social Links

```graphql
query {
  allSocialLink {
    edges {
      node {
        id
        name
        url
        icon
      }
    }
  }
}
```

### Fetch Site Metadata

```graphql
query {
  site {
    siteMetadata {
      title
      description
      siteUrl
      image
      twitterUsername
      author
      pageMetadata {
        home {
          description
        }
        about {
          description
        }
        services {
          description
        }
        portfolio {
          description
        }
        contact {
          description
        }
      }
    }
  }
}
```

### Fetch Home Data

```graphql
query {
  homeJson {
    hero {
      title
      subtitle
      cta {
        text
        link
        phoneNumber
      }
    }
    needs {
      title
      items {
        question
        solution
        link
      }
    }
    services {
      title
      items {
        title
        description
        icon
        link
      }
    }
    brands {
      title
      items {
        name
        logo
        alt
      }
    }
    callToAction {
      title
      buttons {
        text
        link
        type
        isExternal
        phoneNumber
      }
    }
  }
}
```

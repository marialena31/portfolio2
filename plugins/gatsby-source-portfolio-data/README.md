# gatsby-source-portfolio-data

A custom Gatsby source plugin that provides data for a portfolio website. This plugin sources and structures data for projects, services, skills, blog posts, and home page content.

## Features

- Creates GraphQL nodes for:
  - Projects
  - Services
  - Skills
  - Blog Posts
  - Home Page Content (Hero, Needs, Services, Testimonials, Call-to-Action sections)
- Provides TypeScript type definitions
- Implements Gatsby Node APIs for data sourcing and page creation

## Installation

As this is a local plugin, it's automatically included in your Gatsby project when placed in the `plugins` directory.

## Data Structure

### Projects

```graphql
type Project implements Node {
  id: ID!
  title: String!
  description: String!
  image: String!
  tags: [String!]!
  githubUrl: String
  liveUrl: String
  slug: String!
}
```

### Services

```graphql
type Service implements Node {
  id: ID!
  title: String!
  description: String!
  icon: String!
}
```

### Skills

```graphql
type Skill implements Node {
  id: ID!
  name: String!
  level: Int!
  category: String!
}
```

### Blog Posts

```graphql
type BlogPost implements Node {
  id: ID!
  title: String!
  excerpt: String!
  content: String!
  date: String!
  author: String!
  tags: [String!]!
  slug: String!
}
```

### Home Page Content

```graphql
type HomeJson implements Node {
  hero: HomeHero!
  needs: HomeNeeds!
  services: HomeServices!
  testimonials: HomeTestimonials!
  callToAction: HomeCallToAction!
}
```

## Usage

The plugin automatically sources data from your project's data files located in `src/data/`. You can query the data using GraphQL in your Gatsby pages and components.

### Example Queries

Query all projects:

```graphql
query {
  allProject {
    nodes {
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
```

Query home page data:

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
    services {
      title
      items {
        title
        description
        icon
        link
      }
    }
  }
}
```

## Development

The plugin uses TypeScript and implements the following Gatsby Node APIs:

- `createSchemaCustomization`: Defines the GraphQL schema
- `sourceNodes`: Sources and creates nodes from the data files
- `createPages`: Generates pages based on the sourced data

## Requirements

- Gatsby v5.0.0 or higher
- Node.js
- TypeScript

## License

MIT

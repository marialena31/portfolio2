import { GatsbyNode } from 'gatsby';
import * as path from 'path';
import {
  projects,
} from '../../src/data/projects';
import {
  services,
} from '../../src/data/services';
import {
  skills,
} from '../../src/data/skills';
import {
  blogPosts,
} from '../../src/data/mockBlogPosts';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
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

    type Service implements Node {
      id: ID!
      title: String!
      description: String!
      icon: String!
    }

    type Skill implements Node {
      id: ID!
      name: String!
      level: Int!
      category: String!
    }

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
  `;

  createTypes(typeDefs);
};

export const sourceNodes: GatsbyNode['sourceNodes'] = ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  // Create nodes for projects
  projects.forEach(project => {
    const slug = project.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const nodeMeta = {
      id: createNodeId(`project-${project.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Project',
        contentDigest: createContentDigest(project),
      },
    };

    createNode({ 
      ...project, 
      slug,
      ...nodeMeta 
    });
  });

  // Create nodes for services
  services.forEach(service => {
    const nodeMeta = {
      id: createNodeId(`service-${service.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Service',
        contentDigest: createContentDigest(service),
      },
    };

    createNode({ ...service, ...nodeMeta });
  });

  // Create nodes for skills
  skills.forEach(skill => {
    const nodeMeta = {
      id: createNodeId(`skill-${skill.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Skill',
        contentDigest: createContentDigest(skill),
      },
    };

    createNode({ ...skill, ...nodeMeta });
  });

  // Create nodes for blog posts
  blogPosts.forEach(post => {
    const nodeMeta = {
      id: createNodeId(`blog-post-${post.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'BlogPost',
        contentDigest: createContentDigest(post),
      },
    };

    createNode({ ...post, ...nodeMeta });
  });
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for blog posts
  const result = await graphql<{
    allBlogPost: {
      nodes: Array<{
        slug: string;
      }>;
    };
  }>(`
    query {
      allBlogPost {
        nodes {
          slug
        }
      }
    }
  `);

  // Create blog post pages
  result.data?.allBlogPost.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: {
        slug: node.slug,
      },
    });
  });
};

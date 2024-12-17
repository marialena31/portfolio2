import { GatsbyNode } from 'gatsby';
import * as path from 'path';
import { projects } from '../../src/data/projects';
import { services } from '../../src/data/services';
import { skills } from '../../src/data/skills';
import { blogPosts } from '../../src/data/mockBlogPosts';
import { homeData } from '../../src/data/home';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
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

    type HomeJson implements Node {
      hero: HomeHero!
      needs: HomeNeeds!
      services: HomeServices!
      testimonials: HomeTestimonials!
      callToAction: HomeCallToAction!
    }

    type HomeHero {
      title: String!
      subtitle: String!
      cta: HomeButton!
    }

    type HomeNeeds {
      title: String!
      items: [HomeNeedItem!]!
    }

    type HomeNeedItem {
      question: String!
      solution: String!
      link: String!
    }

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

    type HomeTestimonials {
      title: String!
      items: [HomeTestimonialItem!]!
    }

    type HomeTestimonialItem {
      quote: String!
      author: String!
      company: String!
      result: String!
    }

    type HomeCallToAction {
      title: String!
      buttons: [HomeButton!]!
    }

    type HomeButton {
      text: String!
      link: String!
      type: String
    }

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
  `;

  createTypes(typeDefs);
};

export const sourceNodes: GatsbyNode['sourceNodes'] = ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  // Create node for home data
  createNode({
    ...homeData,
    id: createNodeId('home-data'),
    parent: null,
    children: [],
    internal: {
      type: 'HomeJson',
      contentDigest: createContentDigest(homeData),
    },
  });

  // Create nodes for blog posts
  blogPosts.forEach(post => {
    const nodeId = createNodeId(`blog-post-${post.slug}`);
    createNode({
      ...post,
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: 'BlogPost',
        contentDigest: createContentDigest(post),
      },
    });
  });

  // Create nodes for projects
  projects.forEach(project => {
    const slug = project.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    createNode({
      ...project,
      slug,
      id: createNodeId(`project-${project.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Project',
        contentDigest: createContentDigest(project),
      },
    });
  });

  // Create nodes for services
  services.forEach(service => {
    createNode({
      ...service,
      id: createNodeId(`service-${service.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Service',
        contentDigest: createContentDigest(service),
      },
    });
  });

  // Create nodes for skills
  skills.forEach(skill => {
    createNode({
      ...skill,
      id: createNodeId(`skill-${skill.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Skill',
        contentDigest: createContentDigest(skill),
      },
    });
  });
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for blog posts and projects
  const result = await graphql<{
    allBlogPost: {
      nodes: Array<{
        slug: string;
      }>;
    };
    allProject: {
      nodes: Array<{
        id: string;
        slug: string;
      }>;
    };
  }>(`
    query GetPagesData {
      allBlogPost {
        nodes {
          slug
        }
      }
      allProject {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

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

  // Create project pages
  result.data?.allProject.nodes.forEach(node => {
    createPage({
      path: `/portfolio/${node.slug}`,
      component: path.resolve('./src/templates/project.tsx'),
      context: {
        id: node.id,
      },
    });
  });
};

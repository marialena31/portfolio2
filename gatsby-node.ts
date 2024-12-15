import { GatsbyNode } from 'gatsby';
import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import { Request, Response, NextFunction } from 'express';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

interface BlogPostQueryResult {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
          };
        };
      }>;
    };
  };
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Define templates
  const projectTemplate = path.resolve('./src/templates/project.tsx');
  const blogPostTemplate = path.resolve(__dirname, 'src/templates/blog-post.tsx');

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

  if (result.errors) {
    throw result.errors;
  }

  // Create blog post pages
  result.data?.allBlogPost.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  stage,
  actions,
  getConfig,
}) => {
  const config = getConfig();

  // Add TypeScript support
  if (stage === 'build-javascript' || stage === 'develop') {
    config.resolve = {
      ...config.resolve,
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    };
  }

  // Add path aliases
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@templates': path.resolve(__dirname, 'src/templates'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@types': path.resolve(__dirname, 'src/types'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};

// For custom server-side functionality during development
export const onCreateDevServer: GatsbyNode['onCreateDevServer'] = ({ app }) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    // Add custom middleware if needed
    if (req.url.startsWith('/api/')) {
      // Handle API routes
      res.setHeader('Content-Type', 'application/json');
    }
    next();
  });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
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
  `;

  createTypes(typeDefs);
};

export const sourceNodes: GatsbyNode['sourceNodes'] = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  // Load the mock data
  const homeData = require('./src/data/home.json');

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
};

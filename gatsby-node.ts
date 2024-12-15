import { GatsbyNode } from 'gatsby';
import path from 'path';
import { Request, Response, NextFunction } from 'express';

interface ProjectQueryResult {
  data?: {
    allProject: {
      edges: Array<{
        node: {
          id: string
          title: string
          description: string
          image: string
          tags: string[]
          githubUrl: string
          liveUrl: string
          slug: string
        }
      }>
    }
  }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Define template
  const projectTemplate = path.resolve('./src/templates/project.tsx');

  // Query for projects using the correct type name
  const result = await graphql<ProjectQueryResult>(`
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
  `);

  if (result.errors) {
    throw result.errors;
  }

  const data = result.data;
  if (!data) {
    throw new Error('No data returned from GraphQL query');
  }

  const projects = data.data?.allProject.edges || [];

  projects.forEach((project: any) => {
    createPage({
      path: `/project/${project.node.slug}`,
      component: projectTemplate,
      context: {
        id: project.node.id,
        slug: project.node.slug,
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

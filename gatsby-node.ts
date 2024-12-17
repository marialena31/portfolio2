import { GatsbyNode } from 'gatsby';
import path from 'path';
import { projects } from './src/data/projects';
import { NextFunction, Request, Response } from 'express';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql<{
    allPortfolioProject: {
      nodes: Array<{
        id: string;
        title: string;
      }>;
    };
  }>(`
    query GetPortfolioProjects {
      allPortfolioProject {
        nodes {
          id
          title
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create project pages
  result.data?.allPortfolioProject.nodes.forEach(project => {
    const slug = project.title.toLowerCase().replace(/\s+/g, '-');
    createPage({
      path: `/portfolio/${slug}`,
      component: path.resolve('./src/templates/project.tsx'),
      context: {
        id: project.id,
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

  if (stage === 'build-javascript' || stage === 'develop') {
    const miniCssExtractPlugin = config.plugins.find(
      (plugin: { constructor: { name: string } }) =>
        plugin.constructor.name === 'MiniCssExtractPlugin'
    );

    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }

    actions.replaceWebpackConfig(config);
  }
};

export const onCreateDevServer: GatsbyNode['onCreateDevServer'] = ({ app }) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.url.startsWith('/api/')) {
      res.setHeader('Content-Type', 'application/json');
    }
    next();
  });
};

export const sourceNodes: GatsbyNode['sourceNodes'] = ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  // Create nodes for projects
  projects.forEach(project => {
    const nodeContent = {
      ...project,
    };

    const nodeMeta = {
      id: createNodeId(`project-${project.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'PortfolioProject',
        content: JSON.stringify(nodeContent),
        contentDigest: createContentDigest(nodeContent),
      },
    };

    createNode({ ...nodeContent, ...nodeMeta });
  });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type HomeJson implements Node {
      hero: HomeHero!
      needs: HomeNeeds!
      services: HomeServices!
      brands: HomeBrands!
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

    type HomeBrands {
      title: String!
      items: [HomeBrandItem!]!
    }

    type HomeBrandItem {
      name: String!
      logo: String!
      alt: String!
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

    type PortfolioProject implements Node {
      id: String!
      title: String!
      description: String!
      image: String!
      tags: [String!]!
      githubUrl: String!
      liveUrl: String!
      slug: String!
    }
  `;

  createTypes(typeDefs);
};

import { GatsbyNode } from 'gatsby';
import path from 'path';
import { Request, Response, NextFunction } from 'express';

interface ProjectNode {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  slug: string;
}

interface ProjectEdge {
  node: ProjectNode;
}

interface ProjectQueryResult {
  allProject: unknown;
  data?: {
    allProject: {
      edges: ProjectEdge[];
    };
  };
  errors?: unknown;
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve('./src/templates/project.tsx');

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

  if (result.data) {
    const projectData = result.data as { allProject: { edges: ProjectEdge[] } };
    projectData.allProject.edges.forEach((edge: ProjectEdge) => {
      const { node } = edge;
      createPage({
        path: `/portfolio/${node.slug}`,
        component: projectTemplate,
        context: {
          id: node.id,
        },
      });
    });
  }
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
  `;

  createTypes(typeDefs);
};

export const sourceNodes: GatsbyNode['sourceNodes'] = async () => {
  // Node creation is now handled by gatsby-source-portfolio-data plugin
};

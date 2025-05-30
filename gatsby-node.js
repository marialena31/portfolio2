const path = require('path');
const { projects } = require('./src/data/projects');
const { RateLimiterMiddleware } = require('./src/middleware/rate-limiter');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
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

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  const config = getConfig();

  if (stage === 'build-javascript' || stage === 'develop') {
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor && plugin.constructor.name === 'MiniCssExtractPlugin'
    );

    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }

    actions.replaceWebpackConfig(config);
  }
};

exports.onCreateDevServer = ({ app }) => {
  // Apply rate limiting to all API routes
  const rateLimiter = new RateLimiterMiddleware({
    windowMs: 60000, // 1 minute
    maxAttempts: 100, // 100 requests per minute
    blockDuration: 300000, // 5 minutes
  });

  app.use('/api/*', rateLimiter.middleware);

  app.use((req, res, next) => {
    if (req.url.startsWith('/api/')) {
      res.setHeader('Content-Type', 'application/json');
    }
    next();
  });
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
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

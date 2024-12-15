import { GatsbyNode } from 'gatsby';
import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';

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

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define templates
  const blogPostTemplate = path.resolve('./src/templates/blog-post.tsx');
  const projectTemplate = path.resolve('./src/templates/project.tsx');

  // Get all markdown blog posts sorted by date
  const result = await graphql<BlogPostQueryResult>(`
    {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      'There was an error loading your blog posts',
      result.errors
    );
    return;
  }

  const posts = result.data?.allMarkdownRemark.edges || [];

  // Create blog posts pages
  posts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : posts[index - 1].node;
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previousPostId,
        nextPostId,
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
  app.use((req, res, next) => {
    // Add custom middleware if needed
    if (req.url.startsWith('/api/')) {
      // Handle API routes
      res.setHeader('Content-Type', 'application/json');
    }
    next();
  });
};

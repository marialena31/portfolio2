import React from 'react';
import { useStaticQuery } from 'gatsby';
import type { WindowLocation } from '@reach/router';
import { render } from '@testing-library/react';
import SEO from '../seo';
import Layout from '../layout';
import Brands from '../home/brands';
import BlogPage from '../../pages/blog';
import PortfolioPage from '../../pages/portfolio';
import ProjectTemplate from '../../templates/project';

// Mock gatsby's useStaticQuery
jest.mock('gatsby');
const mockUseStaticQuery = useStaticQuery as jest.Mock;

// Store the last rendered Helmet children
let lastHelmetChildren: React.ReactNode[] = [];

// Mock react-helmet
jest.mock('react-helmet', () => ({
  Helmet: ({ children }: { children: React.ReactNode[] }) => {
    lastHelmetChildren = Array.isArray(children) ? children : [children];
    return null;
  },
}));

// Helper function to find Helmet elements
const findHelmetElement = (type: string) => {
  return lastHelmetChildren.find(child => React.isValidElement(child) && child.type === type) as
    | React.ReactElement
    | undefined;
};

// Helper function to create location object
const createLocation = (pathname: string): WindowLocation => ({
  pathname,
  search: '',
  hash: '',
  href: `http://localhost${pathname}`,
  origin: 'http://localhost',
  protocol: 'http:',
  host: 'localhost',
  hostname: 'localhost',
  port: '',
  ancestorOrigins: {} as DOMStringList,
  assign: () => {},
  reload: () => {},
  replace: () => {},
  state: {},
  key: 'testKey',
});

// Define types for our test props
interface TestPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  path: string;
  uri: string;
  location: WindowLocation;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageContext: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serverData: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageResources: any;
}

describe('GraphQL Integration Tests', () => {
  // Reset all mocks before each test
  beforeEach(() => {
    mockUseStaticQuery.mockReset();
    lastHelmetChildren = [];
  });

  // Common site metadata mock used across tests
  const mockSiteMetadata = {
    site: {
      siteMetadata: {
        title: 'Test Title',
        description: 'Test Description',
        author: 'Test Author',
        siteUrl: 'https://test.com',
      },
    },
  };

  describe('SEO Query', () => {
    const mockSEOData = {
      ...mockSiteMetadata,
      site: {
        siteMetadata: {
          title: 'Test Title',
          description: 'Test Description',
          author: 'Test Author',
          siteUrl: 'https://test.com',
        },
      },
    };

    it('correctly processes SEO metadata', () => {
      mockUseStaticQuery.mockReturnValue(mockSEOData);
      render(<SEO />);

      // Verify that useStaticQuery was called with the correct query
      expect(mockUseStaticQuery).toHaveBeenCalled();
      const queryArg = mockUseStaticQuery.mock.calls[0][0];
      expect(queryArg).toMatchSnapshot();
    });

    it('handles custom SEO props', () => {
      mockUseStaticQuery.mockReturnValue(mockSEOData);
      render(
        <SEO
          title="Custom Title"
          description="Custom Description"
          image="custom-image.jpg"
          pageName="about"
        />
      );

      expect(mockUseStaticQuery).toHaveBeenCalled();
    });
  });

  describe('Layout Query', () => {
    const mockLayoutData = {
      ...mockSiteMetadata,
      site: {
        siteMetadata: {
          title: 'Test Site',
          description: 'Test Site Description',
          author: 'Test Site Author',
        },
      },
    };

    it('correctly processes layout metadata', () => {
      mockUseStaticQuery.mockReturnValue(mockLayoutData);
      render(<Layout>Test Content</Layout>);

      expect(mockUseStaticQuery).toHaveBeenCalled();
      const queryArg = mockUseStaticQuery.mock.calls[0][0];
      expect(queryArg).toMatchSnapshot();
    });
  });

  describe('Brands Query', () => {
    const mockBrandsData = {
      ...mockSiteMetadata,
      allFile: {
        nodes: [
          {
            relativePath: 'images/brands/brand1.png',
            childImageSharp: {
              gatsbyImageData: {
                layout: 'constrained',
                placeholder: {
                  fallback: 'data:image/png;base64,test',
                },
                images: {
                  fallback: {
                    src: '/static/brand1.png',
                    srcSet: '/static/brand1.png 1x',
                    sizes: '150px',
                  },
                },
                width: 150,
                height: 150,
              },
            },
          },
        ],
      },
    };

    it('correctly processes brand images data', () => {
      mockUseStaticQuery.mockReturnValue(mockBrandsData);
      render(<Brands title="Test Brands" />);

      expect(mockUseStaticQuery).toHaveBeenCalled();
      const queryArg = mockUseStaticQuery.mock.calls[0][0];
      expect(queryArg).toMatchSnapshot();
    });

    it('handles missing brand images gracefully', () => {
      const mockData = {
        ...mockSiteMetadata,
        allFile: {
          nodes: [],
        },
      };
      mockUseStaticQuery.mockReturnValue(mockData);

      render(<Brands title="Test Brands" />);
      expect(mockUseStaticQuery).toHaveBeenCalled();
    });
  });

  describe('Blog Query', () => {
    const mockBlogData = {
      ...mockSiteMetadata,
      allBlogPost: {
        nodes: [
          {
            id: '1',
            title: 'Test Blog Post',
            excerpt: 'Test excerpt',
            date: '2024-01-01',
            author: 'Test Author',
            tags: ['test', 'blog'],
            slug: 'test-blog-post',
          },
        ],
      },
    };

    it('correctly processes blog posts', () => {
      mockUseStaticQuery.mockReturnValue(mockBlogData);
      const mockProps: TestPageProps = {
        data: {
          allBlogPost: mockBlogData.allBlogPost,
        },
        path: '/blog',
        uri: '/blog',
        location: createLocation('/blog'),
        pageContext: {},
        params: {},
        serverData: {},
        children: null,
        pageResources: {
          component: null,
          json: {},
          page: {
            componentChunkName: '',
            path: '',
            webpackCompilationHash: '',
            staticQueryHashes: [],
          },
        },
      };
      render(<BlogPage {...mockProps} />);

      expect(mockUseStaticQuery).toHaveBeenCalled();
    });

    it('handles empty blog posts gracefully', () => {
      const mockData = {
        ...mockSiteMetadata,
        allBlogPost: {
          nodes: [],
        },
      };
      mockUseStaticQuery.mockReturnValue(mockData);
      const mockProps: TestPageProps = {
        data: {
          allBlogPost: mockData.allBlogPost,
        },
        path: '/blog',
        uri: '/blog',
        location: createLocation('/blog'),
        pageContext: {},
        params: {},
        serverData: {},
        children: null,
        pageResources: {
          component: null,
          json: {},
          page: {
            componentChunkName: '',
            path: '',
            webpackCompilationHash: '',
            staticQueryHashes: [],
          },
        },
      };
      render(<BlogPage {...mockProps} />);

      expect(mockUseStaticQuery).toHaveBeenCalled();
    });
  });

  describe('Portfolio Query', () => {
    const mockPortfolioData = {
      ...mockSiteMetadata,
      allPortfolioProject: {
        nodes: [
          {
            id: '1',
            title: 'Test Project',
            description: 'Test project description',
            image: 'test-image.jpg',
            tags: ['react', 'typescript'],
            githubUrl: 'https://github.com/test',
            liveUrl: 'https://test.com',
            slug: 'test-project',
          },
        ],
      },
    };

    it('correctly processes portfolio project data', () => {
      mockUseStaticQuery.mockReturnValue(mockPortfolioData);
      const mockProps: TestPageProps = {
        data: {
          allPortfolioProject: mockPortfolioData.allPortfolioProject,
        },
        path: '/portfolio',
        uri: '/portfolio',
        location: createLocation('/portfolio'),
        pageContext: {},
        params: {},
        serverData: {},
        children: null,
        pageResources: {
          component: null,
          json: {},
          page: {
            componentChunkName: '',
            path: '',
            webpackCompilationHash: '',
            staticQueryHashes: [],
          },
        },
      };
      render(<PortfolioPage {...mockProps} />);

      expect(mockUseStaticQuery).toHaveBeenCalled();
      const queryArg = mockUseStaticQuery.mock.calls[0][0];
      expect(queryArg).toMatchSnapshot();
    });

    it('handles empty portfolio projects gracefully', () => {
      const mockData = {
        ...mockSiteMetadata,
        allPortfolioProject: {
          nodes: [],
        },
      };
      mockUseStaticQuery.mockReturnValue(mockData);
      const mockProps: TestPageProps = {
        data: {
          allPortfolioProject: mockData.allPortfolioProject,
        },
        path: '/portfolio',
        uri: '/portfolio',
        location: createLocation('/portfolio'),
        pageContext: {},
        params: {},
        serverData: {},
        children: null,
        pageResources: {
          component: null,
          json: {},
          page: {
            componentChunkName: '',
            path: '',
            webpackCompilationHash: '',
            staticQueryHashes: [],
          },
        },
      };
      render(<PortfolioPage {...mockProps} />);

      expect(mockUseStaticQuery).toHaveBeenCalled();
    });
  });

  describe('Project Template Query', () => {
    const mockSiteMetadata = {
      site: {
        siteMetadata: {
          title: 'Test Title',
          description: 'Test Description',
          author: 'Test Author',
        },
      },
    };

    const mockProjectData = {
      portfolioProject: {
        id: 'test-id',
        title: 'Test Project',
        description: 'Test Description',
        image: 'test-image.jpg',
        tags: ['test', 'mock'],
        githubUrl: 'https://github.com/test',
        liveUrl: 'https://test.com',
        slug: 'test-project',
      },
    };

    beforeEach(() => {
      // Set up the default mock for site metadata
      mockUseStaticQuery.mockReturnValue(mockSiteMetadata);
    });

    it('correctly processes single project data', () => {
      // Create test props with the project data
      const testProps: TestPageProps = {
        data: mockProjectData,
        path: '/project/test-id',
        uri: '/project/test-id',
        location: createLocation('/project/test-id'),
        pageContext: { id: 'test-id' },
        params: {},
        serverData: null,
        children: null,
        pageResources: {
          component: {},
          json: {},
          page: {
            componentChunkName: 'component---src-templates-project-tsx',
            path: '/project/test-id',
            webpackCompilationHash: '',
            staticQueryHashes: [],
          },
        },
      };

      // Render the component with test props
      render(<ProjectTemplate {...testProps} />);

      // Verify that useStaticQuery was called for site metadata
      expect(mockUseStaticQuery).toHaveBeenCalled();

      // Verify the rendered content
      const titleElement = findHelmetElement('title');
      expect(titleElement?.props.children).toBe('Test Project');
      expect(document.querySelector('h1')?.textContent).toBe('Test Project');

      // Verify meta description
      const descriptionElement = lastHelmetChildren.find(
        child =>
          React.isValidElement(child) && child.type === 'meta' && child.props.name === 'description'
      ) as React.ReactElement;
      expect(descriptionElement?.props.content).toBe('Test Description');
    });
  });

  // Test error handling
  describe('GraphQL Error Handling', () => {
    it('handles missing site metadata gracefully', () => {
      mockUseStaticQuery.mockReturnValue({});
      render(<SEO />);

      // Should not throw an error when metadata is missing
      expect(mockUseStaticQuery).toHaveBeenCalled();
    });

    it('handles malformed image data gracefully', () => {
      const mockData = {
        ...mockSiteMetadata,
        allFile: {
          nodes: [
            {
              relativePath: 'images/brands/brand1.png',
              // Missing childImageSharp data
            },
          ],
        },
      };
      mockUseStaticQuery.mockReturnValue(mockData);

      render(<Brands title="Test Brands" />);
      expect(mockUseStaticQuery).toHaveBeenCalled();
    });
  });
});

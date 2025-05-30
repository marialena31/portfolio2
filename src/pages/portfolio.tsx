import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { PortfolioPageQueryQuery } from '../types/graphql-types';

const PortfolioPage: React.FC<PageProps<PortfolioPageQueryQuery>> = ({ data }) => {
  const projects = data.allPortfolioProject.nodes;

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-primary text-center mb-12 mt-8">Portfolio</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
            )}
            <h2 className="text-xl font-semibold bg-gradient-to-tr from-primary to-primary-green bg-clip-text text-transparent mb-2">
              {project.title}
            </h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            {project.tags && Array.isArray(project.tags) && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex gap-4 mt-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary underline text-sm"
                >
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary underline text-sm"
                >
                  Voir le site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PortfolioPageQuery {
    allPortfolioProject {
      nodes {
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
`;

export default PortfolioPage;

export const Head = () => <SEO title="Portfolio" pageName="portfolio" />;

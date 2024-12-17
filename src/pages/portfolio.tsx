import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { PortfolioPageQueryQuery } from '../types/graphql-types';

const PortfolioPage: React.FC<PageProps<PortfolioPageQueryQuery>> = ({ data }) => {
  const projects = data.allPortfolioProject.nodes;

  return (
    <Layout>
      <SEO title="Portfolio" pageName="portfolio" />
      <h1>Portfolio</h1>
      <div>
        {projects.map(project => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
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

import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PortfolioPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Portfolio" pageName="portfolio" />
      <h1>Portfolio</h1>
      <p>Découvrez mes projets.</p>
    </Layout>
  );
};

export default PortfolioPage;

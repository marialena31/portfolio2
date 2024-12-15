import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';

const PortfolioPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Portfolio</h1>
      <p>Découvrez mes projets.</p>
    </Layout>
  );
};

export default PortfolioPage;

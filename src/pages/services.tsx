import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Services</h1>
      <p>Découvrez nos services.</p>
    </Layout>
  );
};

export default ServicesPage;

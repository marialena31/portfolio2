import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Services" pageName="services" />
      <h1>Services</h1>
      <p>Découvrez nos services.</p>
    </Layout>
  );
};

export default ServicesPage;

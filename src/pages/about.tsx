import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="À propos" pageName="about" />
      <h1>À propos</h1>
      <p>Bienvenue sur la page À propos.</p>
    </Layout>
  );
};

export default AboutPage;

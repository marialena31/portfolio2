import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>À propos</h1>
      <p>Bienvenue sur la page À propos.</p>
    </Layout>
  );
};

export default AboutPage;

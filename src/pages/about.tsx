import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { ContentRenderer } from '../components/ContentRenderer';
import { aboutContent } from '../data/about';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="À propos" pageName="about" />
      <ContentRenderer content={aboutContent} />
    </Layout>
  );
};

export default AboutPage;

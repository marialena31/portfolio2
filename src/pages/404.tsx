import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="404 - Page non trouvée" pageName="404" />
      <h1>404: Page Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

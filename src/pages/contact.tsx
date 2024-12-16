import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Contact" pageName="contact" />
      <h1>Contact</h1>
      <p>Contactez-nous pour plus d&apos;informations.</p>
    </Layout>
  );
};

export default ContactPage;

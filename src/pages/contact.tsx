import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>Contactez-nous pour plus d'informations.</p>
    </Layout>
  );
};

export default ContactPage;

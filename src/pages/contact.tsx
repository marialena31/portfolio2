import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Contact" pageName="contact" />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;

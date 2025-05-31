import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import ContactForm from '../components/ContactForm';
import ContactInfos from '../components/ContactInfos';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Contact" pageName="contact" />
      <section className="pt-16 pb-16 bg-gradient-to-b from-primary-dark/95 to-primary/85">
        <ContactInfos />
        <ContactForm />
      </section>
    </Layout>
  );
};

export default ContactPage;

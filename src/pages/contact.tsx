import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactInfos from '../components/ContactInfos';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        pageName="contact"
        description="Contactez-moi pour un audit gratuit, une demande de devis ou toute question sur vos projets e-commerce Magento et digital."
      />
      <section className="pt-16 pb-16 bg-gradient-to-b from-primary-dark/95 to-primary/85">
        <ContactInfos />
        <ContactForm />
      </section>
    </Layout>
  );
};

export default ContactPage;

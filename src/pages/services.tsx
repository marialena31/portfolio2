import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { ContentRenderer } from '../components/ContentRenderer';
import { servicesContent } from '../data/servicesContent';
import * as servicesStyles from '../components/services-page.module.scss';

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Services" pageName="services" />
      <section className={servicesStyles.servicesPage}>
        <div className={servicesStyles.servicesContainer}>
          <ContentRenderer content={servicesContent} />
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;

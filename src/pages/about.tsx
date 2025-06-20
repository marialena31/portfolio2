import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { ContentRenderer } from '../components/ContentRenderer';
import { aboutContent } from '../data/about';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO
        title="À propos de Maria-Lena Pietri"
        pageName="about"
        description="Découvrez mon parcours, mon expertise Magento et e-commerce, et ma vision du pilotage de projets digitaux pour PME, ETI et grands comptes."
      />
      <section className="pt-16 pb-16 bg-gradient-to-b from-primary-dark/95 to-primary/85">
        <ContentRenderer
          content={aboutContent}
          containerClassName="max-w-[64rem] mx-auto bg-white rounded-lg shadow-md p-20 flex flex-col items-start text-left"
        />
      </section>
    </Layout>
  );
};

export default AboutPage;

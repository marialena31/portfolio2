import React from 'react';
import { ContentRenderer } from '../components/ContentRenderer';
import { conseilsProContent } from '../data/conseils-pro';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const ConseilsProPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Conseils de pro - Galères & Réponses cash"
        description="Astuces, retours d'expérience et conseils pratiques pour réussir vos projets web."
      />
      <section className="pt-16 pb-16 bg-gradient-to-b from-primary-dark/95 to-primary/85">
        <ContentRenderer
          content={conseilsProContent}
          containerClassName="max-w-[64rem] mx-auto bg-white rounded-lg shadow-md p-4 md:p-20 flex flex-col items-start text-left"
        />
      </section>
    </Layout>
  );
};

export default ConseilsProPage;

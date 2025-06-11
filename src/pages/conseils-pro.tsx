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
        description="Astuces, retours d'expérience et réponses sans langue de bois pour réussir vos projets e-commerce, éviter les pièges de l'offshore et piloter efficacement vos prestataires."
      />
      <section className="pt-16 pb-16 bg-gradient-to-b from-primary-dark/95 to-primary/85">
        <ContentRenderer
          content={conseilsProContent}
          containerClassName="bg-white max-w-[64rem] w-full mx-auto px-4 md:px-[10rem] py-[5rem] shadow rounded-lg md:my-16 my-8 flex flex-col items-start text-left"
        />
      </section>
    </Layout>
  );
};

export default ConseilsProPage;

import React from 'react';
import { ContentRenderer } from '../components/ContentRenderer';
import { conseilsProContent } from '../data/conseils-pro';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const ConseilsProPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Conseils de pro - Galères & Réponses cash" />
      <div className="bg-gradient-to-br from-primary to-primary-dark py-16 min-h-screen">
        <div className="max-w-[64rem] mx-auto px-4 py-12">
          <ContentRenderer content={conseilsProContent} />
        </div>
      </div>
    </Layout>
  );
};

export default ConseilsProPage;

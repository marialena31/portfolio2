import React from 'react';
import { ContentRenderer } from '../components/ContentRenderer';
import { conseilsProContent } from '../data/conseils-pro';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import * as styles from '../components/about-page.module.scss';

const ConseilsProPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Conseils de pro - Galères & Réponses cash" />
      <div className={styles.aboutContainer}>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <ContentRenderer content={conseilsProContent} />
        </div>
      </div>
    </Layout>
  );
};

export default ConseilsProPage;

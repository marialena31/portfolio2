import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { ContentRenderer } from '../components/ContentRenderer';
import { pourquoiChoisirContent } from '../data/pourquoi-choisir';
import * as styles from './pourquoi-choisir.module.scss';

const PourquoiChoisirPage: React.FC<PageProps> = () => {
  return (
    <Layout className="relative">
      <SEO title="Pourquoi me choisir ?" pageName="pourquoi-choisir" />
      <div className={styles.pourquoiChoisir}>
        <ContentRenderer content={pourquoiChoisirContent} />
      </div>
    </Layout>
  );
};

export default PourquoiChoisirPage;

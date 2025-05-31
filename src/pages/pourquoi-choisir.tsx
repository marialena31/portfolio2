import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { ContentRenderer, ContentRendererProps } from '../components/ContentRenderer';
import { pourquoiChoisirContent } from '../data/pourquoi-choisir';

const PourquoiChoisirPage: React.FC<PageProps> = () => {
  return (
    <Layout className="relative">
      <SEO title="Pourquoi me choisir ?" pageName="pourquoi-choisir" />
      <section className="pt-16 pb-16 bg-gradient-to-b from-primary-dark/95 to-primary/85">
        <ContentRenderer
          content={pourquoiChoisirContent}
          containerClassName="max-w-[64rem] p-20 mx-auto bg-white rounded-lg shadow-md flex flex-col items-start text-left"
        />
      </section>
    </Layout>
  );
};

export default PourquoiChoisirPage;

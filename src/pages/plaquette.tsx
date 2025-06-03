import React from 'react';
import Layout from '../components/layout';
import CustomPdfViewer from '../components/CustomPdfViewer';
import { SEO } from '../components/seo';

const PlaquettePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Plaquette commerciale" pageName="plaquette" />
      <section className="max-w-[64rem] mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Plaquette commerciale</h1>
        <p className="text-lg text-gray-700 mb-8">
          Découvrez ma plaquette de présentation professionnelle, à consulter en ligne ou à
          télécharger en PDF.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Plaquette de présentation d&apos;ExpertEcom (PDF complet)
          </h2>
          <CustomPdfViewer url="/docs/ExpertEcom.pdf" mode="portfolio" className="min-h-[500px]" />
          <div className="mt-4 text-center">
            <a
              href="/docs/ExpertEcom.pdf"
              download
              className="inline-block px-6 py-3 rounded font-semibold bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Télécharger le PDF
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlaquettePage;

export const Head = () => <SEO title="Plaquette commerciale" pageName="plaquette" />;

import * as React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import DiagnosticForm from '../components/DiagnosticForm/DiagnosticForm';

const DiagnosticMagento1Page: React.FC = () => (
  <Layout>
    <section className="pt-6 pb-6 bg-gradient-to-b from-primary-dark/95 to-primary/85 min-h-[calc(100vh-4rem-4rem)] flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto">
        <SEO
          title="Diagnostic Magento 1"
          description="Formulaire d'audit et de migration Magento 1"
        />
        <DiagnosticForm />
      </div>
    </section>
  </Layout>
);

export default DiagnosticMagento1Page;

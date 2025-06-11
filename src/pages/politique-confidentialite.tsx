import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const PolitiqueConfidentialitePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Politique de Confidentialité" pageName="politique-confidentialite" />
      <SEO title="Politique de Confidentialité" />
      <section className="pt-16 pb-16 bg-gradient-to-b from-primary-dark/95 to-primary/85">
        <div className="bg-white max-w-[64rem] w-full mx-auto px-4 md:px-[10rem] py-[5rem] shadow rounded-lg md:my-16 my-8 text-gray-800 flex flex-col items-start text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 mt-4">
            Politique de confidentialité
          </h1>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">Introduction</h2>
            <p>Ce site respecte la confidentialité de vos données personnelles.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">
              Responsable du traitement
            </h2>
            <address>
              Maria-Lena PIETRI EI
              <br />
              Entreprise individuelle – SIRET : 483 743 761 00056
              <br />
              Adresse : Toulouse, France
              <br />
              Contact : contact@marialena-pietri.fr
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">Données collectées</h2>
            <p>
              Aucune donnée personnelle n&apos;est collectée à des fins commerciales. Les données
              transmises via le formulaire de contact sont utilisées uniquement pour répondre à
              votre demande et ne sont jamais cédées à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">Droits des utilisateurs</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et
              de suppression de vos données. Pour toute demande, contactez-nous à l&apos;adresse
              ci-dessus.
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default PolitiqueConfidentialitePage;

import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const PolitiqueConfidentialitePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Politique de Confidentialité" />
      <section className="pt-16 pb-16 bg-gradient-to-b from-primary-dark/95 to-primary/85">
        <div className="max-w-[64rem] mx-auto bg-white rounded-lg shadow-md p-20 flex flex-col items-start text-left text-gray-800">
          <h1>Politique de confidentialité</h1>

          <section>
            <h2>Introduction</h2>
            <p>Ce site respecte la confidentialité de vos données personnelles.</p>
          </section>

          <section>
            <h2>Responsable du traitement</h2>
            <address>
              Maria-Lena PIETRI
              <br />
              Micro-entreprise – SIRET : 483 743 761 00056
              <br />
              Contact : contact@marialena-pietri.fr
            </address>
          </section>

          <section>
            <h2>Données collectées</h2>
            <p>
              Aucune donnée personnelle n&apos;est collectée à des fins commerciales. Les données
              transmises via le formulaire de contact sont utilisées uniquement pour répondre à
              votre demande et ne sont jamais cédées à des tiers.
            </p>
          </section>

          <section>
            <h2>Droits des utilisateurs</h2>
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

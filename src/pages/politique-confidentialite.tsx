import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import * as styles from '../components/legal-pages.module.scss';

const PolitiqueConfidentialitePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Politique de Confidentialité" />
      <main className={styles.legalPage}>
        <div className={styles.legalContainer}>
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
      </main>
    </Layout>
  );
};

export default PolitiqueConfidentialitePage;

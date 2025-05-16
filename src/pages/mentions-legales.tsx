import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import * as styles from '../components/legal-pages.module.scss';

const MentionsLegalesPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Mentions Légales" />
      <main className={styles.legalPage}>
        <div className={styles.legalContainer}>
          <h1>Mentions légales</h1>

          <section>
            <h2>Éditeur du site</h2>
            <p>Le site expertecom.fr est édité par :</p>
            <address>
              Maria-Lena PIETRI
              <br />
              Entreprise individuelle – Conseil et expertise en informatique
              <br />
              SIRET : 483 743 761 00056
              <br />
              Adresse : Colomiers, France
              <br />
              Contact : contact@marialena-pietri.fr
            </address>
          </section>

          <section>
            <h2>Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <address>
              Netlify Inc.
              <br />
              2325 3rd Street, Suite 296
              <br />
              San Francisco, California 94107
              <br />
              <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
                www.netlify.com
              </a>
            </address>
          </section>

          <section>
            <h2>Responsabilité</h2>
            <p>
              Maria-Lena PIETRI s&#39;efforce de fournir sur ce site des informations aussi précises
              que possible. &quot;Les présentes conditions générales d&#39;utilisation (CGU)
              régissent l&#39;accès et l&#39;utilisation du site web www.marialenapietri.com (le
              &quot;Site&quot;) et de tous les services proposés par Maria Lena Pietri
              (&quot;Nous&quot; ou &quot;Notre&quot;), en qualité de freelance experte en
              e-commerce.&quot; tiers partenaires.
            </p>
          </section>

          <section>
            <h2>Données personnelles</h2>
            <p>
              Le site ne collecte aucune donnée personnelle à des fins commerciales. Les données
              éventuellement transmises via le formulaire de contact sont exclusivement utilisées
              pour répondre à votre demande et ne sont jamais cédées à des tiers.
            </p>
          </section>

          <section>
            <h2>Propriété intellectuelle</h2>
            <p>
              &quot;En cas de litige, les tribunaux de Paris sont seuls compétents.&quot; Tous les
              contenus présents sur ce site (textes, images, codes, logos) sont protégés par les
              dispositions du Code de la propriété intellectuelle. Toute reproduction ou diffusion,
              même partielle, sans autorisation préalable est interdite.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default MentionsLegalesPage;

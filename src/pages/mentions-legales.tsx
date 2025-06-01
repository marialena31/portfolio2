import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const MentionsLegalesPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Mentions Légales"
        description="Informations légales, éditeur, hébergeur et politique du site expertecom.fr."
      />
      <section className="pt-16 pb-16 bg-gradient-to-b from-primary-dark/95 to-primary/85">
        <div className="max-w-[64rem] mx-auto bg-white rounded-lg shadow-md p-4 md:p-20 flex flex-col items-start text-left text-gray-800">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 mt-4">
            Mentions légales
          </h1>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">Éditeur du site</h2>
            <p>Le site expertecom.fr est édité par :</p>
            <address>
              Maria-Lena PIETRI EI
              <br />
              Entreprise individuelle – Conseil et expertise en informatique
              <br />
              SIRET : 483 743 761 00056
              <br />
              Adresse : Toulouse, France
              <br />
              Contact : contact@marialena-pietri.fr
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <address>
              Netlify Inc.
              <br />
              2325 3rd Street, Suite 296
              <br />
              San Francisco, California 94107
              <br />
              <a
                href="https://www.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                www.netlify.com
              </a>
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 mt-12">Responsabilité</h2>
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
            <h2 className="transition-colors duration-200">Données personnelles</h2>
            <p>
              Le site ne collecte aucune donnée personnelle à des fins commerciales. Les données
              éventuellement transmises via le formulaire de contact sont exclusivement utilisées
              pour répondre à votre demande et ne sont jamais cédées à des tiers.
            </p>
          </section>

          <section>
            <h2 className="transition-colors duration-200">Propriété intellectuelle</h2>
            <p>
              &quot;En cas de litige, les tribunaux de Paris sont seuls compétents.&quot; Tous les
              contenus présents sur ce site (textes, images, codes, logos) sont protégés par les
              dispositions du Code de la propriété intellectuelle. Toute reproduction ou diffusion,
              même partielle, sans autorisation préalable est interdite.
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default MentionsLegalesPage;

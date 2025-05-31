import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { ServiceCard } from '../components/ServiceCard';
import { Icon } from '../components/Icon';

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Services" pageName="services" />
      <main className="min-h-screen bg-gradient-to-br from-primary to-primary-dark text-white w-full box-border py-28">
        <div className="max-w-[64rem] mx-auto text-center mb-12 px-4">
          <h1>Mes Services</h1>
          <p className="text-lg text-white/90 mb-8">
            Je vous accompagne dans la mise en place de votre boutique en ligne, de l&apos;analyse
            de vos besoins à la livraison du projet clés en main. Je vous aide à reprendre le
            contrôle de votre écosystème digital — site e-commerce, WordPress, PIM, ERP,
            marketplaces — avec un pilotage rigoureux, une expertise fonctionnelle solide, et des
            solutions adaptées à votre budget, y compris via l&apos;offshore encadré.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[64rem] mx-auto mb-16 px-4">
          <ServiceCard
            title={
              <>
                <Icon
                  name="wrench"
                  size="lg"
                  className="inline-block align-middle text-primary bg-white rounded-full p-2 shadow-md mr-2 text-2xl"
                />
                <span>Maintenance &amp; TMA Magento</span>
              </>
            }
            price="À partir de 690€/mois"
            description="Corrections, évolutions, tests et suivi complet de votre Magento 1 ou 2."
            features={[
              'Priorisation des tickets',
              'QA et pré-recette',
              'Suivi hebdo structuré',
              'Travail possible avec vos équipes ou mes partenaires offshore',
            ]}
          />

          <ServiceCard
            title={
              <>
                <Icon
                  name="user-tie"
                  size="lg"
                  className="inline-block align-middle text-primary bg-white rounded-full p-2 shadow-md mr-2 text-2xl"
                />
                <span>Chef de projet Magento à temps partagé</span>
              </>
            }
            price="À partir de 890€/mois"
            description="Je deviens votre PO externe : cadrage, priorisation, qualité, coordination."
            features={[
              'Animation des comités',
              'Revue de backlog, arbitrage',
              'Coordination des prestataires',
              'Recette et livrables clairs pour vos équipes',
            ]}
            highlight
          />

          <ServiceCard
            title={
              <>
                <Icon
                  name="rotate"
                  size="lg"
                  className="inline-block align-middle text-primary bg-white rounded-full p-2 shadow-md mr-2 text-2xl"
                />
                <span>Reprise de projet Magento en souffrance</span>
              </>
            }
            price="Audit 1h gratuit – Reprise sur devis"
            description="Site instable, agence absente, relation rompue ? Je reprends en main."
            features={[
              'Audit technique + fonctionnel',
              'Plan de stabilisation',
              'Reprise possible avec votre prestataire ou un nouveau',
              'Aucune facturation si non viable',
            ]}
          />

          <ServiceCard
            title={
              <>
                <Icon
                  name="link"
                  size="lg"
                  className="inline-block align-middle text-primary bg-white rounded-full p-2 shadow-md mr-2 text-2xl"
                />
                <span>Intégration Magento avec ERP, PIM, CRM, marketplaces</span>
              </>
            }
            price="Sur devis selon flux et outils"
            description="Faites circuler vos données entre votre site et votre SI."
            features={[
              'Analyse des flux (commande, stock, client, produit)',
              'Intégration par API (REST, SOAP), fichiers FTP, ou ETL (Talend, Symfony…)',
              'Coordination avec vos équipes IT ou prestataires',
              'Recette et supervision des synchronisations',
            ]}
          />

          <ServiceCard
            title={
              <>
                <Icon
                  name="globe"
                  size="lg"
                  className="inline-block align-middle text-primary bg-white rounded-full p-2 shadow-md mr-2 text-2xl"
                />
                <span>Externalisation offshore encadrée</span>
              </>
            }
            price="Sur devis selon pays, techno, équipe"
            description="Accédez à des ressources qualifiées, sans compromis sur la qualité."
            features={[
              'Prestataires par spécialité :',
              '&#x1F1EE;&#x1F1F3; Inde &amp; &#x1F1F7;&#x1F1F4; Roumanie : Magento (TMA, dev)',
              '&#x1F1E6;&#x1F1E9; Maroc &amp; &#x1F1F5;&#x1F1E6; Panama : WordPress',
              '&#x1F1FA;&#x1F1EC; Madagascar &amp; &#x1F1F5;&#x1F1F1; Philippines : saisie produit FR/EN',
              '&#x1F1FB;&#x1F1F3; Vietnam : en veille, selon besoins spécifiques',
              'Relation transparente : vous choisissez entre contact direct ou pilotage centralisé',
              'Garantie qualité, délais, budget',
              'Propriété du code, des accès, de la roadmap conservée',
            ]}
          />

          <ServiceCard
            title={
              <>
                <Icon
                  name="database"
                  size="lg"
                  className="inline-block align-middle text-primary bg-white rounded-full p-2 shadow-md mr-2 text-2xl"
                />
                <span>Saisie produit & accompagnement PIM</span>
              </>
            }
            price="À partir de 390€/mois"
            description="Structuration, enrichissement, nettoyage, préparation à l'import."
            features={[
              'Équipe de saisie formée (Madagascar)',
              'Structuration des attributs produit',
              'Intégration vers Magento, Akeneo, Pimcore…',
              'Option conseil PIM low-cost',
            ]}
          />

          <ServiceCard
            title={
              <>
                <Icon
                  name="server"
                  size="lg"
                  className="inline-block align-middle text-primary bg-white rounded-full p-2 shadow-md mr-2 text-2xl"
                />
                <span>Suivi hébergeur & infogérance</span>
              </>
            }
            price="À partir de 90€/mois"
            description="Reprenez le contrôle de votre hébergement."
            features={[
              'Monitoring temps réel',
              'Optimisation des performances',
              'Sécurisation et sauvegardes',
              'Support technique prioritaire',
            ]}
          />

          <ServiceCard
            title={
              <>
                <Icon
                  name="compass"
                  size="lg"
                  className="inline-block align-middle text-primary bg-white rounded-full p-2 shadow-md mr-2 text-2xl"
                />
                <span>Cadrage projet digital — AMOA & stratégie SI</span>
              </>
            }
            price="À partir de 1 200€ la mission de cadrage"
            description="Votre projet est flou ? Trop de prestataires ? Trop de versions du besoin ? Je vous aide à poser les bases solides avant de vous lancer."
            features={[
              'Atelier de cadrage fonctionnel (1 à 2 demi-journées)',
              "Rédaction d'un document de cadrage synthétique",
              'Roadmap projet réaliste et séquencée',
              'Préconisations sur budget, prestataires, modalités',
            ]}
            highlight
          />

          <ServiceCard
            title={
              <>
                <Icon
                  name="cubes"
                  size="lg"
                  className="inline-block align-middle text-primary bg-white rounded-full p-2 shadow-md mr-2 text-2xl"
                />
                <span>Reprise de documentation projet & normalisation</span>
              </>
            }
            price="À partir de 590€ (audit + plan d'action)"
            description="Vous avez un site Magento ou WordPress mais… aucune doc claire ? Ce service permet de reconstruire l'historique projet et poser les bases pour repartir proprement."
            features={[
              'Reprise ou création de doc projet (fonctionnelle, technique, utilisateurs)',
              'Rédaction de fiches produit type, tickets modèles',
              "Centralisation de l'existant : cahiers des charges, maquettes",
              'Recommandation de stockage collaboratif',
            ]}
          />

          <ServiceCard
            title={
              <>
                <Icon
                  name="shield-alt"
                  size="lg"
                  className="inline-block align-middle text-primary bg-white rounded-full p-2 shadow-md mr-2 text-2xl"
                />
                <span>Audit de sécurité & Pentest piloté</span>
              </>
            }
            price="À partir de 790€ | Pentest sur devis"
            description="Vous avez un Magento ou un WordPress en production ? Un audit de sécurité régulier n'est pas une option."
            features={[
              'Audit réalisé par un prestataire qualifié, que je pilote pour vous',
              'Rapport complet + synthèse vulgarisée pour la direction',
              'Périmètre modulable (site, back-office, APIs, infra…)',
              'Recommandation de prestataire ou travail avec le vôtre',
            ]}
            highlight
          />

          <ServiceCard
            title={
              <>
                <Icon
                  name="fire-extinguisher"
                  size="lg"
                  className="inline-block align-middle text-primary bg-white rounded-full p-2 shadow-md mr-2 text-2xl"
                />
                <span>Plan de Continuité / Plan de Reprise (PCA/PRA)</span>
              </>
            }
            price="À partir de 890€ – rapport en 10 jours ouvrés"
            description="Que se passe-t-il si votre site tombe un vendredi soir ? Avez-vous un plan ?"
            features={[
              'État des lieux des sauvegardes, redondance, hébergement',
              "Rédaction d'un PCA/PRA adapté à vos moyens",
              'Définition claire des RPO (perte de données) et RTO (temps de reprise)',
              'Plan utilisable en interne, compréhensible par tous',
            ]}
          />

          <ServiceCard
            title={
              <>
                <Icon
                  name="tools"
                  size="lg"
                  className="inline-block align-middle text-primary bg-white rounded-full p-2 shadow-md mr-2 text-2xl"
                />
                <span>Mise en œuvre des recommandations de sécurité</span>
              </>
            }
            price="Sur devis – selon périmètre du pentest"
            description="Un bon pentest sans mise en œuvre, c'est comme une alarme sans serrure."
            features={[
              'Reprise du rapport de pentest (même tiers)',
              'Priorisation des actions à mener (correctif, infra, code)',
              'Coordination des actions avec devs ou infogérant',
              'Tests post-correction + documentation',
            ]}
          />
        </div>

        <div className="max-w-[64rem] mx-auto mt-16 px-4">
          <h2 className="bg-gradient-to-tr from-primary to-primary-green bg-clip-text text-transparent text-3xl font-bold my-8">
            En bonus
          </h2>
          <ul className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <li>
              <Icon
                name="search-dollar"
                className="text-primary bg-white rounded-full p-2 shadow-md mr-2 text-xl inline-block align-middle"
              />
              <span>Audit 1h gratuit</span>
            </li>
            <li>
              <Icon
                name="handshake"
                className="text-primary bg-white rounded-full p-2 shadow-md mr-2 text-xl inline-block align-middle"
              />
              <span>Abonnement flexible ou engagement 12 mois avec remise</span>
            </li>
            <li>
              <Icon
                name="medal"
                className="text-primary bg-white rounded-full p-2 shadow-md mr-2 text-xl inline-block align-middle"
              />
              <span>Satisfait ou remboursé le 1er mois</span>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default ServicesPage;

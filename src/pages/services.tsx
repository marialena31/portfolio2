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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Mes Services</h1>
          <p className="text-lg text-white/90 mb-8">
            Je vous accompagne dans la mise en place de votre boutique en ligne.
            <br />
            De l’analyse de vos besoins à la livraison du projet clés en main.
            <br />
            Je vous aide à reprendre le contrôle de votre écosystème digital : site e-commerce,
            WordPress, PIM, ERP, marketplaces…
            <br />
            Avec un pilotage rigoureux, une expertise fonctionnelle solide.
            <br />
            Solutions adaptées à votre budget, y compris via l’offshore encadré.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-[64rem] mx-auto mb-16 px-4">
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
              'Inde & Roumanie : Magento (TMA, dev)',
              'Maroc & Panama : WordPress',
              'Madagascar & Philippines : saisie produit FR/EN',
              'Vietnam : en veille, selon besoins spécifiques',
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

        <div className="bg-primary/70 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
            <Icon name="gift" className="text-white text-3xl" />
            Bonus
          </h2>
          <div className="flex flex-col gap-6 items-center">
            <div className="flex items-center gap-3">
              <Icon name="bolt" className="text-yellow-300 text-2xl" />
              <span className="text-white text-lg">Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="user-shield" className="text-green-200 text-2xl" />
              <span className="text-white text-lg">Accès à mon réseau d’experts</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="hand-holding-heart" className="text-pink-200 text-2xl" />
              <span className="text-white text-lg">Conseils personnalisés</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="certificate" className="text-blue-200 text-2xl" />
              <span className="text-white text-lg">Audit flash offert</span>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ServicesPage;

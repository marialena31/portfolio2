// Source de vérité des études de cas pour la page Portfolio & Études de cas
// Respecte la structure, la typographie et le design du reste du site
// Les images doivent être placées dans /static/images/case-studies ou anonymisées si besoin

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string; // ex : e-commerce B2B
  context: string;
  role: string;
  stack: string[];
  image: string; // chemin relatif depuis /static/images/case-studies
  slug: string;
  url?: string;
  excerpt: string;
  description: string; // description SEO personnalisée
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Legrand – Plateforme Magento B2B multi-filiale',
    clientType: 'E-commerce B2B international',
    context:
      "Déploiement de la version pilote au Chili en 2016, puis extension progressive à plusieurs filiales. Intégration poussée avec l'ERP, flux complexes, modules Magento sur-mesure, travail avec équipe support en Inde. Réversibilité complète assurée en 2019.",
    role: 'Développeuse Magento puis coordinatrice projet',
    stack: ['Magento 2', 'ERP', 'Docker', 'Jenkins', 'API SOAP/XML'],
    image: '/images/case-studies/Legrand.webp',
    slug: 'legrand-magento-b2b',
    url: '',
    excerpt:
      'Premier projet Magento B2B en France en version alpha. Intégration multi-filiale, coordination offshore, réversibilité complète après 3 ans de développement progressif.',
    description:
      "Découvrez comment Legrand a déployé une plateforme Magento B2B multi-filiale innovante, intégrée à l'ERP et pilotée entre la France, l'Inde et l'Amérique latine. Un retour d'expérience sur la gestion de projets complexes, la coordination offshore et la réussite d'une réversibilité totale.",
  },
  {
    id: '2',
    title: 'Valrhona – E-commerce Magento B2B & Marketplace Mirakl',
    clientType: 'E-commerce Magento B2B & Marketplace Mirakl',
    context:
      'Refonte complète du site e-commerce B2B pour la maison Valrhona, avec exigence forte sur le design, la qualité de code et la performance.',
    role: 'Lead développeuse back-end Magento 2',
    stack: ['Magento 2', 'PHP', 'MySQL', 'GraphQL', 'Docker'],
    image: '/images/case-studies/valrhona.webp',
    slug: 'valrhona-magento-refonte',
    url: '',
    excerpt:
      'Refonte sur Magento 2.3 avec focus qualité. Gestion du catalogue complexe, intégration flux B2B, montée en charge, livraison en prod avant passation à la TMA.',
    description:
      'Plongez dans la refonte du site B2B Valrhona sous Magento 2 et Mirakl Marketplace : enjeux de performance, gestion de catalogue complexe et intégration de flux métiers pour un acteur majeur du chocolat professionnel.',
  },
  {
    id: '3',
    title: 'Chausson Matériaux – Digitalisation du catalogue produit',
    clientType: 'Distribution BTP',
    context:
      'Projet de structuration de l’offre produit pour le e-commerce, création d’un PIM, automatisation des catalogues papier, et pilotage des flux entre AS400, Excel et web.',
    role: 'Cheffe de projet digital & responsable produit',
    stack: ['PIM', 'AS400', 'Magento', 'XML', 'Excel'],
    image: '/images/case-studies/Chausson.webp',
    slug: 'chausson-materiaux-digitalisation',
    url: '',
    excerpt:
      'Refonte du référentiel produit et mise en place d’une base unifiée pour le e-commerce. Coordination multi-métiers et livraison de 4 catalogues automatisés.',
    description:
      'Découvrez comment Chausson Matériaux a digitalisé et automatisé la gestion de son catalogue produit pour le e-commerce B2B grâce à un PIM, une coordination multi-métiers et une intégration AS400/Magento efficace.',
  },
];

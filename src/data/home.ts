import { HomeData } from '../types/data';

export const homeData: HomeData = {
  hero: {
    title:
      'Chef de projet e-commerce & Magento, je reprends les projets en souffrance et les transforme en succès.',
    subtitle:
      'Spécialisée dans la structuration, la coordination transverse et la conformité numérique, j’accompagne mes clients dans la maîtrise de leurs risques et la réussite de leurs transformations digitales.',
    cta: {
      text: 'Obtenez un audit gratuit',
      link: '/contact',
      type: 'primary',
      phoneNumber: '+33 07 61 81 11 01',
    },
  },
  needs: {
    title: 'Vos Besoins',
    items: [
      {
        question: 'Votre Magento est en version obsolète ?',
        solution: 'security',
        link: '/services#security',
      },
      {
        question: 'Votre mise en ligne approche et rien n’est prêt ?',
        solution: 'migration',
        link: '/services#migration',
      },
      {
        question: 'Vous avez un backlog bloqué ou une TMA en roue libre ?',
        solution: 'maintenance',
        link: '/services#maintenance',
      },
    ],
  },
  services: {
    title: "Mes Services en Un Coup d'Œil",
    items: [
      {
        title: 'Maintenance Magento',
        description:
          'Mises à jour de sécurité, optimisation des performances et résolution des bugs.',
        icon: 'wrench',
        link: '/services',
      },
      {
        title: 'Migration Magento',
        description: 'Migration vers les dernières versions avec 0 perte de données.',
        icon: 'arrow-up',
        link: '/services',
      },
      {
        title: 'Sécurité Magento',
        description:
          'Audits de sécurité, correction des vulnérabilités, mise en conformité RGPD, PCI-DSS, NIS2.',
        icon: 'shield',
        link: '/services',
      },
      {
        title: 'Coordination offshore & projets critiques',
        description:
          'Pilotage transverse, accompagnement prestataires, arbitrage projet, équipe hybride.',
        icon: 'consulting',
        link: '/services',
      },
    ],
  },
  brands: {
    title: "Des marques de renom avec lesquelles j'ai eu le plaisir de collaborer",
    items: [
      {
        id: 'bonpoint',
        name: 'Bonpoint',
        imagePath: 'bonpoint.png',
        alt: 'Logo Bonpoint',
      },
      {
        id: 'cac-40',
        name: 'CAC 40',
        imagePath: 'cac-40.png',
        alt: 'Logo CAC 40',
      },
      {
        id: 'chausson-materiaux',
        name: 'Chausson Matériaux',
        imagePath: 'chausson-materiaux.png',
        alt: 'Logo Chausson Matériaux',
      },
      {
        id: 'eram-group',
        name: 'Eram Group',
        imagePath: 'eram-group.png',
        alt: 'Logo Eram Group',
      },
      {
        id: 'france-air',
        name: 'France Air',
        imagePath: 'france-air.png',
        alt: 'Logo France Air',
      },
      {
        id: 'hamilton',
        name: 'Hamilton',
        imagePath: 'hamilton.png',
        alt: 'Logo Hamilton',
      },
      {
        id: 'la-maison-du-whisky',
        name: 'La Maison du Whisky',
        imagePath: 'la-maison-du-whisky.png',
        alt: 'Logo La Maison du Whisky',
      },
      {
        id: 'ludilabel',
        name: 'Ludilabel',
        imagePath: 'ludilabel.png',
        alt: 'Logo Ludilabel',
      },
      {
        id: 'maisons-du-monde',
        name: 'Maisons du Monde',
        imagePath: 'maisons-du-monde.png',
        alt: 'Logo Maisons du Monde',
      },
      {
        id: 'maps-system',
        name: 'Maps System',
        imagePath: 'maps-system.png',
        alt: 'Logo Maps System',
      },
      {
        id: 'marjanemall',
        name: 'Marjane Mall',
        imagePath: 'marjanemall.png',
        alt: 'Logo Marjane Mall',
      },
      {
        id: 'maurice-lacroix',
        name: 'Maurice Lacroix',
        imagePath: 'maurice-lacroix.png',
        alt: 'Logo Maurice Lacroix',
      },
      {
        id: 'mountnpass',
        name: 'MountNpass',
        imagePath: 'mountnpass.png',
        alt: 'Logo MountNpass',
      },
      {
        id: 'nicoll',
        name: 'Nicoll',
        imagePath: 'nicoll.png',
        alt: 'Logo Nicoll',
      },
      {
        id: 'nutrixo',
        name: 'Nutrixo',
        imagePath: 'nutrixo.png',
        alt: 'Logo Nutrixo',
      },
      {
        id: 'openclassrooms',
        name: 'OpenClassrooms',
        imagePath: 'openclassrooms.png',
        alt: 'Logo OpenClassrooms',
      },
      {
        id: 'planet-cards',
        name: 'Planet Cards',
        imagePath: 'planet-cards.png',
        alt: 'Logo Planet Cards',
      },
      {
        id: 'pro-a-pro',
        name: 'Pro à Pro',
        imagePath: 'pro-a-pro.png',
        alt: 'Logo Pro à Pro',
      },
      {
        id: 'sopra-steria',
        name: 'Sopra Steria',
        imagePath: 'sopra-steria.png',
        alt: 'Logo Sopra Steria',
      },
      {
        id: 'valrhona',
        name: 'Valrhona',
        imagePath: 'valrhona.png',
        alt: 'Logo Valrhona',
      },
    ],
  },
  callToAction: {
    title: 'Prêt à Démarrer Votre Projet ?',
    buttons: [
      {
        text: 'Contactez-moi',
        link: '/contact',
        type: 'primary',
        phoneNumber: '+33 07 61 81 11 01',
      },
      {
        text: 'Prendre RDV',
        link: 'https://calendly.com/pietri-marialena/contact-30',
        type: 'secondary',
        isExternal: true,
      },
    ],
  },
};

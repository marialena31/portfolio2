import { HomeData } from '../types';

export const homeData: HomeData = {
  hero: {
    title: "Expertise Magento pour des Sites Sécurisés, Performants et Maintenus.",
    subtitle: "Freelance spécialisé dans la maintenance, la migration et la sécurité des sites Magento.",
    cta: {
      text: "Découvrez mes services",
      link: "/services"
    }
  },
  needs: {
    title: "Vos Besoins",
    items: [
      {
        question: "Votre site Magento manque de mises à jour ?",
        solution: "maintenance",
        link: "/services#maintenance"
      },
      {
        question: "Vous préparez une migration ou une mise en ligne ?",
        solution: "migration",
        link: "/services#migration"
      },
      {
        question: "Vous avez besoin d'une analyse de sécurité avant un lancement ?",
        solution: "security",
        link: "/services#security"
      }
    ]
  },
  services: {
    title: "Mes Services en Un Coup d'Œil",
    items: [
      {
        title: "Maintenance Magento",
        description: "Mises à jour de sécurité, optimisation des performances et résolution des bugs.",
        icon: "wrench",
        link: "/services#maintenance"
      },
      {
        title: "Migration Magento",
        description: "Migration vers les dernières versions de Magento avec zéro perte de données.",
        icon: "arrow-up",
        link: "/services#migration"
      },
      {
        title: "Sécurité Magento",
        description: "Audits de sécurité, correction des vulnérabilités et mise en place de bonnes pratiques.",
        icon: "shield",
        link: "/services#security"
      }
    ]
  },
  brands: {
    title: "Des marques de renom avec lesquelles j'ai eu le plaisir de collaborer",
    items: [
      {
        name: "Magento",
        logo: "magento.png",
        alt: "Logo Magento"
      },
      {
        name: "Adobe Commerce",
        logo: "adobe-commerce.png",
        alt: "Logo Adobe Commerce"
      },
      {
        name: "PrestaShop",
        logo: "prestashop.png",
        alt: "Logo PrestaShop"
      },
      {
        name: "WooCommerce",
        logo: "woocommerce.png",
        alt: "Logo WooCommerce"
      },
      {
        name: "Shopify",
        logo: "shopify.png",
        alt: "Logo Shopify"
      },
      {
        name: "OpenMage",
        logo: "openmage.png",
        alt: "Logo OpenMage"
      }
    ]
  },
  callToAction: {
    title: "Prêt à Sécuriser et Optimiser Votre Site Magento ?",
    buttons: [
      {
        text: "Contactez-moi",
        link: "/contact",
        type: "primary"
      },
      {
        text: "En savoir plus",
        link: "/about",
        type: "secondary"
      }
    ]
  }
};

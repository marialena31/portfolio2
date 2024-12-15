import { HomeData } from '../types';

export const homeData: HomeData = {
  hero: {
    title: "Expertise Magento pour des Sites Sécurisés, Performants et Maintenus.",
    subtitle: "Freelance spécialisé dans la maintenance, la migration et la sécurité des sites Magento.",
    cta: {
      text: "Contactez-moi",
      link: "#contact",
      phoneNumber: "+33 07 61 81 11 01"
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
        name: "Bonpoint",
        logo: "bonpoint.png",
        alt: "Logo Bonpoint"
      },
      {
        name: "CAC 40",
        logo: "cac-40.png",
        alt: "Logo CAC 40"
      },
      {
        name: "Chausson Matériaux",
        logo: "chausson-materiaux.png",
        alt: "Logo Chausson Matériaux"
      },
      {
        name: "Eram Group",
        logo: "eram-group.png",
        alt: "Logo Eram Group"
      },
      {
        name: "France Air",
        logo: "france-air.png",
        alt: "Logo France Air"
      },
      {
        name: "Hamilton",
        logo: "hamilton.png",
        alt: "Logo Hamilton"
      },
      {
        name: "La Maison du Whisky",
        logo: "la-maison-du-whisky.png",
        alt: "Logo La Maison du Whisky"
      },
      {
        name: "Ludilabel",
        logo: "ludilabel.png",
        alt: "Logo Ludilabel"
      },
      {
        name: "Maisons du Monde",
        logo: "maisons-du-monde.png",
        alt: "Logo Maisons du Monde"
      },
      {
        name: "Maps System",
        logo: "maps-system.png",
        alt: "Logo Maps System"
      },
      {
        name: "Marjane Mall",
        logo: "marjanemall.png",
        alt: "Logo Marjane Mall"
      },
      {
        name: "Maurice Lacroix",
        logo: "maurice-lacroix.png",
        alt: "Logo Maurice Lacroix"
      },
      {
        name: "MountNpass",
        logo: "mountnpass.png",
        alt: "Logo MountNpass"
      },
      {
        name: "Nicoll",
        logo: "nicoll.png",
        alt: "Logo Nicoll"
      },
      {
        name: "Nutrixo",
        logo: "nutrixo.png",
        alt: "Logo Nutrixo"
      },
      {
        name: "OpenClassrooms",
        logo: "openclassrooms.png",
        alt: "Logo OpenClassrooms"
      },
      {
        name: "Planet Cards",
        logo: "planet-cards.png",
        alt: "Logo Planet Cards"
      },
      {
        name: "Pro à Pro",
        logo: "pro-a-pro.png",
        alt: "Logo Pro à Pro"
      },
      {
        name: "Sopra Steria",
        logo: "sopra-steria.png",
        alt: "Logo Sopra Steria"
      },
      {
        name: "Valrhona",
        logo: "valrhona.png",
        alt: "Logo Valrhona"
      }
    ]
  },
  callToAction: {
    title: "Prêt à Démarrer Votre Projet ?",
    buttons: [
      {
        text: "Contactez-moi",
        link: "#contact",
        type: "primary",
        phoneNumber: "+33 07 61 81 11 01"
      },
      {
        text: "Prendre RDV",
        link: "https://calendly.com/pietri-marialena/contact-30",
        type: "secondary",
        isExternal: true
      }
    ]
  }
};

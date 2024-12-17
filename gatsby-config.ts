import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ExpertEcom`,
    description: `Découvrez mes services de freelance Magento : maintenance, migrations complexes, sécurisation et développement sur mesure. Contactez-moi pour un audit gratuit et optimisez votre site e-commerce dès aujourd'hui !`,
    author: `@mlpietri`,
    siteUrl: `https://expertecom.fr`,
    image: `/images/Logo.jpg`,
    twitterUsername: `@mlpietri`,
    pageMetadata: {
      home: {
        description: `Découvrez mes services de freelance Magento : maintenance, migrations complexes, sécurisation et développement sur mesure. Contactez-moi pour un audit gratuit et optimisez votre site e-commerce dès aujourd'hui !`,
      },
      about: {
        description: `Avec plus de 10 ans d'expérience en développement et sécurité e-commerce, je suis votre experte Magento freelance. Apprenez-en plus sur mon parcours et comment je peux aider votre entreprise à prospérer.`,
      },
      services: {
        description: `En tant qu'experte Magento, je propose des services de maintenance, migrations Magento 1 vers 2, sécurité e-commerce et formation. Découvrez mes offres sur mesure pour améliorer les performances de votre site.`,
      },
      portfolio: {
        description: `Explorez mes études de cas Magento et découvrez comment j'ai transformé des projets complexes en réussites concrètes. Témoignages clients et résultats mesurables à l'appui.`,
      },
      contact: {
        description: `Contactez-moi facilement pour discuter de vos besoins en Magento. Remplissez le formulaire, planifiez un appel ou envoyez un message direct pour une consultation gratuite.`,
      },
    },
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ExpertEcom Portfolio`,
        short_name: `ExpertEcom`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Using the existing gatsby-icon.png
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
      },
    },
    {
      resolve: 'gatsby-source-portfolio-data',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `src/types/graphql-types.d.ts`,
        documentPaths: ['./src/**/*.{ts,tsx}'],
        codegenConfig: {
          maybeValue: 'T | undefined',
          avoidOptionals: true,
          enumsAsTypes: true,
          skipTypename: true,
          namingConvention: {
            enumValues: 'keep',
          },
          scalars: {
            Date: 'string',
            JSON: '{ [key: string]: any }',
          },
        },
      },
    },
  ],
};

module.exports = config;

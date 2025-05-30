module.exports = {
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
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
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
        icon: `src/assets/images/gatsby-icon.png`, // This is the correct path to the icon
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
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: same-origin',
          ],
        },
      },
    },
  ],
};

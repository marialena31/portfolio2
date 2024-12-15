import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Professional portfolio website showcasing skills, services, and projects`,
    author: `@yourusername`,
    siteUrl: `https://your-domain.com`,
    image: `/images/og-image.jpg`,
    twitterUsername: `@yourusername`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
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
        name: `Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:400,500,600,700`, // Specify the weights you need
        ],
        display: 'swap', // This helps with rendering performance
      },
    },
    {
      resolve: 'gatsby-source-portfolio-data',
      options: {},
    },
  ],
};

module.exports = config;

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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icons/icon-512x512.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': ['Cache-Control: public, max-age=0, must-revalidate'],
          '/static/*': ['Cache-Control: public, max-age=31536000, immutable'],
          '/icons/*': ['Cache-Control: public, max-age=31536000, immutable'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/about`, `/portfolio/*`],
      },
    },
    {
      resolve: `gatsby-source-portfolio-data`,
      options: {},
    },
  ],
} as GatsbyConfig;

export default config;

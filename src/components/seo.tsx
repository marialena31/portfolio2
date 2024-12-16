import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { SEOProps, SiteMetadata } from '../types';

const SEO: React.FC<SEOProps> = ({ title, description, image, article, pageName }) => {
  const { site } = useStaticQuery<{ site: { siteMetadata: SiteMetadata } }>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          twitterUsername
          author
          pageMetadata {
            home {
              description
            }
            about {
              description
            }
            services {
              description
            }
            portfolio {
              description
            }
            contact {
              description
            }
          }
        }
      }
    }
  `);

  const { siteMetadata } = site;

  const seo = {
    title: title || siteMetadata.title,
    description:
      description ||
      (pageName ? siteMetadata.pageMetadata[pageName].description : siteMetadata.description),
    image: `${siteMetadata.siteUrl}${image || siteMetadata.image}`,
    url: `${siteMetadata.siteUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`,
    twitterUsername: siteMetadata.twitterUsername,
    author: siteMetadata.author,
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      defaultTitle={siteMetadata.title}
    >
      <html lang="fr" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content={seo.author} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default SEO;

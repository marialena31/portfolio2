import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  pageName?: string;
};

export function SEO({ title, description, image, pageName }: SEOProps) {
  const { site } = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `);

  const seo = {
    title: title || site?.siteMetadata?.title || '',
    description: description || site?.siteMetadata?.description || '',
    image: image || `${site?.siteMetadata?.siteUrl}/images/og-image.jpg`,
    url: `${site?.siteMetadata?.siteUrl}${pageName ? `/${pageName}` : ''}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </>
  );
}

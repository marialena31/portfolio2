import React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout from '../components/layout';
import { SiteMetadata } from '../types';

interface DataProps {
  site: {
    siteMetadata: SiteMetadata;
  };
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { title, description } = data.site.siteMetadata;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{description}</p>
      <section>
        <h2>Bienvenue sur mon portfolio</h2>
        <p>
          Je suis un développeur passionné par la création d'applications web
          modernes et performantes.
        </p>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default IndexPage;

import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/home/hero';
import Needs from '../components/home/needs';
import Services from '../components/home/services';
import Testimonials from '../components/home/testimonials';
import CallToAction from '../components/home/call-to-action';

interface HomeData {
  homeJson: {
    hero: {
      title: string;
      subtitle: string;
      cta: {
        text: string;
        link: string;
      };
    };
    needs: {
      title: string;
      items: Array<{
        question: string;
        solution: string;
        link: string;
      }>;
    };
    services: {
      title: string;
      items: Array<{
        title: string;
        description: string;
        icon: string;
        link: string;
      }>;
    };
    testimonials: {
      title: string;
      items: Array<{
        quote: string;
        author: string;
        company: string;
        result: string;
      }>;
    };
    callToAction: {
      title: string;
      buttons: Array<{
        text: string;
        link: string;
        type: 'primary' | 'secondary';
      }>;
    };
  };
}

const IndexPage: React.FC<PageProps<HomeData>> = ({ data }) => {
  const { homeJson } = data;

  return (
    <Layout>
      <SEO title="Accueil" />
      <Hero {...homeJson.hero} />
      <Needs {...homeJson.needs} />
      <Services {...homeJson.services} />
      <Testimonials {...homeJson.testimonials} />
      <CallToAction {...homeJson.callToAction} />
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    homeJson {
      hero {
        title
        subtitle
        cta {
          text
          link
        }
      }
      needs {
        title
        items {
          question
          solution
          link
        }
      }
      services {
        title
        items {
          title
          description
          icon
          link
        }
      }
      testimonials {
        title
        items {
          quote
          author
          company
          result
        }
      }
      callToAction {
        title
        buttons {
          text
          link
          type
        }
      }
    }
  }
`;

export default IndexPage;

import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/home/hero';
import Needs from '../components/home/needs';
import Services from '../components/home/services';
import Brands from '../components/home/brands';
import CallToAction from '../components/home/call-to-action';
import { homeData } from '../data/home';

interface HomeData {
  hero: {
    title: string;
    subtitle: string;
    cta: {
      text: string;
      link: string;
      phoneNumber: string;
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
  brands: {
    title: string;
    items: Array<{
      name: string;
      logo: string;
      alt: string;
    }>;
  };
  callToAction: {
    title: string;
    buttons: Array<{
      text: string;
      link: string;
      type: 'primary' | 'secondary';
      isExternal: boolean;
      phoneNumber: string;
    }>;
  };
}

interface IndexPageProps {
  title: string;
  items: Array<{
    title: string;
    description: string;
    icon: string;
    link: string;
  }>; 
}

const IndexPage: React.FC<IndexPageProps> = ({ title, items }) => {
  return (
    <Layout>
      <SEO title={title} />
      <Hero {...homeData.hero} />
      <Needs {...homeData.needs} />
      <Services title={homeData.services.title} items={homeData.services.items} />
      <Brands {...homeData.brands} />
      <CallToAction {...homeData.callToAction} />
    </Layout>
  );
};

export default IndexPage;

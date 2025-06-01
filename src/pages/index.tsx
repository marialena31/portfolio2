import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import Hero from '../components/home/hero';
import Needs from '../components/home/needs';
import Services from '../components/home/services';
import Brands from '../components/home/brands';
import CallToAction from '../components/home/call-to-action';
import { homeData } from '../data/home';

type PageProps = object;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout isHomePage>
      <SEO
        title="Accueil"
        pageName="home"
        description="Création de sites web, e-commerce et conseils digitaux à Toulouse et partout en France."
      />
      <Hero {...homeData.hero} />
      <Needs {...homeData.needs} />
      <Services title={homeData.services.title} items={homeData.services.items} />
      <Brands {...homeData.brands} />
      <CallToAction {...homeData.callToAction} />
    </Layout>
  );
};

export default IndexPage;

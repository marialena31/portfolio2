export interface CallToActionButton {
  text: string;
  link: string;
  type: 'primary' | 'secondary';
  isExternal?: boolean;
  phoneNumber?: string;
}

export interface HomeData {
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
    buttons: Array<CallToActionButton>;
  };
}

export interface PageMetadata {
  description: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  image: string;
  twitterUsername: string;
  author: string;
  pageMetadata: {
    home: PageMetadata;
    about: PageMetadata;
    services: PageMetadata;
    portfolio: PageMetadata;
    contact: PageMetadata;
  };
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  pageName?: 'home' | 'about' | 'services' | 'portfolio' | 'contact';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
  author: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

export type { Project, Skill, SkillCategory, Service, SocialLink } from './data';

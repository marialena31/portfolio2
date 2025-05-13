export type { HomeData } from './data';

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

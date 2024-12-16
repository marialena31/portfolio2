export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
}

export type IconName =
  | 'code'
  | 'api'
  | 'consulting'
  | 'custom'
  | 'wrench'
  | 'arrow-up'
  | 'shield'
  | 'github'
  | 'linkedin'
  | 'typescript'
  | 'nodejs'
  | 'graphql'
  | 'react'
  | 'twitter';

export type PageName = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export type PhoneNumber = `+${number} ${number} ${number} ${number} ${number} ${number}`;

export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
  category: string;
  icon: IconName;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  features: string[];
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: IconName;
}

export interface HomeButton {
  text: string;
  link: string;
  type: 'primary' | 'secondary';
  isExternal?: boolean;
  phoneNumber?: PhoneNumber;
  icon?: IconName;
}

export interface HomeNeedItem {
  question: string;
  solution: string;
  link: string;
}

export interface HomeServiceItem {
  title: string;
  description: string;
  icon: IconName;
  link: string;
}

export interface HomeBrandItem {
  name: string;
  logo: string;
  alt: string;
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
    items: HomeNeedItem[];
  };
  services: {
    title: string;
    items: HomeServiceItem[];
  };
  brands: {
    title: string;
    items: HomeBrandItem[];
  };
  callToAction: {
    title: string;
    buttons: HomeButton[];
  };
}

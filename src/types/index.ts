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

export type { Project, Skill, SkillCategory, Service, SocialLink } from './data';

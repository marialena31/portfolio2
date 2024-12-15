export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  image: string;
  twitterUsername: string;
}

export interface MenuItem {
  path: string;
  label: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'devops';
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
}

export interface HomeData {
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
      type?: string;
    }>;
  };
}

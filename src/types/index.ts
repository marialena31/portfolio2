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

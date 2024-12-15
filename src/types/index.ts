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
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  featuredImage?: string;
  tags: string[];
}

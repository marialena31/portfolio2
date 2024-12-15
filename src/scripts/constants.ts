export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
} as const;

export const COLORS = {
  primary: '#663399', // Gatsby Purple
  secondary: '#FF6B6B',
  text: {
    primary: '#333333',
    secondary: '#666666',
    light: '#999999',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F7F7F7',
    dark: '#222222',
  },
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FFC107',
} as const;

export const TRANSITIONS = {
  fast: '0.2s',
  medium: '0.3s',
  slow: '0.5s',
} as const;

export const Z_INDEX = {
  modal: 1000,
  overlay: 900,
  dropdown: 800,
  header: 700,
  footer: 600,
} as const;

export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  portfolio: '/portfolio',
  blog: '/blog',
  contact: '/contact',
} as const;

export const META = {
  title: 'Portfolio',
  description: 'Portfolio professionnel créé avec Gatsby',
  author: '@yourusername',
  siteUrl: 'https://your-domain.com',
  social: {
    twitter: '@yourusername',
    github: 'yourusername',
    linkedin: 'yourusername',
  },
} as const;

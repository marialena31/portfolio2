// URL and Slug types
export type ValidUrl = `${'http' | 'https'}://${string}`;
export type Slug = string & { readonly _brand: unique symbol };

// Project tag type
export type ProjectTag =
  | 'React'
  | 'Node.js'
  | 'TypeScript'
  | 'JavaScript'
  | 'GraphQL'
  | 'MongoDB'
  | 'PostgreSQL'
  | 'Vue.js'
  | 'Express'
  | 'Gatsby'
  | string;

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

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  githubUrl?: ValidUrl;
  liveUrl?: ValidUrl;
  slug: Slug;
}

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

export interface Brand {
  id: string;
  name: string;
  imagePath: string;
  alt: string;
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
    items: Brand[];
  };
  callToAction: {
    title: string;
    buttons: HomeButton[];
  };
}

// Validation functions
export const isValidUrl = (url: string): url is ValidUrl => {
  try {
    new URL(url);
    return url.startsWith('http://') || url.startsWith('https://');
  } catch {
    return false;
  }
};

export const createSlug = (str: string): Slug => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '') as Slug;
};

export const isIconName = (icon: unknown): icon is IconName => {
  const validIcons: IconName[] = [
    'code',
    'api',
    'consulting',
    'custom',
    'wrench',
    'arrow-up',
    'shield',
    'github',
    'linkedin',
    'typescript',
    'nodejs',
    'graphql',
    'react',
    'twitter',
  ];
  return typeof icon === 'string' && validIcons.includes(icon as IconName);
};

export const isPhoneNumber = (phone: unknown): phone is PhoneNumber => {
  if (typeof phone !== 'string') return false;
  return /^\+\d{1,3}\s\d{1,3}\s\d{1,3}\s\d{1,3}\s\d{1,3}\s\d{1,3}$/.test(phone);
};

export const validateProject = (project: unknown): project is Project => {
  if (!project || typeof project !== 'object') return false;

  const p = project as Record<string, unknown>;

  const hasRequiredFields =
    typeof p.id === 'string' &&
    typeof p.title === 'string' &&
    typeof p.description === 'string' &&
    typeof p.image === 'string' &&
    Array.isArray(p.tags);

  if (!hasRequiredFields) return false;

  // Validate optional URL fields
  if (p.githubUrl && !isValidUrl(p.githubUrl as string)) return false;
  if (p.liveUrl && !isValidUrl(p.liveUrl as string)) return false;

  return true;
};

export const validateSkill = (skill: unknown): skill is Skill => {
  if (!skill || typeof skill !== 'object') return false;

  const s = skill as Record<string, unknown>;

  return (
    typeof s.id === 'string' &&
    typeof s.name === 'string' &&
    typeof s.level === 'number' &&
    s.level >= 0 &&
    s.level <= 100 &&
    typeof s.category === 'string' &&
    isIconName(s.icon)
  );
};

export const validateService = (service: unknown): service is Service => {
  if (!service || typeof service !== 'object') return false;

  const s = service as Record<string, unknown>;

  return (
    typeof s.id === 'string' &&
    typeof s.title === 'string' &&
    typeof s.description === 'string' &&
    isIconName(s.icon) &&
    Array.isArray(s.features) &&
    s.features.every(feature => typeof feature === 'string')
  );
};

export const validateSocialLink = (link: unknown): link is SocialLink => {
  if (!link || typeof link !== 'object') return false;

  const s = link as Record<string, unknown>;

  return (
    typeof s.id === 'string' &&
    typeof s.name === 'string' &&
    typeof s.url === 'string' &&
    isValidUrl(s.url) &&
    isIconName(s.icon)
  );
};

export const validateHomeButton = (button: unknown): button is HomeButton => {
  if (!button || typeof button !== 'object') return false;

  const b = button as Record<string, unknown>;

  const hasRequiredFields =
    typeof b.text === 'string' &&
    typeof b.link === 'string' &&
    (b.type === 'primary' || b.type === 'secondary');

  if (!hasRequiredFields) return false;

  // Validate optional fields
  if (b.isExternal !== undefined && typeof b.isExternal !== 'boolean') return false;
  if (b.phoneNumber !== undefined && !isPhoneNumber(b.phoneNumber)) return false;
  if (b.icon !== undefined && !isIconName(b.icon)) return false;

  return true;
};

export const validateHomeNeedItem = (item: unknown): item is HomeNeedItem => {
  if (!item || typeof item !== 'object') return false;

  const i = item as Record<string, unknown>;

  return (
    typeof i.question === 'string' && typeof i.solution === 'string' && typeof i.link === 'string'
  );
};

export const validateHomeServiceItem = (item: unknown): item is HomeServiceItem => {
  if (!item || typeof item !== 'object') return false;

  const i = item as Record<string, unknown>;

  return (
    typeof i.title === 'string' &&
    typeof i.description === 'string' &&
    isIconName(i.icon) &&
    typeof i.link === 'string'
  );
};

export const validateBrand = (brand: unknown): brand is Brand => {
  if (!brand || typeof brand !== 'object') return false;

  const b = brand as Record<string, unknown>;

  return (
    typeof b.id === 'string' &&
    typeof b.name === 'string' &&
    typeof b.imagePath === 'string' &&
    typeof b.alt === 'string'
  );
};

export const validateHomeData = (data: unknown): data is HomeData => {
  if (!data || typeof data !== 'object') return false;

  const d = data as Record<string, unknown>;

  // Validate hero section
  if (!d.hero || typeof d.hero !== 'object') return false;
  const hero = d.hero as Record<string, unknown>;

  const hasValidHero =
    typeof hero.title === 'string' &&
    typeof hero.subtitle === 'string' &&
    validateHomeDataCTA(hero.cta);

  if (!hasValidHero) return false;

  // Validate sections
  const hasValidSections =
    validateHomeDataSection(d.needs, validateHomeNeedItem) &&
    validateHomeDataSection(d.services, validateHomeServiceItem) &&
    validateHomeDataSection(d.brands, validateBrand) &&
    validateHomeDataSection(d.callToAction, validateHomeButton);

  return hasValidSections;
};

export const validateHomeDataCTA = (cta: unknown): cta is HomeData['hero']['cta'] => {
  if (!cta || typeof cta !== 'object') return false;

  const c = cta as Record<string, unknown>;

  return (
    typeof c.text === 'string' &&
    typeof c.link === 'string' &&
    typeof c.phoneNumber === 'string' &&
    isPhoneNumber(c.phoneNumber)
  );
};

export const validateHomeDataSection = <T>(
  section: unknown,
  validateItem: (item: unknown) => item is T
): section is { title: string; items: T[] } => {
  if (!section || typeof section !== 'object') return false;

  const s = section as Record<string, unknown>;

  return (
    typeof s.title === 'string' &&
    Array.isArray(s.items) &&
    s.items.every(item => validateItem(item))
  );
};

export const validateSkillCategory = (category: unknown): category is SkillCategory => {
  if (!category || typeof category !== 'object') return false;

  const c = category as Record<string, unknown>;

  return (
    typeof c.id === 'string' && typeof c.name === 'string' && typeof c.description === 'string'
  );
};

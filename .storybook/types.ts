import { IconName, PageName, PhoneNumber } from '../src/types/data';

// ArgTypes for Storybook controls
export const iconArgType = {
  control: { type: 'select' },
  options: [
    'code',
    'api',
    'consulting',
    'custom',
    'wrench',
    'arrow-up',
    'shield',
    'github',
    'linkedin',
    'twitter',
    'react',
    'typescript',
    'nodejs',
    'graphql',
  ] as IconName[],
};

export const pageNameArgType = {
  control: { type: 'select' },
  options: ['home', 'about', 'services', 'portfolio', 'contact'] as PageName[],
};

export const buttonTypeArgType = {
  control: 'radio',
  options: ['primary', 'secondary'],
};

// Helper for phone number validation
export const isValidPhoneNumber = (value: string): value is PhoneNumber => {
  return /^\+\d{2}\s\d{2}\s\d{2}\s\d{2}\s\d{2}\s\d{2}$/.test(value);
};

export const phoneNumberArgType = {
  control: 'text',
  description: 'Format: +XX XX XX XX XX XX',
  validate: isValidPhoneNumber,
};

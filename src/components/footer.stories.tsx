import type { Meta, StoryObj } from '@storybook/react';
import Footer from './footer';
import { SocialLink } from '../types/data';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    socialLinks: {
      description: 'Array of social media links',
      control: 'object',
    },
    copyrightYear: {
      description: 'Copyright year',
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

const defaultSocialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'github',
    id: '',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'linkedin',
    id: '',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'twitter',
    id: '',
  },
];

export const Default: Story = {
  args: {
    socialLinks: defaultSocialLinks,
    copyrightYear: new Date().getFullYear(),
  },
};

export const WithoutSocialLinks: Story = {
  args: {
    copyrightYear: new Date().getFullYear(),
  },
};

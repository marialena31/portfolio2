import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './navigation';
import { pageNameArgType } from '../../.storybook/types';
// Define NavigationItem locally (since it's not in types/data)
type NavigationItem = { label: string; path: string; pageName: string };

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
  argTypes: {
    currentPage: pageNameArgType,
    isOpen: {
      control: 'boolean',
      description: 'Whether the mobile navigation menu is open',
    },
    onClose: {
      action: 'closed menu',
    },
    items: {
      control: 'object',
      description: 'Navigation menu items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

const defaultNavItems: NavigationItem[] = [
  { label: 'Home', path: '/', pageName: 'home' },
  { label: 'About', path: '/about', pageName: 'about' },
  { label: 'Services', path: '/services', pageName: 'services' },
  { label: 'Portfolio', path: '/portfolio', pageName: 'portfolio' },
  { label: 'Blog', path: '/blog', pageName: 'blog' },
  { label: 'Contact', path: '/contact', pageName: 'contact' },
];

export const Default: Story = {
  args: {
    currentPage: 'home',
    isOpen: false,
    items: defaultNavItems,
  },
};

export const MobileMenuOpen: Story = {
  args: {
    currentPage: 'services',
    isOpen: true,
    items: defaultNavItems,
  },
};

export const CustomItems: Story = {
  args: {
    currentPage: 'portfolio',
    isOpen: false,
    items: [
      { label: 'Work', path: '/portfolio', pageName: 'portfolio' },
      { label: 'Experience', path: '/experience', pageName: 'about' },
      { label: 'Get in Touch', path: '/contact', pageName: 'contact' },
    ],
  },
};

export const WithActiveLink: Story = {
  args: {
    currentPage: 'blog',
    isOpen: false,
    items: defaultNavItems,
  },
};

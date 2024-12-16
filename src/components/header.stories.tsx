import type { Meta, StoryObj } from '@storybook/react';
import Header from './header';
import { pageNameArgType } from '../../.storybook/types';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    currentPage: pageNameArgType,
    isMenuOpen: {
      control: 'boolean',
      description: 'Whether the mobile menu is open',
    },
    onToggleMenu: {
      action: 'toggled menu',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    currentPage: 'home',
    isMenuOpen: false,
  },
};

export const WithMobileMenuOpen: Story = {
  args: {
    currentPage: 'portfolio',
    isMenuOpen: true,
  },
};

export const ServicesPage: Story = {
  args: {
    currentPage: 'services',
    isMenuOpen: false,
  },
};

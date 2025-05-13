import type { Meta, StoryObj } from '@storybook/react';
import Brands from './brands';
import { Brand } from '../../types/data';

const defaultBrands: Brand[] = [
  {
    id: 'bonpoint',
    name: 'Bonpoint',
    imagePath: '../../images/brands/bonpoint.png',
    alt: 'Logo Bonpoint',
  },
  {
    id: 'cac40',
    name: 'CAC 40',
    imagePath: '../../images/brands/cac-40.png',
    alt: 'Logo CAC 40',
  },
  {
    id: 'chausson',
    name: 'Chausson Matériaux',
    imagePath: '../../images/brands/chausson-materiaux.png',
    alt: 'Logo Chausson Matériaux',
  },
  {
    id: 'eram',
    name: 'Eram Group',
    imagePath: '../../images/brands/eram-group.png',
    alt: 'Logo Eram Group',
  },
];

const meta = {
  title: 'Home/Brands',
  component: Brands,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Section title',
    },
    items: {
      control: 'object',
      description: 'Array of brand items to display',
    },
  },
} satisfies Meta<typeof Brands>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Brands I Worked With',
    items: defaultBrands,
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'My Previous Clients',
    items: defaultBrands,
  },
};

export const WithFewBrands: Story = {
  args: {
    title: 'Featured Partners',
    items: defaultBrands.slice(0, 2),
  },
};

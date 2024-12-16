import type { Meta, StoryObj } from '@storybook/react';
import SEO from './seo';

const meta: Meta<typeof SEO> = {
  title: 'Components/SEO',
  component: SEO,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      description: 'The title of the page',
      control: { type: 'text' },
    },
    description: {
      description: 'The meta description of the page',
      control: { type: 'text' },
    },
    image: {
      description: 'The social sharing image path',
      control: { type: 'text' },
    },
    article: {
      description: 'Whether the page is an article',
      control: { type: 'boolean' },
    },
    pageName: {
      description: 'The name of the page',
      control: { type: 'select' },
      options: ['home', 'about', 'contact'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SEO>;

export const Default: Story = {
  args: {
    title: 'Accueil',
    pageName: 'home',
  },
};

export const WithCustomDescription: Story = {
  args: {
    title: 'Services',
    description: 'Custom description for the services page',
    pageName: 'services',
  },
};

export const BlogPost: Story = {
  args: {
    title: 'Understanding React Hooks',
    description: 'A deep dive into React Hooks and their usage',
    article: true,
    image: '/images/blog/react-hooks.jpg',
  },
};

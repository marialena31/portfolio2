import type { Meta, StoryObj } from '@storybook/react';
import Needs from './needs';
import { HomeNeedItem } from '../../types/data';

const defaultNeeds: HomeNeedItem[] = [
  {
    question: 'Need a Professional Website?',
    solution: 'Create your online presence with a modern and professional website.',
    link: '/services#web',
  },
  {
    question: 'Looking for Custom Web Development?',
    solution: 'Get a tailored web application that fits your business needs.',
    link: '/services#development',
  },
  {
    question: 'Want to Improve Your Web Performance?',
    solution: 'Optimize your website for better speed and user experience.',
    link: '/services#optimization',
  },
];

const meta: Meta<typeof Needs> = {
  title: 'Home/Needs',
  component: Needs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#f8fafc' },
      ],
    },
  },
  argTypes: {
    title: {
      description: 'Section title',
      control: 'text',
    },
    items: {
      description: 'Array of need items with questions and solutions',
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Needs>;

export const Default: Story = {
  args: {
    title: 'Your Needs',
    items: defaultNeeds,
  },
};

export const SingleNeed: Story = {
  args: {
    title: 'Core Service',
    items: [defaultNeeds[0]],
  },
};

export const WithLongContent: Story = {
  args: {
    title: 'Comprehensive Solutions',
    items: [
      {
        question: 'Need a Complete Digital Transformation?',
        solution:
          'We offer end-to-end digital transformation services, from strategy and planning to implementation and maintenance. Our team of experts will guide you through every step of the process.',
        link: '/services#transformation',
      },
      {
        question: 'Looking for E-commerce Solutions?',
        solution:
          'Launch your online store with a powerful e-commerce solution. We handle everything from product management to payment integration and order fulfillment systems.',
        link: '/services#ecommerce',
      },
    ],
  },
};

export const WithCustomLinks: Story = {
  args: {
    title: 'Specialized Services',
    items: [
      {
        question: 'Need API Integration?',
        solution: 'Seamlessly connect your systems with third-party services.',
        link: '/services/api-integration',
      },
      {
        question: 'Want Cloud Solutions?',
        solution: 'Deploy your applications on reliable cloud infrastructure.',
        link: '/services/cloud',
      },
      {
        question: 'Looking for Security Audit?',
        solution: 'Ensure your web applications are secure and protected.',
        link: '/services/security',
      },
    ],
  },
};

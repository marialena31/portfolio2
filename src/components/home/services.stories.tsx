import type { Meta, StoryObj } from '@storybook/react';
import Services from './services';
import { HomeServiceItem } from '../../types/data';

const defaultServices: HomeServiceItem[] = [
  {
    title: 'Web Development',
    description: 'Creating modern and performant websites using the latest technologies.',
    icon: 'code',
    link: '/services/web-development',
  },
  {
    title: 'API Integration',
    description: 'Seamless integration of third-party APIs and services.',
    icon: 'api',
    link: '/services/api-integration',
  },
  {
    title: 'Technical Consulting',
    description: 'Expert advice on architecture and technology choices.',
    icon: 'consulting',
    link: '/services/consulting',
  },
];

const meta: Meta<typeof Services> = {
  title: 'Home/Services',
  component: Services,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Services section component that displays a grid of available services. Each service includes an icon, title, description, and a link.',
      },
    },
  },
  argTypes: {
    title: {
      description: 'Main section heading',
      control: 'text',
    },
    items: {
      description: 'Array of service items to display',
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Services>;

export const Default: Story = {
  args: {
    title: 'My Services',
    items: defaultServices,
  },
};

export const WithCustomTitle: Story = {
  args: {
    title: 'What I Offer',
    items: defaultServices,
  },
};

export const SingleService: Story = {
  args: {
    title: 'Featured Service',
    items: [defaultServices[0]],
  },
};

export const CustomServices: Story = {
  args: {
    title: 'Specialized Services',
    items: [
      {
        title: 'Performance Optimization',
        description: "Improve your website's speed and user experience.",
        icon: 'wrench',
        link: '/services/performance',
      },
      {
        title: 'Security Audit',
        description: 'Comprehensive security assessment and recommendations.',
        icon: 'shield',
        link: '/services/security',
      },
    ],
  },
};

export const WithLongDescriptions: Story = {
  args: {
    title: 'Detailed Services',
    items: defaultServices.map(service => ({
      ...service,
      description:
        service.description +
        ' Our team of experts ensures the highest quality of work, following industry best practices and standards to deliver exceptional results that exceed expectations.',
    })),
  },
};

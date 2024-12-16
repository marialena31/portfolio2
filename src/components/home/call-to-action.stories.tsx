import type { Meta, StoryObj } from '@storybook/react';
import CallToAction from './call-to-action';
import { HomeButton } from '../../types/data';

const defaultButtons: HomeButton[] = [
  {
    text: 'Contact Me',
    link: '/contact',
    phoneNumber: '+33 07 61 81 11 01',
    type: 'primary',
  },
  {
    text: 'View Portfolio',
    link: '/portfolio',
    type: 'primary',
  },
];

const meta: Meta<typeof CallToAction> = {
  title: 'Home/CallToAction',
  component: CallToAction,
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
    title: {
      control: 'text',
      description: 'Main heading text',
    },
    subtitle: {
      control: 'text',
      description: 'Optional supporting text',
    },
    buttons: {
      control: 'object',
      description: 'Array of call-to-action buttons',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CallToAction>;

export const Default: Story = {
  args: {
    title: 'Ready to Start Your Project?',
    subtitle: "Get in touch and let's discuss your needs",
    buttons: defaultButtons,
  },
};

export const SingleButton: Story = {
  args: {
    title: 'Get in Touch',
    subtitle: "I'm available for freelance work",
    buttons: [
      {
        text: 'Schedule a Call',
        link: '/schedule',
        phoneNumber: '+33 07 61 81 11 01',
        type: 'primary',
      },
    ],
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: "Let's Work Together",
    buttons: defaultButtons,
  },
};

export const WithEmphasis: Story = {
  args: {
    title: 'Ready to Transform Your Ideas into Reality?',
    subtitle: 'Take the first step towards your next successful project',
    buttons: [
      {
        text: 'Start Your Project',
        link: '/start',
        type: 'primary',
      },
      {
        text: 'Learn More',
        link: '/services',
        type: 'primary',
      },
    ],
  },
};

export const WithCustomIcons: Story = {
  args: {
    title: 'Need Expert Consultation?',
    subtitle: 'Book a free 30-minute consultation call',
    buttons: [
      {
        text: 'Book Consultation',
        link: '/book',
        type: 'primary',
      },
      {
        text: 'View Services',
        link: '/services',
        type: 'primary',
      },
    ],
  },
};

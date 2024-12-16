import type { Meta, StoryObj } from '@storybook/react';
import Hero from './hero';
import { HomeButton, PhoneNumber } from '../../types/data';

const meta: Meta<typeof Hero> = {
  title: 'Home/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Hero section component that appears at the top of the home page. It displays the main value proposition and a call-to-action button.',
      },
    },
  },
  argTypes: {
    title: {
      description: 'Main heading text',
      control: 'text',
    },
    subtitle: {
      description: 'Supporting text that appears below the title',
      control: 'text',
    },
    cta: {
      description: 'Call to action button configuration',
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

const defaultCta: HomeButton = {
  text: 'Contact Me',
  link: '/contact',
  phoneNumber: '+1234567890' as PhoneNumber,
  type: 'primary',
};

export const Default: Story = {
  args: {
    title: 'Freelance Web Developer',
    subtitle: 'Building custom websites and applications',
    cta: defaultCta,
  },
};

export const WithLongTitle: Story = {
  args: {
    title: 'Full Stack Developer Specializing in Modern Web Technologies',
    subtitle: 'Creating scalable and performant solutions for businesses',
    cta: defaultCta,
  },
};

export const WithoutPhone: Story = {
  args: {
    title: 'Creative Developer',
    subtitle: 'Turning your ideas into reality',
    cta: {
      text: 'View Portfolio',
      link: '/portfolio',
      type: 'primary',
    },
  },
};

export const CustomCTA: Story = {
  args: {
    title: 'Web Development Expert',
    subtitle: 'Over 5 years of experience in creating modern web applications',
    cta: {
      text: 'Schedule a Call',
      link: '/schedule',
      phoneNumber: '+44123456789' as PhoneNumber,
      icon: 'consulting',
      type: 'primary',
    },
  },
};

export const WithEmphasis: Story = {
  args: {
    title: "Let's Build Something Amazing Together",
    subtitle: 'Experienced developer ready to bring your vision to life',
    cta: {
      text: 'Start Your Project',
      link: '/start',
      type: 'primary',
    },
  },
};

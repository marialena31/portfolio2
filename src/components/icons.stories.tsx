import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './icons';
import { IconName } from '../types/data';
import React from 'react';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [
        'code',
        'api',
        'consulting',
        'custom',
        'wrench',
        'shield',
        'github',
        'linkedin',
        'arrow-up',
      ],
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'code' as IconName,
    size: 24,
  },
};

export const CustomColor: Story = {
  args: {
    name: 'github' as IconName,
    size: 32,
    color: '#4A90E2',
  },
};

export const LargeIcon: Story = {
  args: {
    name: 'consulting' as IconName,
    size: 48,
  },
};

const galleryStyle = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
  },
  iconWrapper: {
    textAlign: 'center' as const,
    padding: '1rem',
  },
  iconLabel: {
    marginTop: '0.5rem',
    fontSize: '0.875rem',
  },
} as const;

const iconNames: IconName[] = [
  'code',
  'api',
  'consulting',
  'custom',
  'wrench',
  'shield',
  'github',
  'linkedin',
  'arrow-up',
];

export const IconGallery: Story = {
  args: {
    name: 'code' as IconName,
    size: 24,
  },
  render: () => (
    <div style={galleryStyle.container}>
      {iconNames.map(name => (
        <div key={name} style={galleryStyle.iconWrapper}>
          <Icon name={name} size={24} />
          <div style={galleryStyle.iconLabel}>{name}</div>
        </div>
      ))}
    </div>
  ),
};

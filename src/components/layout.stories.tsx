import type { Meta, StoryObj } from '@storybook/react';
import Layout from './layout';
import React from 'react';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    currentPage: {
      control: { type: 'select' },
      options: ['home', 'about', 'services', 'portfolio', 'contact'],
    },
    children: {
      control: { type: 'text' },
      description: 'Content to be rendered inside the layout',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

const DummyContent = ({ height = '400px' }) => (
  <div
    style={{
      padding: '20px',
      height,
      background: '#f3f4f6',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '20px',
    }}
  >
    Page Content
  </div>
);

export const Default: Story = {
  args: {
    currentPage: 'home',
    children: <DummyContent />,
  },
};

export const LongContent: Story = {
  args: {
    currentPage: 'portfolio',
    children: (
      <>
        <DummyContent height="800px" />
        <DummyContent height="600px" />
      </>
    ),
  },
};

export const BlogLayout: Story = {
  args: {
    currentPage: 'blog',
    children: (
      <div style={{ padding: '20px', maxWidth: '720px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Blog Post Title</h1>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    ),
  },
};

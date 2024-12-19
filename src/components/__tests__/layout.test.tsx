import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../layout';
import { useStaticQuery } from 'gatsby';

// Mock CSS modules
jest.mock('../layout.module.scss', () => ({
  layout: 'layout',
  main: 'main',
  container: 'container',
}));

// Mock Header and Footer components
jest.mock('../header', () => {
  const MockHeader = () => <div data-testid="mock-header">Header</div>;
  MockHeader.displayName = 'Header';
  return MockHeader;
});
jest.mock('../footer', () => {
  const MockFooter = () => <div data-testid="mock-footer">Footer</div>;
  MockFooter.displayName = 'Footer';
  return MockFooter;
});

// Mock gatsby's useStaticQuery
jest.mock('gatsby');
const mockUseStaticQuery = useStaticQuery as jest.Mock;

beforeEach(() => {
  mockUseStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: 'Test Site',
        description: 'Test Description',
        author: 'Test Author',
      },
    },
  }));
});

describe('Layout component', () => {
  it('renders header and footer', async () => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );

    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });

  it('renders children content', async () => {
    const testContent = 'Test child content';
    render(
      <Layout>
        <div>{testContent}</div>
      </Layout>
    );

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('applies layout styles', async () => {
    const { container } = render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );

    expect(container.querySelector('.layout')).toBeInTheDocument();
    expect(container.querySelector('.main')).toBeInTheDocument();
    expect(container.querySelector('.container')).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { SEO } from '../seo';
import { useStaticQuery } from 'gatsby';

// Mock gatsby's useStaticQuery
jest.mock('gatsby');
const mockUseStaticQuery = useStaticQuery as jest.Mock;

// Store the last rendered Helmet children
let lastHelmetChildren: React.ReactNode[] = [];

// Mock react-helmet
jest.mock('react-helmet', () => ({
  Helmet: ({ children }: { children: React.ReactNode[] }) => {
    lastHelmetChildren = Array.isArray(children) ? children : [children];
    return null;
  },
}));

beforeEach(() => {
  mockUseStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: 'Default Title',
        description: 'Default Description',
        author: 'Default Author',
        siteUrl: 'https://example.com',
      },
    },
  }));
  lastHelmetChildren = [];
});

describe('SEO component', () => {
  it('renders with default props', () => {
    render(<SEO />);

    // Find title element
    const titleElement = lastHelmetChildren.find(
      child => React.isValidElement(child) && child.type === 'title'
    ) as React.ReactElement;
    expect(titleElement?.props.children).toBe('Default Title');

    // Find description meta tag
    const descriptionMeta = lastHelmetChildren.find(
      child =>
        React.isValidElement(child) && child.type === 'meta' && child.props.name === 'description'
    ) as React.ReactElement;
    expect(descriptionMeta?.props.content).toBe('Default Description');
  });

  it('renders with custom title', () => {
    render(<SEO title="Custom Title" />);

    const titleElement = lastHelmetChildren.find(
      child => React.isValidElement(child) && child.type === 'title'
    ) as React.ReactElement;
    expect(titleElement?.props.children).toBe('Custom Title');
  });

  it('renders with custom description', () => {
    render(<SEO description="Custom Description" />);

    const descriptionMeta = lastHelmetChildren.find(
      child =>
        React.isValidElement(child) && child.type === 'meta' && child.props.name === 'description'
    ) as React.ReactElement;
    expect(descriptionMeta?.props.content).toBe('Custom Description');
  });

  it('renders with custom image', () => {
    render(<SEO image="https://example.com/custom-image.jpg" />);

    const imageMeta = lastHelmetChildren.find(
      child => React.isValidElement(child) && child.type === 'meta' && child.props.name === 'image'
    ) as React.ReactElement;
    expect(imageMeta?.props.content).toBe('https://example.com/custom-image.jpg');
  });

  it('renders with custom page name', () => {
    render(<SEO pageName="about" />);

    const urlMeta = lastHelmetChildren.find(
      child =>
        React.isValidElement(child) && child.type === 'meta' && child.props.property === 'og:url'
    ) as React.ReactElement;
    expect(urlMeta?.props.content).toBe('https://example.com/about');
  });

  it('renders all required meta tags', () => {
    render(<SEO />);

    // Helper function to find meta tags
    const findMetaTag = (nameOrProperty: string, type: 'name' | 'property') =>
      lastHelmetChildren.find(
        child =>
          React.isValidElement(child) &&
          child.type === 'meta' &&
          child.props[type] === nameOrProperty
      );

    // Check Open Graph tags
    expect(findMetaTag('og:title', 'property')).toBeTruthy();
    expect(findMetaTag('og:description', 'property')).toBeTruthy();
    expect(findMetaTag('og:image', 'property')).toBeTruthy();
    expect(findMetaTag('og:url', 'property')).toBeTruthy();
    expect(findMetaTag('og:type', 'property')).toBeTruthy();

    // Check Twitter Card tags
    expect(findMetaTag('twitter:card', 'name')).toBeTruthy();
    expect(findMetaTag('twitter:title', 'name')).toBeTruthy();
    expect(findMetaTag('twitter:description', 'name')).toBeTruthy();
    expect(findMetaTag('twitter:image', 'name')).toBeTruthy();
  });
});

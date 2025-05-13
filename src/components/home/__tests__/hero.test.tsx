import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../hero';

// Mock CSS modules
jest.mock('../hero.module.scss', () => ({
  hero: 'hero',
  backgroundImage: 'backgroundImage',
  bannerImage: 'bannerImage',
  overlay: 'overlay',
  content: 'content',
  title: 'title',
  subtitle: 'subtitle',
  cta: 'cta',
  primaryButton: 'primaryButton',
}));

// Mock gatsby-plugin-image
jest.mock('gatsby-plugin-image', () => ({
  StaticImage: jest.fn().mockImplementation(({ alt }) => <img alt={alt} />),
}));

// Mock gatsby Link component
jest.mock('gatsby', () => ({
  Link: jest.fn().mockImplementation(({ to, children, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  )),
}));

describe('Hero component', () => {
  const mockProps = {
    title: 'Welcome to My Portfolio',
    subtitle: 'Frontend Developer & UI/UX Designer',
    cta: {
      text: 'View Projects',
      link: '/projects',
      type: 'primary' as const,
      phoneNumber: '+33 6 12 34 56 78',
    },
  };

  it('renders hero section with correct content', () => {
    render(<Hero {...mockProps} />);

    // Check title
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.title).tagName).toBe('H1');

    // Check subtitle
    expect(screen.getByText(mockProps.subtitle)).toBeInTheDocument();

    // Check CTA button
    const ctaButton = screen.getByText(mockProps.cta.text);
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton.closest('a')).toHaveAttribute('href', mockProps.cta.link);
  });

  it('renders background image with correct attributes', () => {
    render(<Hero {...mockProps} />);

    // Check if StaticImage is rendered with correct props
    const backgroundImage = screen.getByAltText('Background banner');
    expect(backgroundImage).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    const { container } = render(<Hero {...mockProps} />);

    // Check for main section class
    expect(container.querySelector('[class*="hero"]')).toBeInTheDocument();

    // Check for content wrapper class
    expect(container.querySelector('[class*="content"]')).toBeInTheDocument();

    // Check for background image wrapper class
    expect(container.querySelector('[class*="backgroundImage"]')).toBeInTheDocument();

    // Check for overlay class
    expect(container.querySelector('[class*="overlay"]')).toBeInTheDocument();
  });

  it('renders with different content props', () => {
    const newProps = {
      title: 'Different Title',
      subtitle: 'Different Subtitle',
      cta: {
        text: 'Contact Me',
        link: '/contact',
        type: 'primary' as const,
        phoneNumber: '+33 6 12 34 56 78',
      },
    };

    render(<Hero {...newProps} />);

    expect(screen.getByText(newProps.title)).toBeInTheDocument();
    expect(screen.getByText(newProps.subtitle)).toBeInTheDocument();
    expect(screen.getByText(newProps.cta.text)).toBeInTheDocument();
  });

  it('maintains semantic HTML structure', () => {
    const { container } = render(<Hero {...mockProps} />);

    // Check if it's a section element
    expect(container.querySelector('section')).toBeInTheDocument();

    // Check heading hierarchy
    const heading = screen.getByText(mockProps.title);
    expect(heading.tagName).toBe('H1');

    // Check paragraph for subtitle
    const subtitle = screen.getByText(mockProps.subtitle);
    expect(subtitle.tagName).toBe('P');
  });
});

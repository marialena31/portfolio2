import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from '../services';
import { IconName } from '../../../types/data';

// Mock CSS modules
jest.mock('../services.module.scss', () => ({
  services: 'services',
  content: 'content',
  header: 'header',
  title: 'title',
  list: 'list',
  item: 'item',
  icon: 'icon',
  itemTitle: 'itemTitle',
  itemDescription: 'itemDescription',
  link: 'link',
}));

// Use the mocked Icon component from __mocks__ directory
jest.mock('../../icons');

const mockServices = {
  title: 'Our Services',
  items: [
    {
      icon: 'code' as IconName,
      title: 'Web Development',
      description: 'Custom web development solutions',
      link: '/services/web-development',
    },
    {
      icon: 'design' as IconName,
      title: 'UI/UX Design',
      description: 'User-centered design solutions',
      link: '/services/design',
    },
  ],
};

describe('Services component', () => {
  it('renders title correctly', () => {
    render(<Services {...mockServices} />);
    expect(screen.getByText(mockServices.title)).toBeInTheDocument();
  });

  it('renders all service items', () => {
    render(<Services {...mockServices} />);

    mockServices.items.forEach(item => {
      // Check title and description
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();

      // Check icon
      expect(screen.getByTestId(`icon-${item.icon}`)).toBeInTheDocument();

      // Check service link (using getAllByText since there are multiple "En savoir plus" links)
      const links = screen.getAllByText('En savoir plus');
      const link = links.find(l => l.getAttribute('href') === item.link);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', item.link);
    });
  });

  it('applies correct CSS classes', () => {
    const { container } = render(<Services {...mockServices} />);

    // Check main section classes
    expect(container.querySelector('.services')).toBeInTheDocument();
    expect(container.querySelector('.content')).toBeInTheDocument();
    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(container.querySelector('.list')).toBeInTheDocument();

    // Check service item classes
    const items = container.querySelectorAll('.item');
    expect(items).toHaveLength(mockServices.items.length);

    // Check icon container class
    expect(container.querySelector('.icon')).toBeInTheDocument();
  });

  it('renders with correct semantic structure', () => {
    const { container } = render(<Services {...mockServices} />);

    // Check section has correct ID
    const section = container.querySelector('section.services');
    expect(section).toHaveAttribute('id', 'services');

    // Check heading hierarchy
    const mainHeading = screen.getByRole('heading', { level: 2 });
    expect(mainHeading).toHaveTextContent(mockServices.title);

    // Check service item headings
    const serviceHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(serviceHeadings).toHaveLength(mockServices.items.length);
    serviceHeadings.forEach((heading, index) => {
      expect(heading).toHaveTextContent(mockServices.items[index].title);
    });
  });

  it('handles empty items array', () => {
    // List should be empty
    const { container } = render(<Services title="Our Services" items={[]} />);
    const items = container.querySelectorAll('.item');
    expect(items).toHaveLength(0);
  });

  it('renders links with correct attributes', () => {
    render(<Services {...mockServices} />);
    const links = screen.getAllByText('En savoir plus');

    expect(links).toHaveLength(mockServices.items.length);
    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', mockServices.items[index].link);
      expect(link).toHaveClass('link');
    });
  });
});

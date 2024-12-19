import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react';
import '@testing-library/jest-dom';
import Navigation from '../navigation';

// Mock CSS modules
jest.mock('../navigation.module.scss', () => ({
  nav: 'nav',
  navContent: 'navContent',
  logo: 'logo',
  menuButton: 'menuButton',
  menuList: 'menuList',
  menuOpen: 'menuOpen',
  menuItem: 'menuItem',
}));

// Mock gatsby Link component
jest.mock('gatsby', () => ({
  Link: jest.fn().mockImplementation(({ to, children, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  )),
}));

describe('Navigation component', () => {
  beforeEach(() => {
    // Reset any mocks and timers before each test
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders logo and navigation items', () => {
    render(<Navigation />);

    // Check logo
    expect(screen.getByText('ExpertEcom')).toBeInTheDocument();

    // Check navigation items (these should be visible in desktop view)
    expect(screen.getByText('Accueil')).toBeInTheDocument();
    expect(screen.getByText('À propos')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(<Navigation />);

    const menuButton = screen.getByLabelText('Toggle navigation menu');

    // Initial state
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    // Click to open
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Click to close
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('sets focus on first menu item when menu opens', async () => {
    render(<Navigation />);

    const menuButton = screen.getByLabelText('Toggle navigation menu');
    fireEvent.click(menuButton);

    // Fast-forward timers
    act(() => {
      jest.advanceTimersByTime(100);
    });

    // Check if focus is set on first menu item
    const firstMenuItem = screen.getByText('Accueil').closest('a');
    expect(document.activeElement).toBe(firstMenuItem);
  });

  it('applies correct accessibility attributes', () => {
    render(<Navigation />);

    // Check main navigation role and label
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');

    // Check logo accessibility
    const logo = screen.getByLabelText('Go to homepage');
    expect(logo).toBeInTheDocument();

    // Check menu button accessibility
    const menuButton = screen.getByLabelText('Toggle navigation menu');
    expect(menuButton).toHaveAttribute('aria-expanded');
  });

  it('handles keyboard navigation', async () => {
    render(<Navigation />);

    // Test menu button activation
    const menuButton = screen.getByLabelText('Toggle navigation menu');
    fireEvent.click(menuButton);

    // Fast-forward timers
    jest.advanceTimersByTime(100);

    // Check menu is open
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Test escape key closing
    fireEvent.keyDown(document, { key: 'Escape' });

    // Fast-forward timers
    jest.advanceTimersByTime(100);

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('maintains responsive design classes', () => {
    const { container } = render(<Navigation />);

    // Check for main navigation classes
    expect(container.querySelector('[role="navigation"]')).toBeInTheDocument();
    expect(container.querySelector('[aria-label="Main navigation"]')).toBeInTheDocument();

    // Check menu button visibility
    const menuButton = screen.getByLabelText('Toggle navigation menu');
    expect(menuButton).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MegaMenu from '../MegaMenu';
import '@testing-library/jest-dom';

// Simple a11y/unit smoke test for MegaMenu

describe('MegaMenu', () => {
  it('renders the desktop menu and all main items', () => {
    render(<MegaMenu />);
    expect(screen.getByTestId('mega-menu-root')).toBeInTheDocument();
    expect(screen.getByLabelText('Menu principal')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Projets')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('shows submenu on trigger click and allows keyboard navigation', async () => {
    render(<MegaMenu />);
    const trigger = screen.getByText('Services');
    userEvent.tab(); // focus on first trigger
    expect(trigger).toHaveFocus();
    userEvent.keyboard('{enter}');
    expect(await screen.findByRole('menu', { name: /Sous-menu Services/i })).toBeInTheDocument();
    // Tab to first submenu link
    userEvent.tab();
    expect(screen.getByTestId('submenu-link-E-commerce')).toHaveFocus();
  });

  it('renders and toggles the mobile menu', async () => {
    render(<MegaMenu />);
    const burger = screen.getByTestId('burger-button');
    userEvent.click(burger);
    expect(await screen.findByTestId('mobile-menu')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-menu-item-Services')).toBeInTheDocument();
    userEvent.click(burger);
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });

  it('has correct aria attributes for accessibility', () => {
    render(<MegaMenu />);
    expect(screen.getByLabelText('Menu principal')).toBeInTheDocument();
    expect(screen.getByLabelText('Menu principal mobile')).toBeInTheDocument();
  });
});

import 'vitest/globals';
import '@testing-library/jest-dom';
import * as React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DiagnosticForm, { questions } from '../DiagnosticForm';
// Optionally, if jest-dom is not globally available, import it:
// import '@testing-library/jest-dom';

describe('DiagnosticForm accessibilité', () => {
  it('affiche les labels obligatoires avec étoile', () => {
    render(<DiagnosticForm />);
    // Vérifie la présence du texte "* obligatoire"
    expect(screen.getAllByText('* obligatoire').length).toBeGreaterThan(0);
    // Vérifie la présence d'au moins un label avec une étoile
    questions.forEach((q: any) => {
      expect(screen.getByText(q.label)).toBeInTheDocument();
      const label =
        screen.getByText(q.label).closest('label') || screen.getByText(q.label).parentElement;
      expect(label?.textContent).toContain('*');
    });
  });

  it('le formulaire est accessible au clavier', () => {
    const { container } = render(<DiagnosticForm />);
    // Vérifie la présence d'au moins un champ input
    const inputs = container.querySelectorAll('input');
    expect(inputs.length).toBeGreaterThan(0);
    // Vérifie qu'ils sont accessibles via tabIndex
    inputs.forEach(input => {
      expect(input.tabIndex).not.toBeLessThan(-1);
    });
  });
});

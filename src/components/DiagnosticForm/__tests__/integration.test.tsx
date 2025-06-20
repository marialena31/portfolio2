/// <reference types="vitest/globals" />
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DiagnosticForm from '../DiagnosticForm';

// Mock axios pour simuler l'API mail-server
vi.mock('axios', () => ({
  default: {
    get: vi.fn(() => Promise.resolve({ data: { token: 'csrf-token' } })),
    post: vi.fn(() => Promise.resolve({ data: { success: true } })),
  },
}));

describe('DiagnosticForm intégration - soumission complète', () => {
  it('remplit et soumet le formulaire sans erreur', async () => {
    render(<DiagnosticForm />);
    // Remplis toutes les questions (on prend toujours la première option)
    while (screen.queryByRole('button', { name: /suivant/i })) {
      const radios = screen.getAllByRole('radio');
      fireEvent.click(radios[0]);
      fireEvent.click(screen.getByRole('button', { name: /suivant/i }));
    }
    // Remplis les coordonnées
    fireEvent.change(screen.getByLabelText(/prénom/i), { target: { value: 'Alice' } });
    fireEvent.change(screen.getByLabelText(/nom/i), { target: { value: 'Martin' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'alice@exemple.com' } });
    fireEvent.change(screen.getByLabelText(/société/i), { target: { value: 'TestCorp' } });
    fireEvent.change(screen.getByLabelText(/url du site/i), {
      target: { value: 'https://test.com' },
    });
    fireEvent.click(screen.getByRole('button', { name: /voir le résultat/i }));
    // Résultat affiché
    await waitFor((): void => {
      expect(screen.getByText(/résultat de votre diagnostic/i)).toBeInTheDocument();
    });
    // Soumission email
    fireEvent.click(screen.getByRole('button', { name: /envoyer par email/i }));
    await waitFor((): void => {
      expect(screen.getByText(/votre diagnostic a bien été envoyé/i)).toBeInTheDocument();
    });
  });
});

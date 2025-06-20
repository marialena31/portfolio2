import { describe, it, expect } from 'vitest';
import { computeScoringAndReco, cleanAxisScores } from '../DiagnosticForm';

// Simule la structure d'un formulaire rempli
const answers: Record<string, number> = {
  capacite_budgetaire: 4,
  volonte_d_hebergement_geré: 5,
  complexite_technique: 7,
  multi_site_international: 3,
  scalabilite: 2,
};

const contact: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website: string;
} = {
  firstName: 'Alice',
  lastName: 'Martin',
  email: 'alice@exemple.com',
  company: 'Test Corp',
  website: 'https://test.com',
};

describe('DiagnosticForm - payload API mail-server', () => {
  it('génère un payload propre et conforme', () => {
    const { axisScores, recommendation } = computeScoringAndReco(answers);
    const cleanedAxisScores = cleanAxisScores(axisScores);
    const payload = {
      contact,
      diagnostic: {
        answers,
        axisScores: cleanedAxisScores,
        recommendation,
      },
    };
    // Vérifie la structure générale
    expect(payload).toHaveProperty('contact');
    expect(payload).toHaveProperty('diagnostic');
    expect(payload.diagnostic).toHaveProperty('answers');
    expect(payload.diagnostic).toHaveProperty('axisScores');
    expect(payload.diagnostic).toHaveProperty('recommendation');
    // Pas de champs null/undefined dans axisScores
    Object.entries(payload.diagnostic.axisScores).forEach(([k, v]) => {
      expect(typeof v).toBe('number');
      expect(v).not.toBeNull();
      expect(v).not.toBeUndefined();
    });
    // Pas d'axes inconnus
    const validAxes = [
      'capacite_budgetaire',
      'volonte_d_hebergement_geré',
      'complexite_technique',
      'multi_site_international',
      'scalabilite',
    ];
    Object.keys(payload.diagnostic.axisScores).forEach(axis => {
      expect(validAxes).toContain(axis);
    });
    // La recommendation n'est pas vide
    expect(payload.diagnostic.recommendation).toMatch(
      /Magento 2|Shopify|Sylius|PrestaShop|WooCommerce/
    );
  });

  it('ne garde que les axes numériques dans axisScores', () => {
    // Simule un axisScores sale
    const dirty = {
      capacite_budgetaire: 5,
      eco: null,
      bidon: undefined,
      scalabilite: 2,
      business: NaN,
    };
    const cleaned = cleanAxisScores(dirty);
    expect(Object.keys(cleaned)).toEqual(
      expect.arrayContaining(['capacite_budgetaire', 'scalabilite'])
    );
    expect(cleaned).not.toHaveProperty('eco');
    expect(cleaned).not.toHaveProperty('bidon');
    expect(cleaned).not.toHaveProperty('business');
  });
});

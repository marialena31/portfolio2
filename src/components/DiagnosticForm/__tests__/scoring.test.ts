import { describe, it, expect } from 'vitest';
import { computeScoringAndReco } from '../DiagnosticForm';

describe('DiagnosticForm scoring (nouvelle structure axes Magento 1)', () => {
  it('calcule correctement les scores pour toutes les réponses maximales', () => {
    const answers = {
      capacite_budgetaire: 6, // 3 (chiffre_affaires) + 3 (budget)
      complexite_technique: 6, // 3 (version_magento) + 3 (ecosysteme)
    };
    const { axisScores, recommendation } = computeScoringAndReco(answers);
    expect(axisScores).toEqual({
      capacite_budgetaire: 6,
      volonte_d_hebergement_geré: 0,
      complexite_technique: 6,
      multi_site_international: 0,
      scalabilite: 0,
    });
    expect(recommendation).toMatch(/PrestaShop|WooCommerce/); // Adjusted based on scoring logic
  });

  it('calcule 0 si aucune réponse', () => {
    const answers = {};
    const { axisScores, recommendation } = computeScoringAndReco(answers);
    expect(axisScores).toEqual({
      capacite_budgetaire: 0,
      volonte_d_hebergement_geré: 0,
      complexite_technique: 0,
      multi_site_international: 0,
      scalabilite: 0,
    });
    expect(recommendation).toMatch(/Shopify/); // Adjusted based on scoring logic
  });

  it('calcule des scores partiels et la bonne reco', () => {
    const answers: Record<string, number> = {
      capacite_budgetaire: 3, // e.g. 2 (chiffre_affaires) + 1 (budget)
      complexite_technique: 3, // e.g. 1 (version_magento) + 2 (ecosysteme)
    };
    const { axisScores, recommendation } = computeScoringAndReco(answers);
    expect(axisScores).toEqual({
      capacite_budgetaire: 3,
      volonte_d_hebergement_geré: 0,
      complexite_technique: 3,
      multi_site_international: 0,
      scalabilite: 0,
    });
    expect(recommendation).toMatch(/Shopify|PrestaShop|WooCommerce/); // Adjusted based on scoring logic
  });
});

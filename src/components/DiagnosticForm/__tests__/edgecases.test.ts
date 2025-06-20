import { describe, it, expect } from 'vitest';
import { computeScoringAndReco, cleanAxisScores } from '../DiagnosticForm';

describe('DiagnosticForm - cas limites et sécurité', () => {
  it('supporte un payload géant (stress test)', () => {
    const bigAnswers: Record<string, number> = {};
    for (let i = 0; i < 1000; i++) {
      bigAnswers[`capacite_budgetaire_${i}`] = Math.floor(Math.random() * 6);
    }
    // On ne garde que les axes connus dans le clean
    const { axisScores } = computeScoringAndReco(bigAnswers);
    const cleaned = cleanAxisScores(axisScores);
    // Seuls les axes attendus doivent rester
    expect(Object.keys(cleaned)).toEqual(
      expect.arrayContaining([
        'capacite_budgetaire',
        'volonte_d_hebergement_geré',
        'complexite_technique',
        'multi_site_international',
        'scalabilite',
      ])
    );
  });

  it('ignore les tentatives d’injection dans les réponses', () => {
    const answers = {
      capacite_budgetaire: 5,
      volonte_d_hebergement_geré: 3,
      complexite_technique: 8,
      multi_site_international: 2,
      scalabilite: 1,
      __proto__: { evil: 999 },
    };
    const { axisScores } = computeScoringAndReco(answers as any);
    const cleaned = cleanAxisScores(axisScores);
    expect(cleaned).not.toHaveProperty('__proto__');
    // Les axes attendus sont présents et valides
    expect(typeof cleaned.capacite_budgetaire).toBe('number');
  });
});

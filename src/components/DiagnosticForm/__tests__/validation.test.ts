import { describe, it, expect } from 'vitest';
import { validateContact } from '../DiagnosticForm';

describe('DiagnosticForm validation', () => {
  it('valide un contact correct', () => {
    const contact = {
      firstName: 'Marie',
      lastName: 'Dupont',
      email: 'marie@exemple.com',
      company: 'Exemple SAS',
      website: 'https://exemple.com',
    };
    expect(validateContact(contact)).toEqual({});
  });

  it('détecte les champs manquants ou invalides', () => {
    const contact = {
      firstName: '',
      lastName: '',
      email: 'foo',
      company: '',
      website: 'exemple',
    };
    expect(validateContact(contact)).toEqual({
      firstName: 'Prénom requis',
      lastName: 'Nom requis',
      email: 'Email invalide',
      company: 'Société requise',
      website: 'URL invalide (commencez par http)',
    });
  });

  it('détecte un email invalide', () => {
    const contact = {
      firstName: 'Marie',
      lastName: 'Dupont',
      email: 'marie@exemple',
      company: 'Exemple SAS',
      website: 'https://exemple.com',
    };
    expect(validateContact(contact)).toHaveProperty('email');
  });

  it('détecte une url invalide', () => {
    const contact = {
      firstName: 'Marie',
      lastName: 'Dupont',
      email: 'marie@exemple.com',
      company: 'Exemple SAS',
      website: 'exemple',
    };
    expect(validateContact(contact)).toHaveProperty('website');
  });
});

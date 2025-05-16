export interface ValidationRule {
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  custom?: (value: string) => boolean | Promise<boolean>;
  message?: string;
}

export interface ValidationSchema {
  [key: string]: ValidationRule | ValidationRule[];
}

export type ValidationErrors = {
  [key: string]: string;
};

export const validationMessages = {
  required: 'Ce champ est requis',
  email: 'Veuillez entrer une adresse e-mail valide',
  minLength: (min: number) => `Ce champ doit contenir au moins ${min} caractères`,
  maxLength: (max: number) => `Ce champ ne doit pas contenir plus de ${max} caractères`,
  pattern: (field: string) => `Format invalide pour le ${field}`,
  custom: (message: string) => message,
};

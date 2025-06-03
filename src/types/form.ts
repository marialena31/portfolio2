import { ValidationSchema, ValidationRule } from './validation';

export interface FormField {
  name: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox' | 'file';
  value: string | boolean | File | null;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  validation?: ValidationRule;
}

export interface FormChangeEvent {
  target: {
    name: string;
    value: string | boolean;
    type: string;
    checked?: boolean;
  };
}

export interface FormSubmitEvent {
  preventDefault: () => void;
}

export type FormState<T extends Record<string, any>> = {
  [K in keyof T]: T[K];
} & {
  file?: File | null;
};

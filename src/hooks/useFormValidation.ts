import { useState, useCallback } from 'react';
import { ValidationSchema, ValidationErrors, validationMessages } from '../types/validation';

// Helper functions pour vérifier les types
const isString = (value: any): value is string => typeof value === 'string';
const isBoolean = (value: any): value is boolean => typeof value === 'boolean';
const isFile = (value: any): value is File => value instanceof File;

export const useFormValidation = <T extends Record<string, any>>(
  schema: ValidationSchema,
  initialData: T
) => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateField = useCallback(
    (fieldName: string, value: any) => {
      const rules = schema[fieldName];
      if (!rules) return '';

      const ruleArray = Array.isArray(rules) ? rules : [rules];
      let error = '';

      for (const rule of ruleArray) {
        if (rule.required && (!value || (isString(value) && value.trim() === ''))) {
          error = validationMessages.required;
          break;
        }

        if (rule.pattern && isString(value) && !rule.pattern.test(value)) {
          error = rule.message || validationMessages.pattern(fieldName);
          break;
        }

        if (rule.minLength && isString(value) && value.length < rule.minLength) {
          error = validationMessages.minLength(rule.minLength);
          break;
        }

        if (rule.maxLength && isString(value) && value.length > rule.maxLength) {
          error = validationMessages.maxLength(rule.maxLength);
          break;
        }

        if (rule.custom) {
          const isValid = rule.custom(value);
          if (typeof isValid === 'boolean' && !isValid) {
            error = rule.message || validationMessages.custom('');
            break;
          }
        }
      }

      return error;
    },
    [schema]
  );

  const validate = useCallback(
    (data: T) => {
      const newErrors: ValidationErrors = {};
      Object.entries(data).forEach(([key, value]) => {
        const error = validateField(key, value);
        if (error) newErrors[key] = error;
      });
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [validateField]
  );

  const resetErrors = useCallback(() => {
    setErrors({});
  }, []);

  return { errors, validate, validateField, resetErrors };
};

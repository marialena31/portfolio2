import React, { useState } from 'react';
import axios from 'axios';

import { useFormValidation } from '../hooks/useFormValidation';
import { ValidationSchema, ValidationErrors } from '../types/validation';
import { EnvConfig, validateEnv } from '../types/env';
import { FormData, FormProps } from '../types/form';

const envConfig: EnvConfig = {
  GATSBY_API_URL: process.env.GATSBY_API_URL || 'http://localhost:3000',
  GATSBY_TO_EMAIL_ADDRESS: process.env.GATSBY_TO_EMAIL_ADDRESS || 'contact@example.com',
};

if (!validateEnv(envConfig)) {
  console.error("⚠️ Configuration d'environnement invalide");
  console.error('Veuillez vérifier votre fichier .env');
  throw new Error("Configuration d'environnement invalide");
}

const { GATSBY_API_URL, GATSBY_TO_EMAIL_ADDRESS } = envConfig;

interface ProjectFormData {
  name: string;
  company: string;
  email: string;
  typeBesoin: string;
  perimetre: string;
  contexte: string;
  delais: string;
  gdprConsent: boolean;
  file: File | null;
}

const validationSchema: ValidationSchema = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100,
    message: 'Le nom doit contenir entre 2 et 100 caractères',
  },
  email: {
    required: true,
    pattern: /^\S+@\S+\.\S+$/,
    message: 'Veuillez entrer une adresse e-mail valide',
  },
  typeBesoin: {
    required: true,
    message: 'Veuillez sélectionner un type de besoin',
  },
  perimetre: {
    required: true,
    message: 'Veuillez sélectionner un périmètre',
  },
  contexte: {
    required: true,
    message: 'Veuillez sélectionner un contexte',
  },
  delais: {
    required: true,
    minLength: 2,
    maxLength: 300,
    message: 'Merci de préciser vos délais ou contraintes de contact',
  },
  gdprConsent: {
    required: true,
    message: 'Vous devez accepter les conditions de confidentialité',
  },
};

const initialForm: FormData<ProjectFormData> = {
  name: '',
  company: '',
  email: '',
  typeBesoin: '',
  perimetre: '',
  contexte: '',
  delais: '',
  gdprConsent: false,
  file: null,
};

const ProjectForm: React.FC<FormProps<ProjectFormData>> = () => {
  const [form, setForm] = useState<ProjectFormData>(initialForm);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const { validate, validateField, resetErrors } = useFormValidation<ProjectFormData>(
    validationSchema,
    initialForm
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetErrors();

    try {
      // Récupérer le CSRF token depuis le serveur
      const csrfResponse = await axios.get(`${GATSBY_API_URL}/api/csrf-token`, {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const csrfToken = csrfResponse.data?.token;
      if (!csrfToken) {
        throw new Error('Impossible de récupérer le token CSRF');
      }

      // Validation du formulaire
      if (!validate(form)) {
        const validationErrors: ValidationErrors = {};
        Object.entries(form).forEach(([key, value]) => {
          const error = validateField(key, value);
          if (error) {
            validationErrors[key] = error;
          }
        });
        setErrors(validationErrors);
        return;
      }

      // Préparer les données pour l'envoi
      const data = {
        to: GATSBY_TO_EMAIL_ADDRESS,
        subject: `Nouveau brief projet - ${form.typeBesoin}`,
        text:
          `Nouveau brief projet reçu :\n\n` +
          `Nom : ${form.name}\n` +
          (form.company ? `Entreprise : ${form.company}\n` : '') +
          `Email : ${form.email}\n` +
          `\nType de besoin : ${form.typeBesoin}\n` +
          `Périmètre : ${form.perimetre}\n` +
          `Contexte : ${form.contexte}\n` +
          `Délais souhaités / contact :\n${form.delais}\n`,
        fromName: form.name,
        fromEmail: form.email,
        company: form.company || '',
      };

      // Configuration de la requête
      const config = {
        headers: {
          'x-csrf-token': csrfToken,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      // Affichage des logs pour le débogage
      console.log('Envoi du formulaire:', {
        data,
        config,
      });

      // Envoi des données
      const response = await axios.post(`${GATSBY_API_URL}/api/mail/send`, data, config);
      console.log('Réponse du serveur:', response.data);

      // Réinitialiser le formulaire et afficher le succès
      setForm(initialForm);
      setSuccess(true);

      // Réinitialiser après 5 secondes
      setTimeout(() => {
        setSuccess(false);
        setErrors({});
      }, 5000);
    } catch (err: any) {
      console.error("Erreur lors de l'envoi:", err);
      console.error('Réponse du serveur:', err.response?.data);

      // Gestion des erreurs
      const errorMessage =
        err.response?.data?.message || "Une erreur est survenue lors de l'envoi du formulaire";
      setErrors(prev => ({
        ...prev,
        general: errorMessage,
      }));
    } finally {
      // Rien à faire ici
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target as HTMLInputElement;
    let value: any;
    if (type === 'checkbox') {
      value = (e.target as HTMLInputElement).checked;
    } else if (type === 'file') {
      value = (e.target as HTMLInputElement).files
        ? (e.target as HTMLInputElement).files![0]
        : null;
    } else {
      value = e.target.value;
    }

    setForm({ ...form, [name]: value });

    // Valider le champ après chaque modification
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error,
      }));
      setSuccess(false);
    } else {
      // Effacer l'erreur si le champ est valide
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Vérifier si le formulaire est valide après chaque changement
    const formIsValid = validate({ ...form, [name]: value });
    if (formIsValid) {
      setSuccess(false);
    }
  };

  return (
    <div className="px-4 md:px-0 flex justify-center bg-gradient-to-b from-primary-dark/95 to-primary/85">
      <div className="bg-white max-w-[64rem] w-full mx-auto px-[10rem] py-[5rem] shadow rounded-lg md:my-16 my-8">
        <h1 className="text-primary text-3xl font-bold text-center mb-4">Déposez votre projet</h1>
        <p className="text-gray-500 text-center mb-8 text-base leading-relaxed">
          Vous avez un besoin clair ou un projet à formuler ?<br />
          Gagnez du temps.
          <br />
          Répondez à 4 questions clés pour recevoir une première proposition ou un audit gratuit.
        </p>
        {Object.values(errors).length > 0 && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
            {Object.entries(errors).map(([field, error]) => (
              <p key={field}>
                <strong>
                  {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:{' '}
                </strong>
                {error}
              </p>
            ))}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 mb-5">
            <label htmlFor="email" className="font-medium text-primary text-sm">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          {/* 1. Type de besoin */}
          <div className="flex flex-col gap-5 mb-5">
            <label htmlFor="typeBesoin" className="font-medium text-primary text-sm">
              Type de besoin <span className="text-red-500">*</span>
            </label>
            <select
              id="typeBesoin"
              name="typeBesoin"
              value={form.typeBesoin}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Sélectionnez...</option>
              <option value="Migration">Migration</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Sécurité">Sécurité</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          {/* 2. Périmètre */}
          <div className="flex flex-col gap-5 mb-5">
            <label htmlFor="perimetre" className="font-medium text-primary text-sm">
              Périmètre <span className="text-red-500">*</span>
            </label>
            <select
              id="perimetre"
              name="perimetre"
              value={form.perimetre}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Sélectionnez...</option>
              <option value="site entier">Site entier</option>
              <option value="module">Module</option>
              <option value="infra">Infra</option>
            </select>
          </div>
          {/* 3. Contexte */}
          <div className="flex flex-col gap-5 mb-5">
            <label htmlFor="contexte" className="font-medium text-primary text-sm">
              Contexte <span className="text-red-500">*</span>
            </label>
            <select
              id="contexte"
              name="contexte"
              value={form.contexte}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Sélectionnez...</option>
              <option value="projet existant">Projet existant</option>
              <option value="nouveau projet">Nouveau projet</option>
              <option value="reprise">Reprise</option>
            </select>
          </div>
          {/* 4. Délais souhaités / contact */}
          <div className="flex flex-col gap-5 mb-5">
            <label htmlFor="delais" className="font-medium text-primary text-sm">
              Délais souhaités / contact <span className="text-red-500">*</span>
            </label>
            <textarea
              id="delais"
              name="delais"
              value={form.delais}
              onChange={handleChange}
              required
              rows={2}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* Pièce jointe */}
          <div className="flex flex-col gap-5 mb-5">
            <label htmlFor="file" className="font-medium text-primary text-sm">
              Pièce jointe (facultative)
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleChange}
              className="block w-full text-sm text-primary border border-primary/20 rounded-md cursor-pointer bg-surface-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
            />
            <small className="text-xs text-gray-500">
              Formats acceptés : PDF, DOC, XLS, JPG, PNG (max 5MB)
            </small>
          </div>
          {/* Consentement RGPD */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="gdprConsent"
              checked={form.gdprConsent}
              onChange={handleChange}
              className="accent-primary w-4 h-4"
              required
            />
            <label htmlFor="gdprConsent" className="text-gray-700 text-sm">
              J&apos;accepte que mes données soient utilisées pour me recontacter dans le cadre de
              ma demande (aucune revente, aucun spam). <span className="text-red-500">*</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-md bg-primary text-white font-semibold text-lg shadow-md hover:bg-primary-dark transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            disabled={false}
          >
            Envoyer ma demande
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;

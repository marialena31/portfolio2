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
  need: string;
  details: string;
  urgency: string;
  hasTeam: string;
  teamDetails: string;
  budget: string;
  additionalInfo: string;
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
  need: {
    required: true,
    minLength: 3,
    maxLength: 100,
    message: 'Le besoin doit contenir entre 3 et 100 caractères',
  },
  details: {
    required: true,
    minLength: 50,
    maxLength: 5000,
    message: 'Les détails doivent contenir entre 50 et 5000 caractères',
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
  need: '',
  details: '',
  urgency: '',
  hasTeam: '',
  teamDetails: '',
  budget: '',
  additionalInfo: '',
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
        subject: `Nouveau brief projet - ${form.need}`,
        text:
          `Nouveau brief projet reçu :\n\n` +
          `Nom : ${form.name}\n` +
          (form.company ? `Entreprise : ${form.company}\n` : '') +
          `Email : ${form.email}\n` +
          `\nBesoin : ${form.need}\n` +
          `\nDétails du projet :\n${form.details}\n` +
          `\nUrgence : ${form.urgency || 'Non spécifié'}\n` +
          `Équipe technique : ${form.hasTeam || 'Non spécifié'}` +
          (form.teamDetails ? ` (${form.teamDetails})` : '') +
          (form.budget ? `\nBudget indicatif : ${form.budget}` : '') +
          (form.additionalInfo ? `\n\nInformations supplémentaires :\n${form.additionalInfo}` : ''),
        fromName: form.name,
        fromEmail: form.email,
        company: form.company || '',
        urgency: form.urgency || '',
        hasTeam: form.hasTeam || '',
        teamDetails: form.teamDetails || '',
        budget: form.budget || '',
        additionalInfo: form.additionalInfo || '',
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
    const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;

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
      <div className="bg-white max-w-4xl mx-auto p-8 shadow rounded-lg my-12">
        <h1 className="text-primary text-3xl font-bold text-center mb-4">Déposez votre projet</h1>
        <p className="text-gray-500 text-center mb-8 text-base leading-relaxed">
          Expliquez-moi où vous en êtes, ce que vous cherchez, et je vous recontacte sous 48h.
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
        {success && (
          <div className="text-green-600 font-medium text-sm mt-2 mb-2 text-center">
            Votre demande a bien été envoyée !
          </div>
        )}
        {!success && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            autoComplete="off"
            noValidate
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-medium text-primary text-sm">
                Prénom / nom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-primary/20 rounded-md text-base bg-surface-primary text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="font-medium text-primary text-sm">
                Entreprise / site (facultatif)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-3 py-2 border border-primary/20 rounded-md text-base bg-surface-primary text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400"
                value={form.company}
                onChange={handleChange}
                placeholder="Nom de votre entreprise"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-primary text-sm">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-primary/20 rounded-md text-base bg-surface-primary text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Votre adresse email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="need" className="font-medium text-primary text-sm">
                Besoin en une phrase <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="need"
                name="need"
                className="w-full px-3 py-2 border border-primary/20 rounded-md text-base bg-surface-primary text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400"
                value={form.need}
                onChange={handleChange}
                required
                placeholder="Ex: Site Magento à reprendre, synchroniser stock avec ERP..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="details" className="font-medium text-primary text-sm">
                Détail de votre projet ou situation actuelle <span className="text-red-500">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                className="w-full px-3 py-3 border border-primary/20 rounded-md text-base bg-surface-primary text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[120px] resize-vertical placeholder:text-gray-400"
                value={form.details}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Donnez autant ou aussi peu d'info que vous voulez pour commencer."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="urgency" className="font-medium text-primary text-sm">
                Urgence du projet
              </label>
              <select
                id="urgency"
                name="urgency"
                className="w-full px-3 py-2 border border-primary/20 rounded-md text-base bg-surface-primary text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400"
                value={form.urgency}
                onChange={handleChange}
              >
                <option value="">Sélectionnez une option</option>
                <option value="Pas urgent (calendrier libre)">Pas urgent (calendrier libre)</option>
                <option value="Besoin de commencer ce mois-ci">
                  Besoin de commencer ce mois-ci
                </option>
                <option value="Situation critique / urgence">Situation critique / urgence</option>
                <option value="Je ne sais pas encore">Je ne sais pas encore</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-primary text-sm">
                Avez-vous déjà un prestataire ou une équipe technique ?
              </label>
              <div className="flex flex-col gap-2 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasTeam"
                    value="Oui (en interne ou externe)"
                    checked={form.hasTeam === 'Oui (en interne ou externe)'}
                    onChange={handleChange}
                    className="accent-primary"
                  />
                  <span>Oui (en interne ou externe)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasTeam"
                    value="Non"
                    checked={form.hasTeam === 'Non'}
                    onChange={handleChange}
                    className="accent-primary"
                  />
                  <span>Non</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasTeam"
                    value="En cours de changement"
                    checked={form.hasTeam === 'En cours de changement'}
                    onChange={handleChange}
                    className="accent-primary"
                  />
                  <span>En cours de changement</span>
                </label>
              </div>
              {form.hasTeam && (
                <div className="flex flex-col gap-2 mt-2">
                  <label htmlFor="teamDetails" className="font-medium text-primary text-sm">
                    Précisions (facultatif)
                  </label>
                  <input
                    type="text"
                    id="teamDetails"
                    name="teamDetails"
                    className="w-full px-3 py-2 border border-primary/20 rounded-md text-base bg-surface-primary text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400"
                    value={form.teamDetails}
                    onChange={handleChange}
                    placeholder="Qui est impliqué actuellement ?"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="font-medium text-primary text-sm">
                Budget indicatif (facultatif)
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full px-3 py-2 border border-primary/20 rounded-md text-base bg-surface-primary text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400"
                value={form.budget}
                onChange={handleChange}
              >
                <option value="">Sélectionnez une option</option>
                <option value="< 1 000 €">&lt; 1 000 €</option>
                <option value="1 000 – 3 000 €">1 000 – 3 000 €</option>
                <option value="3 000 – 6 000 €">3 000 – 6 000 €</option>
                <option value="6 000 – 10 000 €">6 000 – 10 000 €</option>
                <option value="> 10 000 €">&gt; 10 000 €</option>
                <option value="Je ne sais pas">Je ne sais pas</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
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
            <div className="flex flex-col gap-2">
              <label htmlFor="additionalInfo" className="font-medium text-primary text-sm">
                Autre chose à me dire ? (facultatif)
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                className="w-full px-3 py-3 border border-primary/20 rounded-md text-base bg-surface-primary text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[80px] resize-vertical placeholder:text-gray-400"
                value={form.additionalInfo}
                onChange={handleChange}
                rows={4}
                placeholder="Votre message complémentaire"
              />
            </div>
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
        )}
      </div>
    </div>
  );
};

export default ProjectForm;

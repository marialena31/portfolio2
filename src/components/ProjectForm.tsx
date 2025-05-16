import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as styles from './project-form.module.scss';
import { useFormValidation } from '../hooks/useFormValidation';
import { ValidationSchema, ValidationErrors } from '../types/validation';

const API_URL = process.env.GATSBY_API_URL || 'http://localhost:3000';
const TO_EMAIL = process.env.GATSBY_TO_EMAIL_ADDRESS || 'contact@example.com'; // Utiliser une valeur par défaut pour le développement

if (!TO_EMAIL || !TO_EMAIL.includes('@')) {
  console.error("⚠️ Attention: L'adresse email de destination n'est pas correctement configurée");
  console.error('Veuillez définir GATSBY_TO_EMAIL_ADDRESS dans votre fichier .env');
  console.error("Utilisation de l'adresse par défaut pour le développement:", TO_EMAIL);
}

interface FormData {
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

const initialForm: FormData = {
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

const ProjectForm: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const { validate, validateField, resetErrors } = useFormValidation<FormData>(
    validationSchema,
    initialForm
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetErrors();

    try {
      // Récupérer le CSRF token depuis le serveur
      const csrfResponse = await axios.get(`${API_URL}/api/csrf-token`, {
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
        to: TO_EMAIL || '',
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
      const response = await axios.post(`${API_URL}/api/mail/send`, data, config);
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
    <section className={styles.formSection}>
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}>Déposez votre projet</h1>
        <p className={styles.formIntro}>
          Expliquez-moi où vous en êtes, ce que vous cherchez, et je vous recontacte sous 48h.
        </p>

        {Object.values(errors).length > 0 && (
          <div className={styles.error}>
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
          <div className={styles.successMessage}>
            <p>Merci ! Votre demande a été envoyée avec succès.</p>
            <p>Je vous recontacte dans les plus brefs délais.</p>
          </div>
        )}

        {!success && (
          <form onSubmit={handleSubmit} className={styles.form} autoComplete="off" noValidate>
            {/* Nom et Prénom */}
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Votre prénom / nom <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
                required
              />
              {errors.name && (
                <p className={styles.errorText}>
                  <strong>Nom: </strong>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Entreprise */}
            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>
                Nom de votre entreprise / site (facultatif)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={form.company}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Votre e-mail <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            {/* Besoin */}
            <div className={styles.formGroup}>
              <label htmlFor="need" className={styles.label}>
                Votre besoin en une phrase <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="need"
                name="need"
                value={form.need}
                onChange={handleChange}
                className={styles.input}
                placeholder="Ex: Site Magento à reprendre, Synchroniser stock avec ERP, etc."
                required
              />
            </div>

            {/* Détails du projet */}
            <div className={styles.formGroup}>
              <label htmlFor="details" className={styles.label}>
                Détail de votre projet ou situation actuelle{' '}
                <span className={styles.required}>*</span>
              </label>
              <textarea
                id="details"
                name="details"
                value={form.details}
                onChange={handleChange}
                className={styles.textarea}
                rows={6}
                placeholder="Donnez autant ou aussi peu d'info que vous voulez pour commencer."
                required
              />
            </div>

            {/* Urgence */}
            <div className={styles.formGroup}>
              <label htmlFor="urgency" className={styles.label}>
                Urgence du projet
              </label>
              <select
                id="urgency"
                name="urgency"
                value={form.urgency}
                onChange={handleChange}
                className={styles.select}
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

            {/* Équipe technique */}
            <div className={styles.formGroup}>
              <p className={styles.label}>
                Avez-vous déjà un prestataire ou une équipe technique ?
              </p>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="hasTeam"
                    value="Oui (en interne ou externe)"
                    checked={form.hasTeam === 'Oui (en interne ou externe)'}
                    onChange={handleChange}
                    className={styles.radioInput}
                  />
                  <span>Oui (en interne ou externe)</span>
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="hasTeam"
                    value="Non"
                    checked={form.hasTeam === 'Non'}
                    onChange={handleChange}
                    className={styles.radioInput}
                  />
                  <span>Non</span>
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="hasTeam"
                    value="En cours de changement"
                    checked={form.hasTeam === 'En cours de changement'}
                    onChange={handleChange}
                    className={styles.radioInput}
                  />
                  <span>En cours de changement</span>
                </label>
              </div>

              {form.hasTeam && (
                <div className={styles.formGroup} style={{ marginTop: '1rem' }}>
                  <label htmlFor="teamDetails" className={styles.label}>
                    Précisions (facultatif)
                  </label>
                  <input
                    type="text"
                    id="teamDetails"
                    name="teamDetails"
                    value={form.teamDetails}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Qui est impliqué actuellement ?"
                  />
                </div>
              )}
            </div>

            {/* Budget */}
            <div className={styles.formGroup}>
              <label htmlFor="budget" className={styles.label}>
                Budget indicatif (facultatif)
              </label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={styles.select}
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

            {/* Fichier */}
            <div className={styles.formGroup}>
              <label htmlFor="file" className={styles.label}>
                Pièce jointe (facultative)
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleChange}
                className={styles.fileInput}
                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
              />
              <small className={styles.helpText}>
                Formats acceptés : PDF, DOC, XLS, JPG, PNG (max 5MB)
              </small>
            </div>

            {/* Informations supplémentaires */}
            <div className={styles.formGroup}>
              <label htmlFor="additionalInfo" className={styles.label}>
                Autre chose à me dire ? (facultatif)
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={form.additionalInfo}
                onChange={handleChange}
                className={styles.textarea}
                rows={4}
              />
            </div>

            {/* RGPD */}
            <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="gdprConsent"
                  checked={form.gdprConsent}
                  onChange={handleChange}
                  className={styles.checkboxInput}
                  required
                />
                <span className={styles.checkboxCustom}></span>
                <span className={styles.checkboxText}>
                  J&apos;accepte que mes données soient utilisées pour me recontacter dans le cadre
                  de ma demande (aucune revente, aucun spam).{' '}
                  <span className={styles.required}>*</span>
                </span>
              </label>
            </div>

            {/* Bouton de soumission */}
            <div className={styles.formGroup}>
              <button type="submit" className={styles.submitButton}>
                Envoyer ma demande
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ProjectForm;

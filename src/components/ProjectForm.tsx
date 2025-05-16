import React, { useState } from 'react';
import axios from 'axios';
import * as styles from './project-form.module.scss';

const API_URL = process.env.GATSBY_API_URL || 'http://localhost:3000';
const TO_EMAIL = process.env.GATSBY_TO_EMAIL_ADDRESS;

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm({ ...form, [name]: checked });
    } else if (type === 'file') {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setForm({ ...form, [name]: file });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validate = (): boolean => {
    if (!form.name.trim() || !form.email.trim() || !form.need.trim() || !form.details.trim()) {
      setError('Tous les champs obligatoires doivent être remplis.');
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Adresse e-mail invalide.');
      return false;
    }

    if (!form.gdprConsent) {
      setError('Veuvez accepter la politique de confidentialité.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!validate()) return;

    setLoading(true);

    try {
      // Récupération du CSRF token avec les credentials
      const csrfResponse = await axios.get(`${API_URL}/api/csrf-token`, {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const csrfToken = csrfResponse.data?.token ?? '';
      if (!csrfToken) {
        throw new Error('Impossible de récupérer le token CSRF');
      }

      // Création du formulaire pour le fichier
      const formData = new FormData();
      formData.append('to', TO_EMAIL || '');
      formData.append('subject', `Nouveau brief projet - ${form.need}`);

      // Configuration des en-têtes avec le token CSRF
      const config = {
        withCredentials: true,
        headers: {
          'x-csrf-token': csrfToken,
          Accept: 'application/json',
        },
      };

      // Construction du message texte
      let messageText = `Nouveau brief projet reçu :\n\n`;
      messageText += `Nom : ${form.name}\n`;
      if (form.company) messageText += `Entreprise : ${form.company}\n`;
      messageText += `Email : ${form.email}\n`;
      messageText += `\nBesoin : ${form.need}\n`;
      messageText += `\nDétails du projet :\n${form.details}\n`;
      messageText += `\nUrgence : ${form.urgency || 'Non spécifié'}\n`;
      messageText += `Équipe technique : ${form.hasTeam || 'Non spécifié'}`;
      if (form.teamDetails) messageText += ` (${form.teamDetails})`;
      if (form.budget) messageText += `\nBudget indicatif : ${form.budget}`;
      if (form.additionalInfo)
        messageText += `\n\nInformations supplémentaires :\n${form.additionalInfo}`;

      formData.append('text', messageText);

      // Ajout de la pièce jointe si elle existe
      if (form.file) {
        formData.append('file', form.file);
      }

      // Envoi des données avec la configuration
      await axios.post(`${API_URL}/api/mail/send`, formData, config);

      setSuccess(true);
      setForm(initialForm);

      // Réinitialiser le champ de fichier
      const fileInput = document.getElementById('file') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (err: unknown) {
      const error = err as { response?: { data?: { error?: string; message?: string } } };
      setError(
        error.response?.data?.error ||
          error.response?.data?.message ||
          "Erreur lors de l'envoi du projet. Veuillez réessayer plus tard."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}>Déposez votre projet</h1>
        <p className={styles.formIntro}>
          Expliquez-moi où vous en êtes, ce que vous cherchez, et je vous recontacte sous 48h.
        </p>

        {error && <div className={styles.error}>{error}</div>}
        {success && (
          <div className={styles.success}>
            Votre projet a été envoyé avec succès ! Je vous recontacterai sous 24h maximum.
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
                className={styles.input}
                required
              />
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
              <button type="submit" className={styles.submitButton} disabled={loading}>
                {loading ? 'Envoi en cours&hellip;' : 'Envoyer ma demande'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ProjectForm;

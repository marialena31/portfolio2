import React, { useState } from 'react';
import axios from 'axios';
import * as styles from './contact-form.module.scss';
// Import non utilisé, supprimé

const API_URL = process.env.GATSBY_API_URL || 'http://localhost:3000';
const TO_EMAIL = process.env.GATSBY_TO_EMAIL_ADDRESS;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError('Tous les champs sont requis.');
      return false;
    }
    // Simple email validation
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Adresse e-mail invalide.');
      return false;
    }
    if (form.subject.length < 3 || form.subject.length > 200) {
      setError('Le sujet doit faire entre 3 et 200 caractères.');
      return false;
    }
    if (form.message.length < 10 || form.message.length > 5000) {
      setError('Le message doit faire entre 10 et 5000 caractères.');
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

      // Configuration des en-têtes avec le token CSRF
      const config = {
        withCredentials: true,
        headers: {
          'x-csrf-token': csrfToken,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      // Envoi du mail
      await axios.post(
        `${API_URL}/api/mail/send`,
        {
          to: TO_EMAIL,
          subject: `Contact Form: ${form.subject}`,
          text: `Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
        },
        config
      );
      setSuccess(true);
      setForm(initialForm);
    } catch (err: unknown) {
      const error = err as { response?: { data?: { error?: string; message?: string } } };
      setError(
        error.response?.data?.error ||
          error.response?.data?.message ||
          "Erreur lors de l'envoi du message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}>Contact</h1>
        <p className={styles.formIntro}>Contactez-moi pour plus d&apos;informations.</p>
        <form onSubmit={handleSubmit} className={styles.form} autoComplete="off" noValidate>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Votre nom"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Votre adresse email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={styles.input}
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Sujet du message"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Votre message"
            />
          </div>
          {error && <div className={styles.error}>{error}</div>}
          {success && <div className={styles.success}>Votre message a bien été envoyé.</div>}
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Envoi…' : 'Envoyer'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

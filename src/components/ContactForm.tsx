import React, { useState } from 'react';
import axios from 'axios';

// Import non utilisé, supprimé

const API_URL = process.env.GATSBY_API_URL || 'http://localhost:3000';
const TO_EMAIL = process.env.GATSBY_TO_EMAIL_ADDRESS;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormData & { gdprConsent: boolean } = {
  name: '',
  email: '',
  subject: '',
  message: '',
  gdprConsent: false,
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGdprConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, gdprConsent: e.target.checked });
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError('Tous les champs sont requis.');
      return false;
    }
    if (!form.gdprConsent) {
      setError('Vous devez accepter la politique de confidentialité.');
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
    <div className="bg-white max-w-[64rem] mx-auto px-[10rem] py-[5rem] shadow rounded-lg">
      <h1 className="text-primary text-3xl font-bold text-center mb-4">Contact</h1>
      <p className="text-gray-500 text-center mb-8 text-base leading-relaxed">
        Contactez-moi pour plus d&apos;informations.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6" autoComplete="off" noValidate>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium text-primary text-sm">
            Nom <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-primary/20 rounded-md text-base bg-surface-primary text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400"
            value={form.name}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium text-primary text-sm">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-primary/20 rounded-md text-base bg-surface-primary text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400"
            value={form.email}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="font-medium text-primary text-sm">
            Sujet <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-3 py-2 border border-primary/20 rounded-md text-base bg-surface-primary text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400"
            value={form.subject}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-medium text-primary text-sm">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-3 border border-primary/20 rounded-md text-base bg-surface-primary text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[120px] resize-vertical placeholder:text-gray-400"
            value={form.message}
            onChange={handleChange}
            autoComplete="off"
            rows={6}
          />
        </div>
        {error && <div className="text-red-600 font-medium text-sm mt-2 mb-2">{error}</div>}
        {success && (
          <div className="text-green-600 font-medium text-sm mt-2 mb-2">
            Votre message a bien été envoyé.
          </div>
        )}
        <div className="flex items-center gap-2 mt-2 mb-2">
          <input
            type="checkbox"
            id="gdprConsent"
            name="gdprConsent"
            required
            checked={form.gdprConsent}
            onChange={handleGdprConsentChange}
            className="accent-primary w-5 h-5"
            autoComplete="off"
          />
          <label htmlFor="gdprConsent" className="text-sm text-gray-700 select-none">
            J’accepte que mes données soient traitées pour me recontacter (
            <a
              href="/mentions-legales"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary hover:text-primary-dark"
            >
              politique de confidentialité
            </a>
            ) <span className="text-red-600">*</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 rounded-md bg-primary text-white font-semibold text-lg shadow-md hover:bg-primary-dark transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          disabled={loading}
        >
          {loading ? 'Envoi…' : 'Envoyer'}
        </button>
      </form>
    </div>
  );
};

// Désactive les flèches sur input[type=number] si jamais il y en a
if (typeof window !== 'undefined' && (window as any).__contactFormCssInjected !== true) {
  const style = document.createElement('style');
  style.innerHTML = `
    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type='number'] {
      -moz-appearance: textfield;
    }
  `;
  document.head.appendChild(style);
  (window as any).__contactFormCssInjected = true;
}

export default ContactForm;

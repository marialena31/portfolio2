import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { useFormValidation } from '../hooks/useFormValidation';
import { ValidationSchema, ValidationErrors } from '../types/validation';
import { EnvConfig, validateEnv } from '../types/env';
import { FormState } from '../types/form';

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

type ProjectFormState = FormState<ProjectFormData>;

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

const initialForm: ProjectFormState = {
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

const allowedExtensions = ['pdf', 'png', 'jpg', 'jpeg'];
const maxSize = 5 * 1024 * 1024; // 5 Mo
function validateFile(file: File): boolean {
  const ext = file.name.split('.').pop()?.toLowerCase();
  const allowedMimeTypes = ['application/pdf', 'image/png', 'image/jpeg'];
  console.log('DEBUG validateFile:', file.name, file.type, ext);
  if (!ext || !allowedExtensions.includes(ext)) {
    alert('Type de fichier non autorisé !');
    return false;
  }
  if (!allowedMimeTypes.includes(file.type)) {
    alert('Le type de fichier ne correspond pas au format autorisé !');
    return false;
  }
  if (file.size > maxSize) {
    alert('Fichier trop volumineux (max 5Mo) !');
    return false;
  }
  return true;
}

const ProjectForm: React.FC = () => {
  // Désactive les contrôles natifs si demandé par la prop

  const [form, setForm] = useState<ProjectFormState>(initialForm);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loadingScan, setLoadingScan] = useState(false);
  const [scanMessage, setScanMessage] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const { validate, validateField, resetErrors } = useFormValidation<ProjectFormData>(
    validationSchema,
    initialForm
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetErrors();
    setLoadingScan(true);
    setScanMessage('Scan du fichier et envoi en cours...');

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
      let response: AxiosResponse<any, any>;
      const apiKey = process.env.GATSBY_API_KEY || '';
      if (form.file) {
        const formData = new FormData();
        formData.append('from', form.email);
        formData.append('to', GATSBY_TO_EMAIL_ADDRESS);
        formData.append('subject', `Nouveau brief projet - ${form.typeBesoin}`);
        formData.append(
          'text',
          `Nouveau brief projet reçu :\n\n` +
            `Nom : ${form.name}\n` +
            (form.company ? `Entreprise : ${form.company}\n` : '') +
            `Email : ${form.email}\n` +
            `\nType de besoin : ${form.typeBesoin}\n` +
            `Périmètre : ${form.perimetre}\n` +
            `Contexte : ${form.contexte}\n` +
            `Délais souhaités / contact :\n${form.delais}\n`
        );
        formData.append('file', form.file);

        const config = {
          headers: {
            'x-csrf-token': csrfToken,
            ...(apiKey ? { 'x-api-key': apiKey } : {}),
          },
        };
        // Optionnel : log debug
        // console.log('Envoi du formulaire avec pièce jointe:', Array.from(formData.entries()));
        try {
          response = await axios.post(`${GATSBY_API_URL}/api/mail/send`, formData, config);
          // Gestion du retour du backend pour les cas scan : sain, malveillant, lent
          if (response.data && response.data.scan) {
            if (response.data.scan.status === 'malicious') {
              setErrors(prev => ({
                ...prev,
                general: `Fichier malveillant détecté ! <a href="${response.data.scan.virustotal}" target="_blank" rel="noopener noreferrer">Voir le rapport VirusTotal</a>`,
              }));
              setLoadingScan(false);
              setScanMessage(null);
              return;
            } else if (response.data.scan.status === 'pending') {
              setScanMessage('Scan en cours. Merci de patienter...');
              setLoadingScan(true);
              // Optionnel : polling pour mise à jour ?
              return;
            } else if (response.data.scan.status === 'clean') {
              setScanMessage(null);
              setLoadingScan(false);
            }
          } else {
            setScanMessage(null);
            setLoadingScan(false);
          }
        } catch (err: any) {
          setLoadingScan(false);
          setScanMessage(null);
          if (err.response && err.response.status === 429) {
            setErrors(prev => ({
              ...prev,
              general:
                'Le scan antivirus est temporairement indisponible (quota VirusTotal atteint). Réessaie plus tard ou envoie le message sans pièce jointe.',
            }));
          } else {
            setErrors(prev => ({ ...prev, general: 'Erreur lors de l’envoi du fichier.' }));
          }
          console.error('Erreur lors de l’envoi du fichier:', err);
          return;
        }
      } else {
        const data = {
          from: form.email,
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
        };
        const config = {
          headers: {
            'x-csrf-token': csrfToken,
            ...(apiKey ? { 'x-api-key': apiKey } : {}),
            'Content-Type': 'application/json',
          },
        };
        console.log('Envoi du formulaire sans pièce jointe:', data);
        response = await axios.post(`${GATSBY_API_URL}/api/mail/send`, data, config);
      }
      console.log('Réponse du serveur:', response.data);

      if (response.data?.success === false) {
        setErrors(prev => ({
          ...prev,
          general:
            response.data.error +
            (response.data.vt_analysis_url
              ? ` <a href="${response.data.vt_analysis_url}" target="_blank" rel="noopener noreferrer">Voir l’analyse VirusTotal</a>`
              : ''),
        }));
        setSuccess(false);
        setLoadingScan(false);
        setScanMessage(null);
        return;
      }

      // Réinitialiser le formulaire et afficher le succès
      setForm(initialForm);
      if (fileInputRef.current) fileInputRef.current.value = '';
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
      setLoadingScan(false);
      setScanMessage(null);
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
      <div className="bg-white max-w-[64rem] w-full mx-auto px-4 md:px-[10rem] py-[5rem] shadow rounded-lg md:my-16 my-8">
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
                  {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                </strong>{' '}
                {error}
              </p>
            ))}
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-5 mb-5">
            <label htmlFor="company" className="font-medium text-primary text-sm">
              Entreprise
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              autoComplete="off"
            />
          </div>
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
            <textarea
              id="contexte"
              name="contexte"
              value={form.contexte}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
              autoComplete="off"
            />
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
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              rows={2}
              autoComplete="off"
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
              ref={fileInputRef}
              onChange={e => {
                const file = e.target.files && e.target.files[0];
                if (file && !validateFile(file)) {
                  e.target.value = '';
                  setForm(prev => ({ ...prev, file: null }));
                  setErrors(prev => ({
                    ...prev,
                    file: 'Fichier non valide (PDF/JPG/PNG, 5Mo max)',
                  }));
                  setLoadingScan(false);
                  setScanMessage(null);
                  return;
                }
                setErrors(prev => {
                  const newErrors = { ...prev };
                  delete newErrors.file;
                  return newErrors;
                });
                handleChange(e);
                setLoadingScan(false);
                setScanMessage(null);
              }}
              className="block w-full text-sm text-primary border border-primary/20 rounded-md cursor-pointer bg-surface-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <small className="text-xs text-gray-500">
              Formats acceptés : PDF, JPG, PNG (max 5MB).
              <br />
              Vous pouvez envoyer le message sans pièce jointe si besoin.
              <br />
              Le fichier sera scanné automatiquement lors de l’envoi.
            </small>
            {errors.file && <div className="text-red-600 text-xs mt-1">{errors.file}</div>}
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
            className={`w-full bg-primary text-white py-3 px-6 rounded font-semibold text-lg transition-colors flex items-center justify-center shadow-md select-none
              ${loadingScan ? 'opacity-70 cursor-not-allowed scale-95 active:scale-95 bg-primary-dark' : 'hover:bg-primary-dark active:scale-95'}`}
            disabled={loadingScan}
            aria-busy={loadingScan}
            aria-disabled={loadingScan}
          >
            {loadingScan ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Envoi en cours...
              </>
            ) : (
              'Envoyer'
            )}
          </button>
          {/* Un seul message "Scan du fichier et envoi en cours..." sous le bouton */}
          {loadingScan && (
            <div className="text-blue-700 text-base font-medium mt-4 text-center">
              Scan du fichier et envoi en cours...
            </div>
          )}
          {success && (
            <div className="mt-6 p-4 bg-green-100 text-green-800 rounded text-center text-base font-medium shadow">
              Votre projet a bien été envoyé. Je vous recontacterai sous 48h !
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

if (typeof window !== 'undefined' && (window as any).__projectFormCssInjected !== true) {
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
  (window as any).__projectFormCssInjected = true;
}

export default ProjectForm;

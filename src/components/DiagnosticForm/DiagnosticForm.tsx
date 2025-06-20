import React from 'react';
import axios from 'axios';

/**
 * DiagnosticForm - Formulaire Diagnostic Magento 1
 * Collecte les réponses, calcule le score, collecte les coordonnées, envoie le tout par email.
 */
// Nouvelle structure du questionnaire (multi-étapes)
interface QuestionOption {
  label: string;
  value: number;
}
interface Question {
  id: string;
  title: string;
  label: string;
  axis?: string;
  weight?: number;
  required: boolean;
  options: QuestionOption[];
}
// Exemple de structure complète à adapter à tes vraies questions !
const AXES = [
  'capacite_budgetaire',
  'volonte_d_hebergement_geré',
  'complexite_technique',
  'multi_site_international',
  'scalabilite',
] as const;

export const questions: Question[] = [
  {
    id: 'chiffre_affaires',
    title: 'Chiffre d’affaires',
    label: 'Quel est votre chiffre d’affaires annuel ?',
    axis: 'capacite_budgetaire', // Budget/ressources
    weight: 1,
    required: true,
    options: [
      { label: '< 500k€', value: 1 },
      { label: '500k€ - 2M€', value: 2 },
      { label: '> 2M€', value: 3 },
    ],
  },
  {
    id: 'version_magento',
    title: 'Version Magento',
    label:
      'Quelle version Magento utilisez-vous ? (plus la version est ancienne, plus la complexité technique est élevée)',
    axis: 'complexite_technique', // Plus la version est ancienne, plus la migration est complexe
    weight: 1,
    required: true,
    options: [
      { label: '1.6 ou moins', value: 3 },
      { label: '1.7/1.8/1.9', value: 2 },
      { label: 'Magento 2', value: 1 },
    ],
  },
  {
    id: 'ecosysteme',
    title: 'Écosystème',
    label: 'Votre écosystème technique est-il complexe ? (connecteurs, ERP, PIM, etc.)',
    axis: 'complexite_technique', // Complexité technique
    weight: 1,
    required: true,
    options: [
      { label: 'Simple', value: 1 },
      { label: 'Moyen', value: 2 },
      { label: 'Complexe', value: 3 },
    ],
  },
  {
    id: 'budget',
    title: 'Budget',
    label: 'Quel est votre budget pour la migration ?',
    axis: 'capacite_budgetaire', // Budget/ressources
    weight: 1,
    required: true,
    options: [
      { label: '< 10k€', value: 1 },
      { label: '10k€ - 50k€', value: 2 },
      { label: '> 50k€', value: 3 },
    ],
  },
  {
    id: 'multi_site',
    title: 'Multi-site',
    label: 'Gérez-vous plusieurs sites ou boutiques ?',
    axis: 'multi_site_international',
    weight: 1,
    required: true,
    options: [
      { label: 'Non', value: 1 },
      { label: 'Oui, quelques-uns', value: 2 },
      { label: 'Oui, beaucoup', value: 3 },
    ],
  },
  {
    id: 'scalabilite',
    title: 'Scalabilité',
    label: 'Votre site doit-il gérer de forts pics de trafic ?',
    axis: 'scalabilite',
    weight: 1,
    required: true,
    options: [
      { label: 'Non', value: 1 },
      { label: 'Parfois', value: 2 },
      { label: 'Souvent', value: 3 },
    ],
  },
  {
    id: 'hebergement',
    title: 'Hébergement',
    label: 'Souhaitez-vous un hébergement géré (infogéré) ?',
    axis: 'volonte_d_hebergement_geré',
    weight: 1,
    required: true,
    options: [
      { label: 'Non, tout gérer moi-même', value: 1 },
      { label: 'Je préfère un hébergement géré', value: 3 },
      { label: 'Peu importe', value: 2 },
    ],
  },
];

// Fonction utilitaire exportée pour les tests
export const cleanAxisScores = (scores: Record<string, number>) =>
  Object.fromEntries(
    Object.entries(scores).filter(
      ([k, v]) => typeof v === 'number' && !isNaN(v) && v !== null && v !== undefined
    )
  );

// Fonction exportée pour les tests (doit être hors composant)
export const computeScoringAndReco = (answers: {
  [questionId: string]: number;
}): { axisScores: Record<string, number>; recommendation: string } => {
  // Harmonise la liste des axes attendus (adapter si besoin)
  const AXES = [
    'capacite_budgetaire',
    'volonte_d_hebergement_geré',
    'complexite_technique',
    'multi_site_international',
    'scalabilite',
  ];
  const scores: Record<string, number> = {};
  AXES.forEach(axis => {
    scores[axis] = 0;
  });
  questions.forEach(q => {
    if (q.axis && answers[q.id] !== undefined) {
      scores[q.axis] += (answers[q.id] || 0) * (q.weight || 1);
    }
  });
  // Exemple de logique de reco simple à adapter
  let reco = '';
  if (scores.capacite_budgetaire >= 8 && scores.complexite_technique >= 10) {
    reco = 'Magento 2 recommandé';
  } else if (scores.capacite_budgetaire <= 3) {
    if (scores.volonte_d_hebergement_geré >= 3) {
      reco = 'Shopify recommandé';
    } else if (scores.complexite_technique <= 3) {
      reco = 'WooCommerce recommandé';
    } else {
      reco = 'WooCommerce ou Shopify recommandé';
    }
  } else if (scores.complexite_technique >= 8) {
    reco = 'Sylius ou solution headless recommandé';
  } else {
    reco = 'PrestaShop ou WooCommerce recommandé';
  }
  return { axisScores: scores, recommendation: reco };
};

// Validation contact exportée pour les tests
export function validateContact(contact: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website: string;
}): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!contact.firstName || contact.firstName.trim().length < 2) errors.firstName = 'Prénom requis';
  if (!contact.lastName || contact.lastName.trim().length < 2) errors.lastName = 'Nom requis';
  if (!/^\S+@\S+\.\S+$/.test(contact.email)) errors.email = 'Email invalide';
  if (!contact.company || contact.company.trim().length < 2) errors.company = 'Société requise';
  if (!/^https?:\/\/.+\..+/.test(contact.website))
    errors.website = 'URL invalide (commencez par http)';
  return errors;
}

const DiagnosticForm: React.FC = () => {
  // ... états et helpers déjà présents ...

  // Handler d'envoi d'email (corrigé et intégré)
  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSubmitted(false);
    // Anti-spam honeypot
    const honeypot = (e.target as any).website2?.value;
    if (honeypot) {
      setErrors({ form: 'Erreur anti-spam.' });
      setLoading(false);
      return;
    }
    try {
      // Récupérer le token CSRF
      const csrfResp = await axios.get(
        `${process.env.GATSBY_API_URL || 'http://localhost:3000'}/api/csrf-token`,
        {
          withCredentials: true,
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        }
      );
      const csrfToken = csrfResp.data?.token;
      if (!csrfToken) throw new Error('Impossible de récupérer le token CSRF');
      // Calculer scores et reco
      const { axisScores, recommendation } = computeScoringAndReco(answers);
      const cleanAxisScores = (scores: Record<string, number>) =>
        Object.fromEntries(
          Object.entries(scores).filter(
            ([k, v]) => typeof v === 'number' && !isNaN(v) && v !== null && v !== undefined
          )
        );
      const cleanedAxisScores = cleanAxisScores(axisScores);
      // Construire le payload plat
      const payload = {
        from: process.env.GATSBY_SMTP_FROM || 'no-reply@votredomaine.fr',
        to: process.env.GATSBY_SMTP_TO || process.env.GATSBY_SMTP_FROM || 'tonmail@domaine.fr',
        subject: `Diagnostic Magento 1 — ${contact.firstName} ${contact.lastName} (${contact.company})`,
        text: `Contact :\nPrénom : ${contact.firstName}\nNom : ${contact.lastName}\nEmail : ${contact.email}\nSociété : ${contact.company}\nSite : ${contact.website}\n\nDiagnostic :\nRéponses : ${JSON.stringify(answers, null, 2)}\nScores : ${JSON.stringify(cleanedAxisScores, null, 2)}\nRecommandation : ${recommendation}`,
      };
      // Envoi
      const resp = await axios.post(
        `${process.env.GATSBY_API_URL || 'http://localhost:3000'}/api/mail/send`,
        payload,
        {
          headers: {
            'x-csrf-token': csrfToken,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      if (resp.data?.success) {
        setSubmitted(true);
      } else {
        setErrors({ form: resp.data?.error || 'Erreur lors de l’envoi.' });
      }
    } catch (err: any) {
      setErrors({ form: err.message || 'Erreur lors de l’envoi.' });
    } finally {
      setLoading(false);
    }
  };

  // États pour les réponses, coordonnées et score
  const [step, setStep] = React.useState(0);
  // Nouvelle structure pour les réponses utilisateur
  type Answers = { [questionId: string]: number };
  type AxisScores = { [axis: string]: number };
  type Messages = string[];
  interface Contact {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    website: string;
  }
  interface Score {
    business: number;
    m1status: number;
    eco: number;
    budget: number;
  }
  interface Errors {
    form?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    company?: string;
    website?: string;
  }

  const [answers, setAnswers] = React.useState<Answers>({});
  const [contact, setContact] = React.useState<Contact>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
  });
  const [errors, setErrors] = React.useState<Errors>({});
  const [axisScores, setAxisScores] = React.useState<AxisScores>({});
  const [recommendation, setRecommendation] = React.useState<string>('');
  const [messages, setMessages] = React.useState<Messages>([]);
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // Helper pour avancer dans le formulaire
  const nextStep = () => {
    if (step < questions.length) {
      // Validation de la question courante
      const q = questions[step];
      if (!q || answers[q.id] === undefined) {
        setErrors({ form: 'Merci de répondre à la question.' });
        return;
      }
      setErrors({});
      setStep(step + 1);
    } else if (step === questions.length) {
      // Validation custom coordonnées
      const newErrors: Errors = {};
      if (!contact.firstName || contact.firstName.trim().length < 2)
        newErrors.firstName = 'Prénom requis (≥2 caractères)';
      if (!contact.lastName || contact.lastName.trim().length < 2)
        newErrors.lastName = 'Nom requis (≥2 caractères)';
      if (!/^\S+@\S+\.\S+$/.test(contact.email)) newErrors.email = 'Email invalide';
      if (!contact.company || contact.company.trim().length < 2)
        newErrors.company = 'Société requise (≥2 caractères)';
      if (!/^https?:\/\/.+\..+/.test(contact.website))
        newErrors.website = 'URL invalide (commencez par http)';
      setErrors(newErrors);
      if (Object.keys(newErrors).length > 0) {
        return;
      }
      setErrors({});
      setStep(step + 1);
    }
  };

  // Validation simple pour coordonnées
  const validateContact = (): boolean => {
    const newErrors: Errors = {};
    if (!contact.firstName.trim()) newErrors.firstName = 'Prénom requis';
    if (!contact.lastName.trim()) newErrors.lastName = 'Nom requis';
    if (!/^\S+@\S+\.\S+$/.test(contact.email)) newErrors.email = 'Email invalide';
    if (!contact.company.trim()) newErrors.company = 'Société requise';
    if (!/^https?:\/\//.test(contact.website))
      newErrors.website = 'URL invalide (commencez par http)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Calcul du score multi-axes + recommandation
  const renderCurrentStep = () => {
    if (step < questions.length) {
      const q = questions[step];
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            nextStep();
          }}
        >
          <h2 className="text-2xl font-bold mb-4">{q.title}</h2>
          <label className="block text-lg font-medium mb-2">
            {q.label} <span className="text-red-500">*</span>
          </label>
          <div className="mb-8 space-y-2">
            {q.options.map((opt: QuestionOption) => (
              <label key={opt.label} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={q.id}
                  value={opt.value}
                  checked={answers[q.id] === opt.value}
                  onChange={() => setAnswers(prev => ({ ...prev, [q.id]: opt.value }))}
                />
                {opt.label}
              </label>
            ))}
          </div>
          {errors.form && <div className="text-red-500 mb-4">{errors.form}</div>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Suivant
          </button>
        </form>
      );
    } else if (step === questions.length) {
      // Coordonnées
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            if (validateContact()) {
              computeScoringAndReco(answers);
              setStep(step + 1);
            }
          }}
        >
          <h2 className="text-2xl font-bold mb-4">Vos coordonnées</h2>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Prénom *</label>
            <input
              type="text"
              value={contact.firstName}
              onChange={e => setContact({ ...contact, firstName: e.target.value })}
              className="w-full p-2 border border-gray-400 rounded"
            />
            {errors.firstName && <div className="text-red-500">{errors.firstName}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Nom *</label>
            <input
              type="text"
              value={contact.lastName}
              onChange={e => setContact({ ...contact, lastName: e.target.value })}
              className="w-full p-2 border border-gray-400 rounded"
            />
            {errors.lastName && <div className="text-red-500">{errors.lastName}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Email *</label>
            <input
              type="email"
              value={contact.email}
              onChange={e => setContact({ ...contact, email: e.target.value })}
              className="w-full p-2 border border-gray-400 rounded"
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Société *</label>
            <input
              type="text"
              value={contact.company}
              onChange={e => setContact({ ...contact, company: e.target.value })}
              className="w-full p-2 border border-gray-400 rounded"
            />
            {errors.company && <div className="text-red-500">{errors.company}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">URL du site *</label>
            <input
              type="url"
              value={contact.website}
              onChange={e => setContact({ ...contact, website: e.target.value })}
              placeholder="https://..."
              className="w-full p-2 border border-gray-400 rounded"
            />
            {errors.website && <div className="text-red-500">{errors.website}</div>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Voir le résultat
          </button>
        </form>
      );
    } else if (step === questions.length + 1) {
      return (
        <div>
          <h2 className="text-2xl font-bold mb-4">Résultat de votre diagnostic</h2>
          {questions.every(q => answers[q.id] !== undefined) ? (
            <>
              <div className="mb-4" style={{ whiteSpace: 'pre-line' }}>
                {Object.entries(axisScores).map(([axis, val]) => (
                  <div key={axis} style={{ display: 'block', marginBottom: 4 }}>
                    <b>{axis} :</b> {val}
                  </div>
                ))}
              </div>
              <div className="mb-4 font-bold">{recommendation}</div>
            </>
          ) : (
            <div className="text-red-500">
              Merci de répondre à toutes les questions du diagnostic.
            </div>
          )}
          <form onSubmit={handleEmailSubmit}>
            <input
              type="text"
              id="website2"
              name="website2"
              autoComplete="off"
              tabIndex={-1}
              className="hidden"
              aria-hidden="true"
            />
            {!submitted && (
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? 'Envoi en cours...' : 'Envoyer par email'}
              </button>
            )}
            {errors.form && <div className="text-red-500">{errors.form}</div>}
            {submitted && (
              <div className="text-green-600 font-semibold">
                Votre diagnostic a bien été envoyé. Merci !
              </div>
            )}
          </form>
        </div>
      );
    }
  };

  return (
    <section className="flex justify-center items-center min-h-[60vh] py-8">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        {renderCurrentStep()}
      </div>
    </section>
  );
};

export default DiagnosticForm;

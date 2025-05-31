import React from 'react';

// Réutilisation du bouton sécurisé de la page d'accueil
const RevealPhoneButton: React.FC<{ label?: string }> = ({ label = 'Afficher le numéro' }) => {
  const [revealed, setRevealed] = React.useState(false);
  const [phone, setPhone] = React.useState<string | null>(null);

  const handleClick = () => {
    if (!revealed) {
      setPhone('+33 7 61 81 11 01');
      setRevealed(true);
    }
  };

  return (
    <button
      type="button"
      className="flex items-center gap-2 font-bold px-8 py-3 rounded-md shadow-md bg-black text-white text-base transition-all duration-200 border-2 border-black hover:bg-white hover:text-black hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      onClick={handleClick}
      aria-label={revealed ? 'Numéro affiché' : 'Afficher le numéro de téléphone'}
    >
      {revealed ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75a16.5 16.5 0 0014.25 14.25l2.25-2.25a1.5 1.5 0 011.5-1.5c.414 0 .75.336.75.75v3.75A2.25 2.25 0 0118.75 22.5C9.56 22.5 1.5 14.44 1.5 5.25A2.25 2.25 0 013.75 3h3.75c.414 0 .75.336.75.75a1.5 1.5 0 01-1.5 1.5L4.5 6.75z"
            />
          </svg>
          {phone}
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75a16.5 16.5 0 0014.25 14.25l2.25-2.25a1.5 1.5 0 011.5-1.5c.414 0 .75.336.75.75v3.75A2.25 2.25 0 0118.75 22.5C9.56 22.5 1.5 14.44 1.5 5.25A2.25 2.25 0 013.75 3h3.75c.414 0 .75.336.75.75a1.5 1.5 0 01-1.5 1.5L4.5 6.75z"
            />
          </svg>
          {label}
        </>
      )}
    </button>
  );
};

const ContactInfos: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6 mb-10">
      <a
        href="https://calendly.com/marialena31/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 rounded-md shadow-md bg-primary text-white font-bold text-base hover:bg-primary-dark transition-all"
      >
        Prendre rendez-vous sur Calendly
      </a>
      <RevealPhoneButton label="Afficher le numéro de téléphone" />
    </div>
  );
};

export default ContactInfos;

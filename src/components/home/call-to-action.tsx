import React from 'react';

import { HomeButton } from '../../types/data';

interface CallToActionProps {
  title: string;
  subtitle?: string;
  buttons: Array<HomeButton>;
}

// Composant pour révéler le numéro de téléphone uniquement au clic, injection JS
const RevealPhoneButton: React.FC<{ label: string }> = ({ label }) => {
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
      className="flex items-center gap-2 font-bold px-8 py-3 rounded-md shadow-md bg-black text-white text-base transition-all duration-200 border-2 border-black hover:bg-white hover:text-black hover:border-primary focus:outline-black focus:outline-2 focus:outline-offset-2"
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

const CallToAction: React.FC<CallToActionProps> = ({ title, subtitle, buttons }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-tr from-primary to-primary-green bg-clip-text text-transparent drop-shadow-md">
          {title}
        </h2>
        {subtitle && <p className="text-lg text-gray-600 mb-10 leading-relaxed">{subtitle}</p>}
        <div className="flex flex-wrap justify-center gap-6">
          {buttons.map((button, index) =>
            button.type === 'primary' ? (
              <RevealPhoneButton key={index} label={button.text} />
            ) : (
              <a
                key={index}
                href={button.link}
                className="inline-block font-bold px-8 py-3 rounded-md shadow-md bg-white text-primary text-base transition-all duration-200 border-2 border-primary hover:bg-primary hover:text-white focus:outline-primary focus:outline-2 focus:outline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {button.text}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

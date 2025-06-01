import React from 'react';
import { Link } from 'gatsby';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white text-gray-800 mt-auto border-t border-gray-200 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-8 box-border">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col items-center gap-2 text-center w-full">
            <div className="flex flex-col gap-2 items-center justify-center">
              <Link
                to="/mentions-legales"
                className="text-gray-700 text-sm transition-colors duration-200 hover:text-primary underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Mentions légales
              </Link>
              <Link
                to="/politique-confidentialite"
                className="text-gray-700 text-sm transition-colors duration-200 hover:text-primary underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-6 text-xs text-gray-700 text-center max-w-3xl mx-auto">
          © 2025 Maria-Lena PIETRI. Tous droits réservés.
          <br />
          Site conçu avec IA générative (ChatGPT + WindSurf) — contenu piloté, structuré, validé
          manuellement.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

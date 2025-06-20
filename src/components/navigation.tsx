import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import MegaMenu from './MegaMenu';

/**
 * Navigation: menu principal avec méga menu desktop et menu mobile burger.
 */
const Navigation: React.FC = () => {
  // Etat pour menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Etat pour savoir si on est sur mobile (md < 768px)
  const [isMobile, setIsMobile] = useState(false);

  // Responsive: détecte le mode mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ferme le menu mobile avec la touche Escape
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Menu mobile (burger)
  const MobileMenu = () => (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center gap-8 text-xl font-semibold md:hidden transition-all">
      <button
        className="absolute top-4 right-4 text-4xl text-gray-800 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={() => setIsMenuOpen(false)}
        aria-label="Fermer le menu"
      >
        &times;
      </button>
      <nav className="flex flex-col items-center gap-2 w-full">
        <Link
          to="/"
          className="w-full text-center py-3 text-lg font-semibold hover:text-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          Accueil
        </Link>
        <span className="w-full text-left py-2 pl-4 text-xs font-bold text-gray-400 uppercase tracking-wider select-none cursor-default">
          Offre & services
        </span>
        <Link
          to="/services"
          className="w-full text-left py-2 pl-8 text-base text-primary hover:text-primary-dark font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Présentation des services
        </Link>
        <Link
          to="/pourquoi-choisir"
          className="w-full text-left py-2 pl-8 text-base text-primary hover:text-primary-dark font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Pourquoi me choisir ?
        </Link>
        <Link
          to="/conseils-pro"
          className="w-full text-left py-2 pl-8 text-base text-primary hover:text-primary-dark font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Conseils de pro
        </Link>
        <Link
          to="/diagnostic-magento1"
          className="w-full text-left py-2 pl-8 text-base text-primary hover:text-primary-dark font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Diagnostic Magento 1
        </Link>
        <span className="w-full text-left py-2 pl-4 text-xs font-bold text-gray-400 uppercase tracking-wider select-none cursor-default">
          Portfolio & études de cas
        </span>
        <Link
          to="/portfolio"
          className="w-full text-left py-2 pl-8 text-base text-primary hover:text-primary-dark font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Portfolio
        </Link>
        <Link
          to="/portfolio#etudes-de-cas"
          className="w-full text-left py-2 pl-8 text-base text-primary hover:text-primary-dark font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Études de cas
        </Link>
        <span className="w-full text-left py-2 pl-4 text-xs font-bold text-gray-400 uppercase tracking-wider select-none cursor-default">
          Ressources
        </span>
        <Link
          to="/plaquette"
          className="w-full text-left py-2 pl-8 text-base text-primary hover:text-primary-dark font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Plaquette ExpertEcom
        </Link>
        <Link
          to="/blog"
          className="w-full text-left py-2 pl-8 text-base text-primary hover:text-primary-dark font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </Link>
        <Link
          to="/jeux"
          className="w-full text-left py-2 pl-8 text-base text-primary hover:text-primary-dark font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Jeux RGPD Inside
        </Link>
        <span className="w-full text-left py-2 pl-4 text-xs font-bold text-gray-400 uppercase tracking-wider select-none cursor-default">
          Contact
        </span>
        <Link
          to="/projet"
          className="w-full text-left py-2 pl-8 text-base text-primary hover:text-primary-dark font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Déposer un projet
        </Link>
        <Link
          to="/contact"
          className="w-full text-left py-2 pl-8 text-base text-primary hover:text-primary-dark font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Envoyer un message
        </Link>
        <a
          href="https://calendly.com/pietri-marialena/contact-30"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-left py-2 pl-8 text-base text-primary hover:text-primary-dark font-medium"
          onClick={() => setIsMenuOpen(false)}
          role="menuitem"
        >
          Prendre rendez-vous
        </a>
        <span className="w-full text-left py-2 pl-4 text-xs font-bold text-gray-400 uppercase tracking-wider select-none cursor-default">
          Ressources
        </span>
        <Link
          to="/plaquette"
          className="w-full text-left py-2 pl-8 text-base text-primary hover:text-primary-dark font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Plaquette ExpertEcom
        </Link>
        <Link
          to="/blog"
          className="w-full text-left py-2 pl-8 text-base text-primary hover:text-primary-dark font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </Link>
      </nav>
    </div>
  );

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between h-16 max-w-5xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Go to homepage">
          <img
            src="/images/expertecom-logo.webp"
            alt=""
            style={{ height: 50, width: 'auto', display: 'block' }}
          />
        </Link>
        {/* Burger mobile */}
        <button
          className="md:hidden text-3xl text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            role="img"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
        {/* Menu mobile affiché si burger ouvert et mobile */}
        {isMobile && isMenuOpen && <MobileMenu />}
        {/* Menu principal desktop (méga menu) */}
        {!isMobile && (
          <div className="hidden md:flex md:items-center md:gap-4 w-full justify-end">
            <MegaMenu />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

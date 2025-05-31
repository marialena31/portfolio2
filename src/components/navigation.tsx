import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

/**
 * Navigation component that provides the main menu functionality.
 * Features a responsive design with a hamburger menu for mobile devices.
 * Includes accessibility features like keyboard navigation and reduced motion support.
 *
 * @component
 * @example
 * return (
 *   <Navigation />
 * )
 */
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Trap focus within menu when open
    if (!isMenuOpen) {
      setTimeout(() => {
        const firstMenuItem = document.querySelector('[data-nav-item]') as HTMLElement;
        firstMenuItem?.focus();
      }, 100);
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between h-16 max-w-5xl mx-auto">
        <Link to="/" className="flex items-center" aria-label="Go to homepage">
          <img
            src="/images/expertecom-logo.png"
            alt=""
            style={{ height: 50, width: 'auto', display: 'block' }}
          />
        </Link>

        <button
          className="md:hidden bg-transparent border-none text-gray-900 cursor-pointer p-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          onClick={toggleMenu}
          aria-label="Ouvrir ou fermer le menu de navigation"
          aria-expanded={isMenuOpen}
          aria-controls="mainMenu"
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
                <title>Close menu</title>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <title>Open menu</title>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <ul
          id="mainMenu"
          className={`flex items-center gap-4 md:static md:flex-row md:bg-transparent md:p-0 md:h-auto md:w-auto transition-all duration-200 ease-in-out
            fixed top-16 left-0 right-0 bottom-0 bg-white p-8 flex-col z-40 shadow-lg md:shadow-none md:gap-4
            ${isMenuOpen ? 'flex animate-fade-in' : 'hidden'} md:flex`}
          role="menu"
        >
          {/* Accueil */}
          <li role="none">
            <Link
              to="/"
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors duration-200 py-2 px-4 md:py-0 md:px-2 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              role="menuitem"
              data-nav-item
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Accueil
            </Link>
          </li>

          {/* Offre & services (méga menu) */}
          <li className="relative group" role="none">
            <button
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors duration-200 py-2 px-4 md:py-0 md:px-2 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white flex items-center gap-1"
              aria-haspopup="true"
              aria-expanded="false"
              tabIndex={isMenuOpen ? 0 : -1}
              type="button"
            >
              Offre & services
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity duration-200 z-50 hidden md:block">
              <ul className="py-3">
                <li>
                  <Link to="/services" className="block px-6 py-2 hover:bg-primary/10">
                    Présentation des services
                  </Link>
                </li>
                <li>
                  <Link to="/pourquoi-choisir" className="block px-6 py-2 hover:bg-primary/10">
                    Pourquoi me choisir ?
                  </Link>
                </li>
                <li>
                  <Link to="/conseils" className="block px-6 py-2 hover:bg-primary/10">
                    Conseils de pro
                  </Link>
                </li>
              </ul>
            </div>
            {/* Mobile sous-menu */}
            <ul className="md:hidden pl-4 mt-2">
              <li>
                <Link to="/services" className="block py-1">
                  Présentation des services
                </Link>
              </li>
              <li>
                <Link to="/pourquoi-choisir" className="block py-1">
                  Pourquoi me choisir ?
                </Link>
              </li>
              <li>
                <Link to="/conseils" className="block py-1">
                  Conseils de pro
                </Link>
              </li>
            </ul>
          </li>

          {/* Portfolio & Réalisations (méga menu) */}
          <li className="relative group" role="none">
            <button
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors duration-200 py-2 px-4 md:py-0 md:px-2 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white flex items-center gap-1"
              aria-haspopup="true"
              aria-expanded="false"
              tabIndex={isMenuOpen ? 0 : -1}
              type="button"
            >
              Portfolio & Réalisations
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity duration-200 z-50 hidden md:block">
              <ul className="py-3">
                <li>
                  <Link to="/portfolio#portfolio" className="block px-6 py-2 hover:bg-primary/10">
                    Slides & preuves
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio#etudes" className="block px-6 py-2 hover:bg-primary/10">
                    Études de cas détaillées
                  </Link>
                </li>
              </ul>
            </div>
            {/* Mobile sous-menu */}
            <ul className="md:hidden pl-4 mt-2">
              <li>
                <Link to="/portfolio#portfolio" className="block py-1">
                  Slides & preuves
                </Link>
              </li>
              <li>
                <Link to="/portfolio#etudes" className="block py-1">
                  Études de cas détaillées
                </Link>
              </li>
            </ul>
          </li>

          {/* À propos */}
          <li role="none">
            <Link
              to="/about"
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors duration-200 py-2 px-4 md:py-0 md:px-2 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              role="menuitem"
              data-nav-item
              tabIndex={isMenuOpen ? 0 : -1}
            >
              À propos
            </Link>
          </li>

          {/* Blog */}
          <li role="none">
            <Link
              to="/blog"
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors duration-200 py-2 px-4 md:py-0 md:px-2 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              role="menuitem"
              data-nav-item
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Blog
            </Link>
          </li>

          {/* Contact (méga menu) */}
          <li className="relative group" role="none">
            <button
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors duration-200 py-2 px-4 md:py-0 md:px-2 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white flex items-center gap-1"
              aria-haspopup="true"
              aria-expanded="false"
              tabIndex={isMenuOpen ? 0 : -1}
              type="button"
            >
              Contact
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity duration-200 z-50 hidden md:block">
              <ul className="py-3">
                <li>
                  <Link to="/projet" className="block px-6 py-2 hover:bg-primary/10">
                    Déposer un projet
                  </Link>
                </li>
                <li>
                  <Link to="/contact#rdv" className="block px-6 py-2 hover:bg-primary/10">
                    Prendre rendez-vous
                  </Link>
                </li>
              </ul>
            </div>
            {/* Mobile sous-menu */}
            <ul className="md:hidden pl-4 mt-2">
              <li>
                <Link to="/projet" className="block py-1">
                  Déposer un projet
                </Link>
              </li>
              <li>
                <Link to="/contact#rdv" className="block py-1">
                  Prendre rendez-vous
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

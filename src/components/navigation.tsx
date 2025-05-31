import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake,
  faLightbulb,
  faGears,
  faImages,
  faSuitcase,
  faEnvelope,
  faCalendarCheck,
  faBookOpen,
  faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons';

// Hook utilitaire pour détecter le mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

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
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const megaMenuTimeout = React.useRef<NodeJS.Timeout | null>(null);

  // Helper to open/close mega menu with delay
  const handleMegaMenuEnter = (menu: string) => {
    if (megaMenuTimeout.current) {
      clearTimeout(megaMenuTimeout.current);
      megaMenuTimeout.current = null;
    }
    setOpenMegaMenu(menu);
  };
  const handleMegaMenuLeave = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    megaMenuTimeout.current = setTimeout(() => setOpenMegaMenu(null), 180);
  };

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
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors duration-200 py-2 px-4 md:py-0 md:px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              role="menuitem"
              data-nav-item
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <span>Accueil</span>
            </Link>
          </li>

          {/* Offre & services (méga menu) */}
          <li
            className="relative"
            role="none"
            onMouseEnter={() => {
              if (!isMobile) handleMegaMenuEnter('offre');
            }}
          >
            <button
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors duration-200 py-2 px-4 md:py-0 md:px-2 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-haspopup="true"
              aria-expanded={openMegaMenu === 'offre'}
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
            <div
              className={`absolute left-0 top-full mt-2 w-[28rem] bg-white rounded-lg shadow-xl border border-gray-100 transition-opacity duration-200 z-50 p-6 hidden md:block ${openMegaMenu === 'offre' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              onMouseDown={e => e.preventDefault()}
              onMouseLeave={() => {
                if (!isMobile) handleMegaMenuLeave();
              }}
            >
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <FontAwesomeIcon icon={faHandshake} className="text-primary text-3xl mb-2" />
                  <div className="font-bold mb-2">Présentation des services</div>
                  <Link
                    to="/services"
                    className="text-sm text-gray-700 hover:text-primary transition-colors"
                    tabIndex={0}
                  >
                    Découvrir
                  </Link>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FontAwesomeIcon icon={faLightbulb} className="text-primary text-3xl mb-2" />
                  <div className="font-bold mb-2">Pourquoi me choisir ?</div>
                  <Link
                    to="/pourquoi-choisir"
                    className="text-sm text-gray-700 hover:text-primary transition-colors"
                    tabIndex={0}
                  >
                    Voir les atouts
                  </Link>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FontAwesomeIcon icon={faGears} className="text-primary text-3xl mb-2" />
                  <div className="font-bold mb-2">Conseils de pro</div>
                  <Link
                    to="/conseils-pro"
                    className="text-sm text-gray-700 hover:text-primary transition-colors"
                    tabIndex={0}
                  >
                    Lire les conseils
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile sous-menu */}
            <ul
              className="md:hidden pl-4 mt-2"
              onClick={() => {
                if (isMobile) setIsMenuOpen(false);
              }}
            >
              <li>
                <Link
                  to="/services"
                  className="block py-1"
                  onClick={() => {
                    if (isMobile) setIsMenuOpen(false);
                  }}
                >
                  Présentation des services
                </Link>
              </li>
              <li>
                <Link
                  to="/pourquoi-choisir"
                  className="block py-1"
                  onClick={() => {
                    if (isMobile) setIsMenuOpen(false);
                  }}
                >
                  Pourquoi me choisir ?
                </Link>
              </li>
              <li>
                <Link
                  to="/conseils"
                  className="block py-1"
                  onClick={() => {
                    if (isMobile) setIsMenuOpen(false);
                  }}
                >
                  Conseils de pro
                </Link>
              </li>
            </ul>
          </li>

          {/* Plaquette ExpertEcom */}
          <li role="none">
            <Link
              to="/plaquette"
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors duration-200 py-2 px-4 md:py-0 md:px-2 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              role="menuitem"
              data-nav-item
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <FontAwesomeIcon icon={faBookOpen} className="text-primary text-lg" />
              <span>Plaquette ExpertEcom</span>
            </Link>
          </li>

          {/* Blog */}
          <li role="none">
            <Link
              to="/blog"
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors duration-200 py-2 px-4 md:py-0 md:px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              role="menuitem"
              data-nav-item
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <span>Blog</span>
            </Link>
          </li>

          {/* Portfolio & études de cas (méga menu) */}
          <li
            className="relative"
            role="none"
            onMouseEnter={() => {
              if (!isMobile) handleMegaMenuEnter('portfolio');
            }}
          >
            <button
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors duration-200 py-2 px-4 md:py-0 md:px-2 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-haspopup="true"
              aria-expanded={openMegaMenu === 'portfolio'}
              tabIndex={isMenuOpen ? 0 : -1}
              type="button"
            >
              Portfolio & études de cas
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
            <div
              className={`absolute left-0 top-full mt-2 w-[28rem] bg-white rounded-lg shadow-xl border border-gray-100 transition-opacity duration-200 z-50 p-6 hidden md:block ${openMegaMenu === 'portfolio' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              onMouseDown={e => e.preventDefault()}
              onMouseLeave={() => {
                if (!isMobile) handleMegaMenuLeave();
              }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center">
                  <FontAwesomeIcon icon={faImages} className="text-primary text-3xl mb-2" />
                  <div className="font-bold mb-2">Portfolio</div>
                  <Link
                    to="/portfolio"
                    className="text-sm text-gray-700 hover:text-primary transition-colors"
                    tabIndex={0}
                  >
                    Voir le portfolio
                  </Link>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FontAwesomeIcon icon={faSuitcase} className="text-primary text-3xl mb-2" />
                  <div className="font-bold mb-2">Études de cas</div>
                  <Link
                    to="/portfolio#etudes-de-cas"
                    className="text-sm text-gray-700 hover:text-primary transition-colors"
                    tabIndex={0}
                  >
                    Voir les études de cas
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile sous-menu */}
            <ul
              className="md:hidden pl-4 mt-2"
              onClick={() => {
                if (isMobile) setIsMenuOpen(false);
              }}
            >
              <li>
                <Link
                  to="/portfolio"
                  className="block py-1"
                  onClick={() => {
                    if (isMobile) setIsMenuOpen(false);
                  }}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio#etudes-de-cas"
                  className="block py-1"
                  onClick={() => {
                    if (isMobile) setIsMenuOpen(false);
                  }}
                >
                  Études de cas
                </Link>
              </li>
              <li>
                <Link
                  to="/conseils"
                  className="block py-1"
                  onClick={() => {
                    if (isMobile) setIsMenuOpen(false);
                  }}
                >
                  Conseils de pro
                </Link>
              </li>
            </ul>
          </li>

          {/* Contact */}
          <li
            className="relative"
            role="none"
            onMouseEnter={() => {
              if (!isMobile) handleMegaMenuEnter('contact');
            }}
          >
            <button
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors duration-200 py-2 px-4 md:py-0 md:px-2 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-haspopup="true"
              aria-expanded={openMegaMenu === 'contact'}
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
            <div
              className={`absolute left-0 top-full mt-2 w-[20rem] bg-white rounded-lg shadow-xl border border-gray-100 transition-opacity duration-200 z-50 p-6 hidden md:block ${openMegaMenu === 'contact' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              onMouseDown={e => e.preventDefault()}
              onMouseLeave={() => {
                if (!isMobile) handleMegaMenuLeave();
              }}
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col items-center text-center">
                  <FontAwesomeIcon
                    icon={faEnvelopeOpenText}
                    className="text-primary text-3xl mb-2"
                  />
                  <div className="font-bold mb-2">Déposer un projet</div>
                  <Link
                    to="/projet"
                    className="text-sm text-gray-700 hover:text-primary transition-colors"
                    tabIndex={0}
                  >
                    Formulaire
                  </Link>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary text-3xl mb-2" />
                  <div className="font-bold mb-2">Envoyer un message</div>
                  <Link
                    to="/contact"
                    className="text-sm text-gray-700 hover:text-primary transition-colors"
                    tabIndex={0}
                  >
                    Contact
                  </Link>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FontAwesomeIcon icon={faCalendarCheck} className="text-primary text-3xl mb-2" />
                  <div className="font-bold mb-2">Prendre rendez-vous</div>
                  <a
                    href="https://calendly.com/expertecom/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:text-primary transition-colors"
                    tabIndex={0}
                  >
                    Calendly
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile sous-menu */}
            <ul
              className="md:hidden pl-4 mt-2"
              onClick={() => {
                if (isMobile) setIsMenuOpen(false);
              }}
            >
              <li>
                <Link
                  to="/projet"
                  className="block py-1"
                  onClick={() => {
                    if (isMobile) setIsMenuOpen(false);
                  }}
                >
                  Déposer un projet
                </Link>
              </li>
              <li>
                <Link
                  to="/contact#rdv"
                  className="block py-1"
                  onClick={() => {
                    if (isMobile) setIsMenuOpen(false);
                  }}
                >
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

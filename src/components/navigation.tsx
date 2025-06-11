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
            src="/images/expertecom-logo.webp"
            alt=""
            style={{ height: 50, width: 'auto', display: 'block' }}
          />
        </Link>

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
        {isMobile && isMenuOpen && (
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
        )}

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
              role="menuitem"
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
                <Link
                  to="/services"
                  className="flex flex-col items-center text-center group focus:outline-none cursor-pointer hover:bg-primary/5 rounded transition"
                  tabIndex={0}
                  role="menuitem"
                >
                  <FontAwesomeIcon
                    icon={faHandshake}
                    className="text-primary text-3xl mb-2 group-hover:text-primary-dark transition-colors"
                  />
                  <div className="font-bold mb-2 group-hover:text-primary">
                    Présentation des services
                  </div>
                  <div className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                    Découvrir
                  </div>
                </Link>
                <Link
                  to="/pourquoi-choisir"
                  className="flex flex-col items-center text-center group focus:outline-none cursor-pointer hover:bg-primary/5 rounded transition"
                  tabIndex={0}
                  role="menuitem"
                >
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="text-primary text-3xl mb-2 group-hover:text-primary-dark transition-colors"
                  />
                  <div className="font-bold mb-2 group-hover:text-primary">
                    Pourquoi me choisir ?
                  </div>
                  <div className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                    Voir les atouts
                  </div>
                </Link>
                <Link
                  to="/conseils-pro"
                  className="flex flex-col items-center text-center group focus:outline-none cursor-pointer hover:bg-primary/5 rounded transition"
                  tabIndex={0}
                  role="menuitem"
                >
                  <FontAwesomeIcon
                    icon={faGears}
                    className="text-primary text-3xl mb-2 group-hover:text-primary-dark transition-colors"
                  />
                  <div className="font-bold mb-2 group-hover:text-primary">Conseils de pro</div>
                  <div className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                    Lire les conseils
                  </div>
                </Link>
              </div>
            </div>
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
              role="menuitem"
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
            >
              <div className="grid grid-cols-2 gap-6">
                <Link
                  to="/portfolio"
                  className="group cursor-pointer hover:bg-primary/5 rounded transition"
                  tabIndex={0}
                  role="menuitem"
                >
                  <FontAwesomeIcon
                    icon={faImages}
                    className="text-primary text-3xl mb-2 group-hover:text-primary-dark transition-colors"
                  />
                  <div className="font-bold mb-2 group-hover:text-primary">Portfolio</div>
                  <div className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                    Voir le portfolio
                  </div>
                </Link>
                <Link
                  to="/portfolio#etudes-de-cas"
                  className="group cursor-pointer hover:bg-primary/5 rounded transition"
                  tabIndex={0}
                  role="menuitem"
                >
                  <FontAwesomeIcon
                    icon={faSuitcase}
                    className="text-primary text-3xl mb-2 group-hover:text-primary-dark transition-colors"
                  />
                  <div className="font-bold mb-2 group-hover:text-primary">Études de cas</div>
                  <div className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                    Voir les études de cas
                  </div>
                </Link>
              </div>
            </div>
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
              role="menuitem"
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
              className={`absolute left-auto right-0 top-full mt-2 w-full max-w-screen-sm sm:w-[20rem] sm:max-w-[95vw] bg-white rounded-lg shadow-xl border border-gray-100 transition-opacity duration-200 z-50 p-6 overflow-x-auto hidden md:block ${openMegaMenu === 'contact' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              onMouseDown={e => e.preventDefault()}
              onMouseLeave={() => {
                if (!isMobile) handleMegaMenuLeave();
              }}
            >
              <div className="grid grid-cols-1 gap-6 min-w-[16rem]">
                <Link
                  to="/projet"
                  className="flex flex-col items-center text-center group focus:outline-none cursor-pointer hover:bg-primary/5 rounded transition"
                  tabIndex={0}
                >
                  <FontAwesomeIcon
                    icon={faEnvelopeOpenText}
                    className="text-primary text-3xl mb-2 group-hover:text-primary-dark transition-colors"
                  />
                  <div className="font-bold mb-2 group-hover:text-primary">Déposer un projet</div>
                  <div className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                    Formulaire
                  </div>
                </Link>
                <Link
                  to="/contact"
                  className="flex flex-col items-center text-center group focus:outline-none cursor-pointer hover:bg-primary/5 rounded transition"
                  tabIndex={0}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-primary text-3xl mb-2 group-hover:text-primary-dark transition-colors"
                  />
                  <div className="font-bold mb-2 group-hover:text-primary">Envoyer un message</div>
                  <div className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                    Contact
                  </div>
                </Link>
                <a
                  href="https://calendly.com/pietri-marialena/contact-30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center group focus:outline-none cursor-pointer hover:bg-primary/5 rounded transition"
                  tabIndex={0}
                >
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    className="text-primary text-3xl mb-2 group-hover:text-primary-dark transition-colors"
                  />
                  <div className="font-bold mb-2 group-hover:text-primary">Prendre rendez-vous</div>
                  <div className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                    Calendly
                  </div>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

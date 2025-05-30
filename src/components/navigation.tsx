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
      <div className="flex items-center justify-between h-16 max-w-5xl mx-auto px-4">
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 no-underline whitespace-nowrap mr-4 transition-colors hover:text-primary flex-shrink-0"
          aria-label="Go to homepage"
        >
          <span aria-hidden="true">ExpertEcom</span>
        </Link>

        <button
          className="md:hidden bg-transparent border-none text-gray-900 cursor-pointer p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
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
            fixed top-16 left-0 right-0 bottom-0 bg-white p-8 flex-col items-stretch z-40 shadow-lg md:shadow-none md:gap-4
            ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}
          role="menu"
        >
          <li role="none">
            <Link
              to="/"
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors py-2 px-4 md:py-0 md:px-2 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              role="menuitem"
              data-nav-item
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Accueil
            </Link>
          </li>
          <li role="none">
            <Link
              to="/about"
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors py-2 px-4 md:py-0 md:px-2 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              role="menuitem"
              data-nav-item
              tabIndex={isMenuOpen ? 0 : -1}
            >
              À propos
            </Link>
          </li>
          <li role="none">
            <Link
              to="/services"
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors py-2 px-4 md:py-0 md:px-2 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              role="menuitem"
              data-nav-item
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Services
            </Link>
          </li>
          <li role="none">
            <Link
              to="/pourquoi-choisir"
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors py-2 px-4 md:py-0 md:px-2 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              role="menuitem"
              data-nav-item
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Pourquoi me choisir ?
            </Link>
          </li>

          <li role="none">
            <Link
              to="/blog"
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors py-2 px-4 md:py-0 md:px-2 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              role="menuitem"
              data-nav-item
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Blog
            </Link>
          </li>
          <li role="none">
            <Link
              to="/projet"
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors py-2 px-4 md:py-0 md:px-2 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              role="menuitem"
              data-nav-item
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Déposer un projet
            </Link>
          </li>
          <li role="none">
            <Link
              to="/contact"
              className="text-gray-900 hover:text-primary text-base no-underline transition-colors py-2 px-4 md:py-0 md:px-2 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              role="menuitem"
              data-nav-item
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

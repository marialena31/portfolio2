import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import * as styles from './navigation.module.scss';

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
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <div className={styles.navContent}>
        <Link to="/" className={styles.logo} aria-label="Go to homepage">
          <span aria-hidden="true">ExpertEcom</span>
        </Link>

        <button
          className={styles.menuButton}
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
          className={`${styles.menuList} ${isMenuOpen ? styles.isOpen : ''}`}
          role="menu"
          style={{
            listStyle: 'none',
            paddingLeft: 0,
            marginLeft: 0,
          }}
        >
          <li role="none">
            <Link
              to="/"
              className={styles.menuItem}
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
              className={styles.menuItem}
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
              className={styles.menuItem}
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
              className={styles.menuItem}
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
              className={styles.menuItem}
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
              className={styles.menuItem}
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
              className={styles.menuItem}
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

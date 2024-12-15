import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './navigation.module.scss';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <Link to="/" className={styles.logo}>
          Portfolio
        </Link>

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
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

        <ul className={`${styles.menuList} ${isMenuOpen ? styles.isOpen : ''}`}>
          <li className={styles.menuItem}>
            <Link to="/" activeClassName={styles.active}>
              Accueil
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/about" activeClassName={styles.active}>
              À propos
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/services" activeClassName={styles.active}>
              Services
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/portfolio" activeClassName={styles.active}>
              Portfolio
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/blog" activeClassName={styles.active}>
              Blog
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/contact" activeClassName={styles.active}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

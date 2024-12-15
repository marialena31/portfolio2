import React from 'react';
import Navigation from './navigation';
import * as styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

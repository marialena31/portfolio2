import React, { useState } from 'react';
import * as styles from './call-to-action.module.scss';
import { HomeButton } from '../../types/data';

interface CallToActionProps {
  title: string;
  subtitle?: string;
  buttons: Array<HomeButton>;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, subtitle, buttons }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <section className={styles.callToAction}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.buttons}>
          {buttons.map((button, index) =>
            button.type === 'primary' ? (
              <button
                key={index}
                className={`${styles.button} ${styles.primary} ${isFlipped ? styles.flipped : ''}`}
                onClick={handleClick}
              >
                <span className={styles.buttonFront}>{button.text}</span>
                <span className={styles.buttonBack}>{button.phoneNumber}</span>
              </button>
            ) : (
              <a
                key={index}
                href={button.link}
                className={`${styles.button} ${styles.secondary}`}
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

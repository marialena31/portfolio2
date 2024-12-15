import React from 'react';
import { Link } from 'gatsby';
import * as styles from './call-to-action.module.scss';

interface CallToActionProps {
  title: string;
  buttons: Array<{
    text: string;
    link: string;
    type: 'primary' | 'secondary';
  }>;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, buttons }) => {
  return (
    <section className={styles.callToAction}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.buttons}>
          {buttons.map((button, index) => (
            <Link
              key={index}
              to={button.link}
              className={`${styles.button} ${
                button.type === 'primary' ? styles.primary : styles.secondary
              }`}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

import React from 'react';
import { Link } from 'gatsby';
import * as styles from './needs.module.scss';

interface NeedsProps {
  title: string;
  items: Array<{
    question: string;
    solution: string;
    link: string;
  }>;
}

const Needs: React.FC<NeedsProps> = ({ title, items }) => {
  return (
    <section className={styles.needs}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <Link to={item.link} className={styles.needCard} key={index}>
              <h3 className={styles.question}>{item.question}</h3>
              <div className={styles.arrow}>→</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Needs;

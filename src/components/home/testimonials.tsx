import React from 'react';
import * as styles from './testimonials.module.scss';

interface TestimonialsProps {
  title: string;
  items: Array<{
    quote: string;
    author: string;
    company: string;
    result: string;
  }>;
}

const Testimonials: React.FC<TestimonialsProps> = ({ title, items }) => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div className={styles.testimonialCard} key={index}>
              <blockquote className={styles.quote}>{item.quote}</blockquote>
              <div className={styles.author}>
                <strong>{item.author}</strong>
                <span>{item.company}</span>
              </div>
              <div className={styles.result}>{item.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

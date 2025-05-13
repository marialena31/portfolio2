import React from 'react';
import styles from './Test.module.scss';

const Test: React.FC = () => {
  console.log('Test module styles:', styles);
  return <div className={styles.testClass}>Test SCSS module</div>;
};

export default Test;

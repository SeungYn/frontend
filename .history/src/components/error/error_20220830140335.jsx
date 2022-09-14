import React from 'react';
import styles from './error.module.css';

const Error = ({ error }) => {
  console.log('에러코드 : ', error.name);
  return (
    <div className={styles.container}>
      <div className={styles.error__form}>
        <p className={styles.text}>{error.message}</p>
        <button className={styles.btn}>확인</button>
      </div>
    </div>
  );
};

export default Error;

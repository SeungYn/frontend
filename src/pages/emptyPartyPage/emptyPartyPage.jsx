import React from 'react';
import styles from './emptyPartyPage.module.css';
import { TbMoodEmpty } from 'react-icons/tb';
const EmptyPartyPage = (props) => (
  <section className={styles.empty}>
    <TbMoodEmpty />
  </section>
);

export default EmptyPartyPage;

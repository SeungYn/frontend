import React from 'react';
import styles from './myPartyItem.module.css';
import { FaFemale, FaMale } from 'react-icons/fa';
const MyPartyItem = ({ peoples }) => (
  <ul className={styles.myParty__peoples}>
    {peoples.map((item) => (
      <li key={item.sno} className={styles.myParty__peoples__people}>
        <FaFemale fontSize='10px' />
        <span>{item.sex}</span>
      </li>
    ))}
  </ul>
);

export default MyPartyItem;
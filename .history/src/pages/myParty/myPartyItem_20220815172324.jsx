import React from 'react';
import styles from './myPartyItem.module.css';
import { FaFemale, FaMale } from 'react-icons/fa';
import { MdFemale, Mdmale } from 'react-icons/md';
const MyPartyItem = ({ peoples, onReady }) => {
  return (
    <ul className={styles.myParty__peoples}>
      {peoples.map((item) => (
        <li key={item.sno} className={styles.myParty__peoples__people}>
          <div className={item.status === 1 ? styles.readyOn : styles.readyOff}>
            준비
          </div>
          <div className={styles.contents}>
            <span className={styles.contents__det}>학과 : {item.det}</span>
            <span className={styles.contents__sno}>학번 : {item.sno}</span>
            <span className={styles.contents__nickName}>
              닉네임 : {item.nickName}{' '}
              {item.sex === 'male' ? <Famale /> : <FaFemale />}
            </span>
            <span className={styles.contents__reliability}>
              신뢰도 : {item.reliability}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MyPartyItem;

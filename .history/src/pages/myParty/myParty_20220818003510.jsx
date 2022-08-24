import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './myParty.module.css';
import MyPartyItem from './myPartyItem';

const MyParty = ({ partyService }) => {
  const [party, setParty] = useState();
  //파티 멤버수가 바뀌면 업데이트
  const [memberCount, setMemberCount] = useState('');

  const onReady = () => {
    console.log('ready');
  };

  useEffect(() => {
    partyService
      .getMyParty() //
      .then((data) => {
        //length = data.members.length;
        console.log('qwd', data);
        setParty({ ...data });
        setMemberCount(memberCount);
      });
  }, [memberCount]);

  return (
    <section className={styles.myParty__container}>
      {party && <MyPartyItem onReady={onReady} partyInfo={party} />}
      {party && (
        <ul className={styles.partyInfo}>
          <li className={styles.partyInfo__title}>{party.title}</li>
          {/* <li className={styles.partyInfo__resTitle}>{party.</li>
        <li className={styles.partyInfo__address}></li> */}
          <li className={styles.partyInfo__partyMaster}>{party.party.owner}</li>
          <li
            className={styles.partyInfo__count}
          >{`${party.currentCount} / ${party.maximumCount}`}</li>
        </ul>
      )}

      <div className={styles.btnGroup}>
        <button className={styles.btnGroup__btn} onClick={onReady}>
          준비하기
        </button>
        <div className={styles.btnGroup__right}>
          <button className={styles.btnGroup__btn}>채팅하기</button>
          <button className={styles.btnGroup__btn}>나가기</button>
        </div>
      </div>
    </section>
  );
};

export default MyParty;
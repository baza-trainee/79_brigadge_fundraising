import React, { useState } from 'react';
import Container from '../layouts/Container/Container';
import Modal from '../Modal/Modal';
import styles from './Strength.module.css';
import plane from '../../assets/img/strength/Frame 33.png';

const Strength = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <section className={styles['strength']}>
      <Container>
        <h2 className={styles['strength-title']}>В єднанні - сила!</h2>
        <div className={styles['strength-content-wrapper']}>
          <div className={styles['strength-text']}>
            <p>Розповідай друзям про збір.</p>
            <p>Окриляй злих птахів.</p>
            <p><span className={styles['strength-text-span']}>
              Наближай перемогу!
            </span></p>
          </div>

          <img className={styles['strength-img']} src={plane} alt="" />

          <button
            className={styles['strength-share-btn']}
            onClick={() => setModalActive(true)}
          >
            Поділитись
          </button>
        </div>

        <Modal active={modalActive} setActive={setModalActive} />
      </Container>
    </section>
  );
};

export default Strength;

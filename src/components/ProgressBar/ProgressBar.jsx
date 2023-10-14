import JarDetailsButton from '../JarDetailsButton/JarDetailsButton';
import Container from '../layouts/Container/Container';
import styles from './ProgressBar.module.css';
import boat from '../../assets/img/progress-bar/boat.svg';

import React, { useEffect, useState } from 'react';

const jarInfo = {
  fundraisingGoal: 250000,
  totalDonations: 70000,
  recentDonations: [
    {
      donor: '53************89',
      donationAmount: 150.0,
    },
    {
      donor: 'Donor3',
      donationAmount: 600.0,
    },
    {
      donor: 'Donor4',
      donationAmount: 500.0,
    },
    {
      donor: 'Donor5',
      donationAmount: 400.0,
    },
  ],
  largestDonations: [
    {
      donor: 'Donor1',
      donationAmount: 1000.0,
    },
    {
      donor: 'Donor2',
      donationAmount: 750.0,
    },
    {
      donor: 'Donor3',
      donationAmount: 600.0,
    },
    {
      donor: 'Donor4',
      donationAmount: 500.0,
    },
    {
      donor: 'Donor5',
      donationAmount: 400.0,
    },
  ],
};

const ProgressBar = ({ openModal }) => {
  const [lengthScale, setLengthScale] = useState(0);

  const totalAmount = jarInfo.fundraisingGoal;
  const completedAmount = jarInfo.totalDonations;
  const completionPercentage = Math.floor(
    (completedAmount / totalAmount) * 100
  );
  const restPersentage = 100 - completionPercentage;
  useEffect(() => {
    fixedScaleLenght();

    window.addEventListener('resize', fixedScaleLenght);

    return () => {
      window.removeEventListener('resize', fixedScaleLenght);
    };
  }, []);

  function fixedScaleLenght() {
    if (window.innerWidth >= 1280) {
      setLengthScale(24);
    }
    if (1280 > window.innerWidth && window.innerWidth >= 1024) {
      setLengthScale(20);
    }
    if (1024 > window.innerWidth && window.innerWidth >= 768) {
      setLengthScale(18);
    }
    if (768 > window.innerWidth && window.innerWidth >= 420) {
      console.log(window.innerWidth);
      setLengthScale(15);
    }
    if (420 > window.innerWidth) {
      setLengthScale(13);
    }
  }

  function formatedAmount(amount) {
    return amount.toLocaleString('uk-UA');
  }

  return (
    <section className={styles.progressBar_section}>
      <Container>
        <h2 className={styles.progressBar__title}>Ціль</h2>
        <div className={styles.progressBar__content_wraper}>
          <div className={styles.progressBar__scale_wrapper}>
            <div
              className={styles.progressBar__scale_plane}
              style={{ right: `${restPersentage}%` }}
            ></div>

            <p
              className={styles.progressBar__scale_current_percent}
              style={{ left: `${completionPercentage}%` }}
            >
              {completionPercentage}%
            </p>
            <p className={styles.progressBar__scale_amount_percent}>100%</p>
            <div className={styles.progressBar__scale}>
              {Array.from({ length: `${lengthScale}` }).map((_, index) => (
                <div
                  key={index}
                  className={`${styles.progress_segment} ${
                    index < (completionPercentage * lengthScale) / 100
                      ? `${styles.completed}`
                      : ''
                  }`}
                />
              ))}
            </div>
            <p
              className={styles.progressBar__scale_current_number}
              style={{ left: `${completionPercentage}%` }}
            >
              {formatedAmount(completedAmount)}
            </p>
            <p className={styles.progressBar__scale_amount_number}>
              {formatedAmount(totalAmount)}
            </p>
          </div>

          <div className={styles.progressBar__img_wrapper}>
            <img src={boat} alt="explosion" width="273" height="94" />
          </div>
        </div>
        <ul className={styles.progressBar__btn_list}>
          <li>
            <JarDetailsButton modal={() => openModal('recent')}>
              Останній донат
            </JarDetailsButton>
          </li>
          <li>
            <JarDetailsButton modal={() => openModal('largest')}>
              Найбільший донат
            </JarDetailsButton>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default ProgressBar;

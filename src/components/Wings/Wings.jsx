import React from 'react';
import Container from '../layouts/Container/Container';
import styles from './Wings.module.css';
import cotton from '../../assets/img/wings/cotton.gif';

const Wings = () => {
  return (
    <section className={styles['wings']}>
      <Container>
        <div className={styles['wings-wrapper']}>
          <h2 className={styles['wings-title']}>На Крила</h2>
          <div className={styles['wings-content-wrapper']}>
            <div className={styles['wings-block1']}>
              <p className={styles['wings-block1-text']}>Окриляй злих птахів, знищуй ворогів</p>
            </div>
            <div className={styles['wings-block2']}>
              <div className={styles['wings-block2-img']}>
                <div className={styles['wings-block2-content']}>
                  <img src={cotton} alt="cotton" />
                  <button className={styles['wings-block2-button']}><a href="#">Донат на крила</a></button>
                </div>
              </div>
            </div>
          </div>
          <p className={styles['wings-text']}>
            Жодний з <span className={styles['span-text']}>БпЛА “Бекфаєр”</span> за рік роботи не був втрачений у бойових діях. Невидимі і недосяжні для ворога.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Wings;

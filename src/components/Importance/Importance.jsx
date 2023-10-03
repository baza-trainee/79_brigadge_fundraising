import Container from '../layouts/Container/Container';
import styles from './Importance.module.css';
import img1 from '../../assets/img/importance/importance1-desktop.jpg';
import img1x2 from '../../assets/img/importance/importance1-desktop@2x.jpg';
import img2 from '../../assets/img/importance/importance2-desktop.jpg';
import img2x2 from '../../assets/img/importance/importance2-desktop@2x.jpg';
import img3 from '../../assets/img/importance/importance3-desktop.jpg';
import img3x2 from '../../assets/img/importance/importance3-desktop@2x.jpg';
import img4 from '../../assets/img/importance/importance4-desktop.jpg';
import img4x2 from '../../assets/img/importance/importance4-desktop@2x.jpg';

const Importance = () => {
  return (
    <section className={styles.importance} id="2">
      <Container>
        <h2 className={styles.importance__title}>Чому важливий збір</h2>
        <ul className={styles.importance__list}>
          <li className={styles.importance__item}>
            <div className={styles.importance__img}>
              <picture>
                <source
                  srcSet={`${img1} 1x, ${img1x2} 2x`}
                  media="(min-width: 1200px)"
                />
                <img
                  src={img1}
                  alt="first important item"
                  width="297"
                  height="297"
                  className={styles.importance__photo}
                />
              </picture>
            </div>

            <div className={styles.importance__info}>
              <p className={styles.importance__info_text}>
                {' '}
                Зниження ризиків для бійців на передовій.
              </p>
            </div>
          </li>
          <li className={styles.importance__item}>
            <div className={styles.importance__img}>
              <picture>
                <source
                  srcSet={`${img2} 1x, ${img2x2} 2x`}
                  media="(min-width: 1200px)"
                />
                <img
                  src={img2}
                  alt="second important item"
                  width="297"
                  height="297"
                  className={styles.importance__photo}
                />
              </picture>
            </div>

            <div className={styles.importance__info}>
              <p className={styles.importance__info_text}>
                {' '}
                Максимізація ефективності у знищенні ворога.
              </p>
            </div>
          </li>
          <li className={styles.importance__item}>
            <div className={styles.importance__img}>
              <picture>
                <source
                  srcSet={`${img3} 1x, ${img3x2} 2x`}
                  media="(min-width: 1200px)"
                />
                <img
                  src={img3}
                  alt="third important item"
                  width="297"
                  height="297"
                  className={styles.importance__photo}
                />
              </picture>
            </div>

            <div className={styles.importance__info}>
              <p
                className={`${styles.importance__info_text} ${styles.bigText}`}
              >
                Підтримка українських розробників та інженерів у розвитку
                безпілотної авіації.
              </p>
            </div>
          </li>
          <li className={styles.importance__item}>
            <div className={styles.importance__img}>
              <picture>
                <source
                  srcSet={`${img4} 1x, ${img4x2} 2x`}
                  media="(min-width: 1200px)"
                />
                <img
                  src={img4}
                  alt="fourth important item"
                  width="297"
                  height="297"
                  className={styles.importance__photo}
                />
              </picture>
            </div>

            <div className={styles.importance__info}>
              <p
                className={`${styles.importance__info_text} ${styles.bigText} ${styles.bigText_last}`}
              >
                Забезпечення ЗСУ передовими та надійними БпЛА для бойових
                операцій.
              </p>
            </div>
          </li>
        </ul>
        <p className={styles.importance__text}>
          Підтримаємо український продукт, який надає не просто крила, а{' '}
          <span className={styles.text_color}>українські крила</span> нашим
          військовим!
        </p>
      </Container>
    </section>
  );
};

export default Importance;

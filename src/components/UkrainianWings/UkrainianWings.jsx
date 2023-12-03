import Container from "../layouts/Container/Container";
import Plane from "../../assets/img/ukrainian-wings/plane.svg";

import styles from "./UkrainianWings.module.css";

const UkrainianWings = () => {
  return (
    <section className={styles["ukrainian-wings"]} id="ukrainian-wings">
      <div className={styles["ukrainian-wings-wrapper"]}></div>
      <Container className={styles["ukrainian-wings-container"]}>
        <div
          className={`${styles["ukrainian-wings-block"]} ${styles["ukrainian-wings-left-block"]}`}
        >
          <h1 className={styles["ukrainian-wings-title"]}>Українські Крила</h1>
          <h5 className={styles["ukrainian-wings-subtitle"]}>
            Окриляй злих птахів, знищуй ворогів
          </h5>
          <p className={styles["ukrainian-wings-desc"]}>
            Наша мета зібрати{" "}
            <span className={styles["big_screen"]}>50 000 гривень</span>
            <span className={styles["small_screen"]}>50 000 грн</span> для
            Зведеного загону ВМС та Сухопутних військ “Злі Птахи” на
            фінансування проєкту <span>Бекфаєр</span>
          </p>
          <a
            className={styles["ukrainian-wings-btn"]}
            href="https://send.monobank.ua/jar/4jhbEszhq6"
            rel="noreferrer"
            target="_blank"
          >
            Донат на крила
          </a>
        </div>
        <div
          className={`${styles["ukrainian-wings-block"]} ${styles["ukrainian-wings-right-block"]}`}
        >
          <div className={styles["wrapper-img"]}>
            <img
              src={Plane}
              alt="Plane"
              className={styles["ukrainian-wings-plane"]}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UkrainianWings;

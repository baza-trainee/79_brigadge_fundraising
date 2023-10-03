import Container from "../layouts/Container/Container";
import Plane from "../../assets/img/ukrainian-wings/plane.png";

import styles from "./UkrainianWings.module.css";

const UkrainianWings = () => {
  return (
    <section className={styles["ukrainian-wings"]} id="ukrainian-wings">
      <div className={styles["ukrainian-wings-wrapper"]}>
        <Container className={styles["ukrainian-wings-container"]}>
          <div
            className={`${styles["ukrainian-wings-block"]} ${styles["ukrainian-wings-left-block"]}`}
          >
            <h1 className={styles["ukrainian-wings-title"]}>
              "Українські Крила"
            </h1>
            <h5 className={styles["ukrainian-wings-subtitle"]}>
              Окриляй злих птахів, знищуй ворогів
            </h5>
            <p className={styles["ukrainian-wings-desc"]}>
              Наша мета зібрати <span>250 000 гривень</span> для 79 бригади ЗСУ
              на фінансування проету <span>Бекфаєр</span>
            </p>
            <a className={styles["ukrainian-wings-btn"]} href="/#">
              На крила
            </a>
          </div>
          <div
            className={`${styles["ukrainian-wings-block"]} ${styles["ukrainian-wings-right-block"]}`}
          >
            <img src={Plane} alt="Plane" />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default UkrainianWings;

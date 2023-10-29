import React from "react";
import styles from "./Modal.module.css";
import fon2 from "../../assets/img/modal/Fon2.svg";
import fon3 from "../../assets/img/modal/Fon3.svg";
import facebook from "../../assets/img/modal/Facebook.svg";
import telegram from "../../assets/img/modal/Telegram.svg";
import viber from "../../assets/img/modal/Viber.svg";
import linkedin from "../../assets/img/modal/Linkedin.svg";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={
        active ? `${styles["modal"]} ${styles["active"]}` : styles["modal"]
      }
      onClick={() => setActive(false)}
    >
      <div
        className={styles["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <img className={styles["fon-2"]} src={fon2} alt="" />
        <img className={styles["fon-3"]} src={fon3} alt="" />
        <div className={styles["modal-wrapper"]}>
          <p className={styles["modal-title"]}>Поділитись</p>
          <div className={styles["modal-btn-wrapper"]}>
            <button className={`${styles["modal-btn"]} ${styles["facebook"]}`}>
              <img className={styles["icon"]} src={facebook} alt=""></img>
              Facebook
            </button>
            <button className={`${styles["modal-btn"]} ${styles["telegram"]}`}>
              <img className={styles["icon"]} src={telegram} alt=""></img>
              Telegram
            </button>
            <button className={`${styles["modal-btn"]} ${styles["viber"]}`}>
              <img className={styles["icon"]} src={viber} alt=""></img>
              Viber
            </button>
            <button className={`${styles["modal-btn"]} ${styles["linkedin"]}`}>
              <img className={styles["icon"]} src={linkedin} alt=""></img>
              LinkedIn
            </button>
          </div>
        </div>
        <button
          className={styles["modal-btn-close"]}
          onClick={() => setActive(false)}
          data-testid="close-button"
        ></button>
      </div>
    </div>
  );
};

export default Modal;

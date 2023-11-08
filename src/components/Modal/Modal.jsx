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
            <a
              href="https://www.facebook.com/sharer.php?u=http%3A%2F%2F79-wings.site%2F"
              target="_blank"
              rel="noreferrer"
              className={`${styles["modal-btn"]} ${styles["facebook"]}`}
            >
              <img className={styles["icon"]} src={facebook} alt=""></img>
              Facebook
            </a>
            <a
              href="https://telegram.me/share/url?url=79-wings.site&text=Окриляй%20злих%20птахів,%20знищуй%20ворогів.%20"
              target="_blank"
              rel="noreferrer"
              className={`${styles["modal-btn"]} ${styles["telegram"]}`}
            >
              <img className={styles["icon"]} src={telegram} alt=""></img>
              Telegram
            </a>
            <a
              href="viber://forward?text=Окриляй%20злих%20птахів,%20знищуй%20ворогів.%2079-wings.site"
              rel="noreferrer"
              className={`${styles["modal-btn"]} ${styles["viber"]}`}
            >
              <img className={styles["icon"]} src={viber} alt=""></img>
              Viber
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=79-wings.site"
              target="_blank"
              rel="noreferrer"
              className={`${styles["modal-btn"]} ${styles["linkedin"]}`}
            >
              <img className={styles["icon"]} src={linkedin} alt=""></img>
              LinkedIn
            </a>
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

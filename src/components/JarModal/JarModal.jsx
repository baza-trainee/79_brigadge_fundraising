import { useEffect, useState } from "react";
import bavovna from "../../assets/img/jar_modal/bavovna.png";
import heart from "../../assets/img/jar_modal/heart.svg";
import plane from "../../assets/img/jar_modal/plane.svg";
import ship from "../../assets/img/jar_modal/war_ship.svg";
import fire from "../../assets/img/jar_modal/Fire.svg";

import styles from "./JarModal.module.css";

const JarModal = ({ isVisible, setIsVisible, activeModal, setActiveModal }) => {
  const data = {
    fundraisingGoal: 500,
    totalDonations: 105,
    recentDonations: [
      {
        donor: "53************89",
        donationAmount: 150.0,
        donationDate: "15-05-2023",
      },
      {
        donor: "Donor3",
        donationAmount: 600.0,
        donationDate: "15-05-2023",
      },
      {
        donor: "Donor4",
        donationAmount: 500.0,
        donationDate: "15-05-2023",
      },
      {
        donor: "Donor5",
        donationAmount: 400.0,
        donationDate: "15-05-2023",
      },
      {
        donor: "53************89",
        donationAmount: 150.0,
        donationDate: "15-05-2023",
      },
    ],
    largestDonations: [
      {
        donor: "Donor1",
        donationAmount: 1000.0,
        donationDate: "15-05-2023",
      },
      {
        donor: "Donor2",
        donationAmount: 750.0,
        donationDate: "15-05-2023",
      },
      {
        donor: "Donor3",
        donationAmount: 600.0,
        donationDate: "15-05-2023",
      },
      {
        donor: "Donor4",
        donationAmount: 500.0,
        donationDate: "15-05-2023",
      },
      {
        donor: "Donor5",
        donationAmount: 400.0,
        donationDate: "15-05-2023",
      },
    ],
  };

  useEffect(() => {
    const closeModal = (event) => {
      if (event.code === "Escape") {
        setIsVisible(false);
      }
    };

    document.body.addEventListener("keyup", (event) => closeModal(event));

    return () => {
      window.removeEventListener("keyup", closeModal);
    };
  }, []);

  return (
    <div
      className={
        isVisible ? `${styles["modal"]} ${styles["active"]}` : styles["modal"]
      }
      onClick={() => setIsVisible(false)}
    >
      <div
        className={styles["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles["modal-btn-wrapper"]}>
          <button
            className={
              activeModal === "recent"
                ? `${styles["modal-btn"]} ${styles["btn-active"]}`
                : styles["modal-btn"]
            }
            onClick={() => setActiveModal("recent")}
          >
            Останні донати
          </button>
          <button
            className={
              activeModal === "largest"
                ? `${styles["modal-btn"]} ${styles["btn-active"]}`
                : styles["modal-btn"]
            }
            onClick={() => setActiveModal("largest")}
          >
            Топ донати
          </button>
        </div>
        {activeModal === "recent" && (
          <>
            <View data={data.recentDonations} icon={heart} />
            <div className={styles["bavovna-wrapper"]}>
              <img src={bavovna} alt="bavovna" />
              <img src={bavovna} alt="bavovna" />
              <img src={bavovna} alt="bavovna" />
            </div>
            <p className={styles["goal-text"]}>Ми ближче до цілі!</p>
          </>
        )}
        {activeModal === "largest" && (
          <>
            <View data={data.largestDonations} icon={heart} />
            <div className={styles["modal-img-wrapper"]}>
              <div className={styles["ship-wrapper"]}>
                <img src={ship} alt="ship" />
                <img src={fire} alt="fire" className={styles["fire"]} />
              </div>
            </div>
            <p className={`${styles["goal-text"]} ${styles["ship-text"]}`}>
              Ближче до перемоги!
            </p>
          </>
        )}
        {/* <button 
            className={styles['modal-btn-down']}
            onClick={() => setIsVisible(false)}
        >
          На головну      
        </button> */}
        <a
          className={styles["modal-btn-down"]}
          href="https://send.monobank.ua/jar/4jhbEszhq6"
          rel="noreferrer"
          target="_blank"
        >
          На крила
        </a>
        <button
          className={styles["modal-btn-close"]}
          onClick={() => setIsVisible(false)}
        ></button>
      </div>
    </div>
  );
};

const View = ({ data, icon }) => {
  return (
    <div className={styles["modal-wrapper"]}>
      {data.map(({ donor, donationAmount, donationDate }, i) => (
        <div className={styles["donor-wrapper"]} key={i}>
          <div className={styles["donor"]}>
            <img src={icon} alt="icon" className={styles["donor-img"]} />
            <div className={styles["donor-info"]}>
              <p className={styles["donor-title"]}>{donor}</p>
              <p className={styles["donor-date"]}>{donationDate}</p>
            </div>
          </div>
          <div className={styles["amount"]}>{donationAmount} UAH</div>
        </div>
      ))}
    </div>
  );
};

export default JarModal;

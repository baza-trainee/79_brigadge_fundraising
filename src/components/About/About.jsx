import React from "react";
import Container from "../layouts/Container/Container";
import styles from "./About.module.css";
import logo from "../../assets/img/about/Logo_brygada.svg";
import backgroundImage from "../../assets/img/about/Fon1.svg";

const About = () => {
  return (
    <section className={styles["about"]} id="1">
      <Container>
        <div className={styles["about-wrapper"]}>
          <h2 className={styles["about-title"]}>Про бригаду та проєкт</h2>
          <div className={styles["about-content-wrapper"]}>
            <p className={styles["about-text"]}>
              79-та окрема десантно-штурмова бригада, військовий підрозділ
              Українських Збройних Сил, знаходиться у місті Миколаїв і має
              вражаючий досвід бойових дій, у тому числі в районах, де
              найсерйозніша загроза: Донецький аеропорт, Волноваха, Слов'янськ,
              Дебальцеве та інші.
              <br /> <br /> Наша співпраця з благодійним фондом "Герої України"
              важлива більше ніж будь-коли. Ми збираємо кошти для підтримки
              експериментального загону "Злі Птахи", який працює над розробкою
              українського продукту - комплексу безпілотного літального апарату
              "Бекфаєр". Від нас залежить наскільки швидко вони будуть на фронті
              і коли вони почнуть ефективно ліквідувати загрози від наших
              ворогів.
              <br /> <br />
              Наша мета - зібрати 250 000 гривень для підтримки цього важливого
              проєкту і приєднатися до загального зусилля у забезпеченні безпеки
              та оборони України.
            </p>
            <img
              className={styles["about-image"]}
              src={logo}
              alt="brigade-logo"
            />
          </div>
        </div>
      </Container>
      <img
        className={styles["background-image"]}
        src={backgroundImage}
        alt=""
      />
    </section>
  );
};

export default About;

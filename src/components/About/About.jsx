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
          <h2 className={styles["about-title"]}>Про підрозділ та проєкт</h2>
          <div className={styles["about-content-wrapper"]}>
            <img
              className={styles["about-image"]}
              src={logo}
              alt="brigade-logo"
            />
            <p className={styles["about-text"]}>
              Зведений загін ВМС та Сухопутних військ "Злі Птахи" - підрозділ
              ЗСУ, який щоденно виконує бойові місії на лінії фронту,
              використовуючи БпЛА "Бекфаєр" власної розробки, успішно вражаючи
              різноманітні цілі далеко в тилу ворога. Водночас дослідницька
              частина підрозділу працює над постійним впровадженням покращень в
              конструкцію та збільшенням ефективності існуючих моделей, а також
              розробкою подальших модифікацій
              <br /> <br /> Наша співпраця з благодійним фондом "Герої України"
              важлива більше ніж будь-коли. Ми збираємо кошти для підтримки
              експериментального загону "Злі Птахи", який працює над розробкою
              українського продукту - комплексу безпілотного літального апарату
              "Бекфаєр". Від нас залежить наскільки швидко вони будуть на фронті
              і коли вони почнуть ефективно ліквідувати загрози від наших
              ворогів
              <br /> <br />
              Наша мета - зібрати 50 000 гривень для підтримки цього важливого
              проєкту і приєднатися до загального зусилля у забезпеченні безпеки
              та оборони України
            </p>
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

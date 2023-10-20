import React, { useId } from "react";
import styles from "./Backfire.module.css";
import Container from "../layouts/Container/Container";
import {
  uav,
  controlPanel,
  chart,
  bus,
  tools,
  fon2,
} from "../../assets/img/backfire";

const Backfire = () => {
  const examples = [
    {
      name: `
      Три БпЛА 
      "Бекфаєр К1"
      `,
      image: uav,
      id: useId(),
    },
    {
      name: `
      Центр 
      керування`,
      image: controlPanel,
      id: useId(),
    },
    {
      name: `Пускова установка`,
      image: chart,
      id: useId(),
    },
    {
      name: `Облаштування транспортного засобу`,
      image: bus,
      id: useId(),
    },
    {
      name: `Запасні частини, інструменти та приладдя`,
      image: tools,
      id: useId(),
    },
  ];
  const benefits = [
    {
      title: "Невидимий",
      text: "Для засобів радіоелектронної розвідки він залишається незамітним завдяки відсутності постійного зв'язку та захищеній GPS антені.",
      id: useId(),
    },
    {
      title: "Автономний",
      text: "БпЛА летить автономно по заданому маршруту без постійного зв'язку з оператором.",
      id: useId(),
    },
    {
      title: "Точний",
      text: "Забезпечує точні удари завдяки балістичному калькулятору, який розраховує точку скидання боєприпасів з урахуванням положення та швидкості літака.",
      id: useId(),
    },
    {
      title: "Ефективний",
      text: "Вже успішно використовується на фронті для нейтралізації різноманітних ворожих цілей, включаючи особовий склад, артилерію та будівлі.",
      id: useId(),
    },
    {
      title: "Небезпечний для ворога",
      text: "Корисне навантаження до 4 кг вибухівкі",
      id: useId(),
    },
    {
      title: "Витривалий",
      text: "Дальність польоту 35км",
      id: useId(),
    },
  ];
  return (
    <section className={styles["backfire"]} id="3">
      <Container>
        <div>
          <h1 className={styles["backfire-title"]}>Бекфаєр К1 Комплекс</h1>
          <div className={styles["backfire-content"]}>
            <div className={styles["backfire-content-examples"]}>
              {examples.map(({ image, name, id }) => (
                <div
                  key={id}
                  className={styles["backfire-content-example-wrapper"]}
                >
                  <div className={styles["backfire-content-example"]}>
                    <img
                      className={styles["backfire-content-example-image"]}
                      src={image}
                      alt={name}
                    />
                    <span
                      className={styles["backfire-content-example-image-title"]}
                    >
                      {name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles["backfire-content-benefits"]}>
              <div className={styles["backfire-content-benefits-banner"]}>
                <h1
                  className={styles["backfire-content-benefits-banner-title"]}
                >
                  Основні переваги "Бекфаєр К1" ударного БпЛА
                </h1>
              </div>
              <div className={styles["backfire-content-benefits-list"]}>
                {benefits.map(({ id, title, text }, i) => (
                  <div
                    key={id}
                    className={styles["backfire-content-benefits-list-item"]}
                  >
                    <div
                      className={
                        styles["backfire-content-benefits-list-item-icon"]
                      }
                    >
                      <span
                        className={
                          styles["backfire-content-benefits-list-item-count"]
                        }
                      >
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h3
                        className={
                          styles["backfire-content-benefits-list-item-title"]
                        }
                      >
                        {title}
                      </h3>
                      <p
                        className={
                          styles["backfire-content-benefits-list-item-text"]
                        }
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <img
        className={styles["backfire-background-image"]}
        src={fon2}
        alt="bg-fon"
      />
    </section>
  );
};

export default Backfire;

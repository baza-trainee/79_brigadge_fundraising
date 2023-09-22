import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <section className={styles.wings}>
        <h3>На Крила</h3>
        <div className={styles.wingsRov}>
          <div className={styles.wingsBlock}>
            <img src="./img/wings-vector_1.svg" alt="vector" />
            <p className={styles.wingsBlockText}>Окриляй злих птахів, знищуй ворогів</p>
          </div>
          <div className={styles.wingsBlock}>
            <img src="./img/wings-vector_2.svg" alt="vector" />
            <div className={styles.wingsBlockImg}>
              <img src="./img/airfield.jpg" alt="airfield" />
              <div className={styles.wingsBlockImgContent}>
                <img src="./img/cotton.gif" alt="cotton" />
                <button className={styles.wingsBlockButton}><a href="#">Донат на крила</a></button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wingsInfo}>Жодний з <span className={styles.spanText}>БпЛА “Бекфаєр”</span> за рік роботи не був втрачений у бойових діях. Невидимі і недосяжні для ворога.</div>
      </section>
    </div>
  );
};
export default Main;

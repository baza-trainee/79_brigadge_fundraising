import styles from "./Main.module.css";
import About from "../../About/About";
import Importance from "../../Importance/Importance";

const Main = () => {
  return (
    <div className={styles.main}>
      <About />
      <Importance />
    </div>
  );
};
export default Main;

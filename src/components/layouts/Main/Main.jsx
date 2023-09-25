import styles from "./Main.module.css";
import About from "../../About/About";
import Backfire from "../../Backfire/Backfire";
import Wings from "../../Wings/Wings";

const Main = () => {
  return (
    <div className={styles.main}>
      <About />
      <Backfire />
      <Wings />
    </div>
  );
};
export default Main;

import styles from "./Main.module.css";
import About from "../../About/About";
import Backfire from "../../Backfire/Backfire";

const Main = () => {
  return (
    <div className={styles.main}>
      <About />
      <Backfire />
    </div>
  );
};
export default Main;

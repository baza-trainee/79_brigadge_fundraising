import styles from "./Main.module.css";

import About from "../../About/About";
import Backfire from "../../Backfire/Backfire";
import Strength from '../../Strength/Strength';
import Wings from "../../Wings/Wings";
import Importance from "../../Importance/Importance";


const Main = () => {
  return (
    <div className={styles.main}>
      <About />
      <Importance />
      <Backfire />
      <Strength />
      <Wings />
    </div>
  );
};
export default Main;

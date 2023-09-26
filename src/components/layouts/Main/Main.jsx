import UkrainianWings from '../../UkrainianWings/UkrainianWings';
import About from '../../About/About';
import Backfire from "../../Backfire/Backfire";
import Strength from '../../Strength/Strength';
import Wings from "../../Wings/Wings";
import Importance from "../../Importance/Importance";

import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <UkrainianWings />
      <About />
      <Importance />
      <Backfire />
      <Strength />
      <Wings />
    </div>
  );
};
export default Main;



import styles from './Main.module.css';
import About from '../../About/About';
import Wings from '../../Wings/Wings';
import Importance from "../../Importance/Importance";


const Main = () => {
  return (
    <div className={styles.main}>
      <About />
      <Importance />
      <Wings />
    </div>
  );
};
export default Main;

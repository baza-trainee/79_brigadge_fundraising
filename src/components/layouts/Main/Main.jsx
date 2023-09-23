import styles from './Main.module.css';
import About from '../../About/About';
import Strength from '../../Strength/Strength';

const Main = () => {
  return (
    <div className={styles.main}>
      <About />
      <Strength />
    </div>
  );
};
export default Main;

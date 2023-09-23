import UkrainianWings from '../../UkrainianWings/UkrainianWings';
import About from '../../About/About';

import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <UkrainianWings />
      <About />
    </div>
  );
};
export default Main;

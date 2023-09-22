import styles from './Main.module.css';
import About from '../../About/About';
import Wings from '../../Wings/Wings';

const Main = () => {
  return (
    <div className={styles.main}>
      <About />
      <Wings />
    </div>
  );
};
export default Main;

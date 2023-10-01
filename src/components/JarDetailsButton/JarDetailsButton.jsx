import styles from "./JarDetailsButton.module.css";

const JarDetailsButton = ({ modal, children }) => {
  return (
    <button className={styles.button} onClick={modal}>
      {children}
    </button>
  );
};

export default JarDetailsButton;

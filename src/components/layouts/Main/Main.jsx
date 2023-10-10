import { useState } from 'react';

import UkrainianWings from '../../UkrainianWings/UkrainianWings';
import About from '../../About/About';
import Backfire from '../../Backfire/Backfire';
import Strength from '../../Strength/Strength';
import Wings from '../../Wings/Wings';
import Importance from '../../Importance/Importance';
import ProgressBar from '../../ProgressBar/ProgressBar';
import JarModal from '../../JarModal/JarModal';

import styles from './Main.module.css';

const Main = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeModal, setActiveModal] = useState(null);

  const openJarModal = (active) => {
    setIsVisible(true)
    setActiveModal(active)
  }

  return (
    <div className={styles.main}>
      <UkrainianWings />
      <ProgressBar openModal={openJarModal}/>
      <About />
      <Importance />
      <Backfire />
      <Wings />
      <Strength />
      <JarModal 
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
    </div>
  );
};
export default Main;
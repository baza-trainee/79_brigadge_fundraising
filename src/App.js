import { useState } from 'react';

import Footer from './components/layouts/Footer/Footer';
import Main from './components/layouts/Main/Main';
import Header from './components/layouts/Header/Header';
import { ScrollButton } from './components/ScrollButton/ScrollButton';
import './App.css';
import JarModal from './components/JarModal/JarModal';

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeModal, setActiveModal] = useState(null);
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <JarModal 
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
      <ScrollButton/>
    </div>
  );
}

export default App;

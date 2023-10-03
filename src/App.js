import Footer from './components/layouts/Footer/Footer';
import Main from './components/layouts/Main/Main';
import Header from './components/layouts/Header/Header';
import { ScrollButton } from './components/ScrollButton/ScrollButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <ScrollButton/>
    </div>
  );
}

export default App;

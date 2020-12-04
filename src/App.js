import './App.css';

import 'bootstrap/dist/css/bootstrap.css';




import Card from './components/Cards';
import NavBar from './components/Navbar';

import Slider from './components/Slider';

import Formulaire from './components/Fomrulaire';

import FooterPage from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <Card />
      <Formulaire />
      <FooterPage />
    </div>
  );
}

export default App;

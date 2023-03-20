import './App.css';
import './css/styles.css';

import NavBar from './components/NavBar';
import Explore from './components/Explore';
import Bread from './components/Bread';
import Header from './components/Header';
import CommonSections from './components/CommonSections';
import HelpSection from './components/HelpSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <img className="banner" src="./images/banner.svg" alt="banner" />
      <Explore />
      <Bread />
      <Header />
      <CommonSections />
      <div className="h2withbutton">
        <h2>Laptop Types</h2>
        <button className="button2">See All Laptops</button>
      </div>

      <div></div>

      <div className="h2withbutton">
        <h2>By Operating System</h2>
        <button className="button2">See All Laptops</button>
      </div>

      <div></div>

      <div className="h2withbutton">
        <h2>By Screen Size</h2>
        <button className="button2">See All Laptops</button>
      </div>
      <HelpSection />
      <Footer />
    </div>
  );
}

export default App;

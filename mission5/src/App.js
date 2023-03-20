import { useState, useEffect } from 'react';
import './App.css';
import './css/styles.css';

import NavBar from './components/NavBar';
import Explore from './components/Explore';
import Bread from './components/Bread';
import Header from './components/Header';
import CommonSections from './components/CommonSections';
import HelpSection from './components/HelpSection';
import Footer from './components/Footer';
import ListingCard from './components/ListingCard';
import Os from './components/Os';
import ScreenSize from './components/ScreenSize';

function App() {
  const [laptops, setLaptops] = useState([]);
  const [laptopTypes, setLaptopTypes] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.108:3001/api/laptops')
      .then((response) => response.json())
      .then((data) => {
        const filteredLaptops = data.filter((laptop) => laptop.laptopType);
        setLaptops(filteredLaptops);
        const types = filteredLaptops.map((laptop) => laptop.laptopnamed);
        setLaptopTypes(types);
        console.log(laptops);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <img className="banner" src="./images/banner.svg" alt="banner" />
      <Explore laptopTypes={laptops} />
      <Bread />
      <Header />
      <CommonSections />
      <div className="h2withbutton">
        <h2>Laptop Types</h2>
        <button className="button2">See All Laptops</button>
      </div>

      <div className="listing-container">
        {laptops.map((laptop) => (
          <ListingCard key={laptop._id} laptop={laptop} />
        ))}
      </div>

      <div className="h2withbutton">
        <h2>By Operating System</h2>
        <button className="button2">See All Laptops</button>
      </div>

      <Os />

      <div className="h2withbutton">
        <h2>By Screen Size</h2>
        <button className="button2">See All Laptops</button>
      </div>
      <ScreenSize />
      <HelpSection />
      <Footer />
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Herosection from '../components/Herosection';
import GarriComponent from '../components/GarriComponent';
import HappyClient from '../components/HappyClient';
import PopularQuote from '../components/PopularQuote';
import Footer from '../components/Footer';


import Welcome from '../components/Welcome';

const Homepage = () => {

    const [welcome, setWelcome] = useState(false);

    const handlePageLoad = () => {
      setTimeout(() => {
        setWelcome(true);
      }, 2000);
    };

  useEffect(() => {
    handlePageLoad();
  }, []);

  return (
    <div className='relative'>
      <Navbar />
      <Herosection />
      <GarriComponent />
      <HappyClient />
      <PopularQuote />
      <Footer />
      <Welcome welcome={welcome} />
    </div>
  )
}

export default Homepage;

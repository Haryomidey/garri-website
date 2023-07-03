import React from 'react';
import Navbar from '../components/Navbar';
import Herosection from '../components/Herosection';
import GarriComponent from '../components/GarriComponent';
import HappyClient from '../components/HappyClient';
import PopularQuote from '../components/PopularQuote';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <GarriComponent />
      <HappyClient />
      <PopularQuote />
      <Footer />
    </div>
  )
}

export default Homepage;

import React from 'react';
import Header from '../components/Header';
import FrontSlider from '../components/FrontSlider';
import BestSeller from '../components/BestSeller';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <FrontSlider />
      <BestSeller />
    </div>
  );
}

export default Home;
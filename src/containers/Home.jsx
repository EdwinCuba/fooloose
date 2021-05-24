import React from 'react';
import { connect } from 'react-redux';
import FrontSlider from '../components/FrontSlider';
import Section from '../components/Section';
import Brands from '../components/Brands';
import Features from '../components/Features';
import FastShip from '../components/FastShip';

const Home = (props) => {
  const { bestSeller, newArrival } = props;

  return (
    <div className="Home">
      <FrontSlider />
      <Section section={bestSeller} products={bestSeller.products.slice(0, 4)} />
      <Brands />
      <Section section={newArrival} products={newArrival.products.slice(0, 4)} />
      <FastShip />
      <Features />
    </div>
  );
}

const mapStateToProps = state => {
  return{
    bestSeller: state.bestSeller,
    newArrival: state.newArrival
  }
}

export default connect(mapStateToProps, null)(Home);
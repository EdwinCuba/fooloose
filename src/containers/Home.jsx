import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import FrontSlider from '../components/FrontSlider';
import Section from '../components/Section';
import Brands from '../components/Brands';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Home = (props) => {
  const { bestSeller, newArrival } = props;

  return (
    <div className="Home">
      <Header />
      <FrontSlider />
      <Section section={bestSeller} products={bestSeller.products} />
      <Brands />
      <Section section={newArrival} products={newArrival.products} />
      <Features />
      <Footer />
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
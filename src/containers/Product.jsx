import React from 'react';
import FastShip from '../components/FastShip';
import ProductInfo from '../components/ProductInfo';

const Product = (props) => {
  const { id } = props.match.params;

  return (
    <div className="Product">
      <FastShip />
      <ProductInfo id={id} />
    </div>
  );
}

export default Product;
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addProductToCart } from '../../redux/actions';
import getProduct from '../../utils/getProduct';
import './index.scss';

const ProductInfo = (props) => {
  const { id } = props;
  const [product, setProduct] = useState({});

  useEffect(async () => {
    const product = await getProduct(id);
    setProduct(product);
  }, []);

  const addProduct = () => {
    props.addProductToCart(product);
    console.log('add');
  }

 return (
   <div className="ProductInfo">
    {product && (
      <div className="container">
        <div className="image">
          <img src={product.imageURL} width='100%' alt="photo" />
        </div>

        <div className="info">
          <h2>{product.title}</h2>
          <div className="stats">
            <span className='price'>{`S/. ${product.price}`}</span>
            <span className='stock'>{`Stock: ${product.stock}`}</span>
          </div>
        </div>

        <div className="buy">
          <button>Comprar ahora</button>
          <button onClick={addProduct}>Agregar al carrito</button>
        </div>

        <hr />

        <div className="desc">
          <h3>Descripción</h3>
          <p>{product.description}</p>
        </div>
      </div>
    )}
   </div>
 ); 
}

const mapDispatchToProps = {
  addProductToCart
}

export default connect(null, mapDispatchToProps)(ProductInfo);
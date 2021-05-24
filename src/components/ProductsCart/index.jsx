import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.scss';

const ProductsCart = (props) => {
  const { cart } = props;

  return (
    <div className="ProductsCart">
      {(cart.length > 0) ? (
        <div className="container">
          {cart.map(product => {
            return(
              <div className="item" key={product._id}>
                <img src={product.imageURL} height={100} alt="productImage" />
                <div className="info">
                  <div className="des">
                    <h3>{product.title}</h3>
                    <span>{`S/. ${product.price}`}</span>
                  </div>
                  <span>Cantidad: 1</span>
                </div>
              </div>
            )
          })}

          <button>Comprar ahora</button>
        </div>
      )
      :
      (
        <div className="empty">
          <p>¿Qué esperas? Agrega productos a tu carrito
            <Link to='/products'>Aquí</Link>
          </p>
        </div>
      )
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(ProductsCart);
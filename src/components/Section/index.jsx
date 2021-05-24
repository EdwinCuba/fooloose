import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './index.scss';

const Section = (props) => {
  const { section, products } = props;

  const redirectToProductInfo = (id) => {
    props.history.push(`/products/${id}`);
  }

  return(
    <div className="Section">
      
      <div className={section ? section.name : ''}>
        {section && (
          <div className="title">
            <h1>{section.title}</h1>
            <Link to={`/products?category=${section.name}`}>Ver Todos</Link>
          </div>
        )}

        <div className="products">
          {
            products.map(product => (
              <div key={product._id} className="item" onClick={() => redirectToProductInfo(product._id)}>
                <img src={product.imageURL} width={100} alt="" />
                <h6>{`${product.title}`}</h6>
                <span>{`S/ ${product.price}`}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default withRouter(Section);
import React from 'react';
import './index.scss';

const Section = (props) => {
  const { section, products } = props;

  return(
    <div className="Section">
      <div className={section.name}>
        <div className="title">
          <h1>{section.title}</h1>
          <a href="#">Ver Todos</a>
        </div>

        <div className="products">
          {
            products.map(product => (
              <div key={product._id} className="item">
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

export default Section;
import React from 'react';
import './index.scss';

const BestSeller = () => {
  return (
    <div className="BestSeller">
      <div className="title">
        <h1>¡Los más vendidos!</h1>
        <a href="#">Ver Todos</a>
      </div>

      <div className="products">
        <div className="item">
          <img src="https://passarelape.vtexassets.com/arquivos/ids/1116249-300-300?width=300&height=300&aspect=true" width={100} alt="" />
          <h6>Mejor producto del mundo mundial irremplasables inconsevibles</h6>
          <span>S/. 999</span>
        </div>
        <div className="item">
          <img src="https://passarelape.vtexassets.com/arquivos/ids/1116249-300-300?width=300&height=300&aspect=true" width={100} alt="" />
          <h6>Mejor producto del mundo</h6>
          <span>S/. 999</span>
        </div>
        <div className="item">
          <img src="https://passarelape.vtexassets.com/arquivos/ids/1116249-300-300?width=300&height=300&aspect=true" width={100} alt="" />
          <h6>Mejor producto del mundo</h6>
          <span>S/. 999</span>
        </div>
        <div className="item">
          <img src="https://passarelape.vtexassets.com/arquivos/ids/1116249-300-300?width=300&height=300&aspect=true" width={100} alt="" />
          <h6>Mejor producto del mundo</h6>
          <span>S/. 999</span>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
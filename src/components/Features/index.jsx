import React from 'react';
import './index.scss';

const Features = () => {
  return (
    <div className="Features">
      <div className="item">
        <img src="https://footloose.vtexassets.com/assets/vtex/assets-builder/footloose.store-theme-ftl/2.0.70/icons/reftl-bolsa-info___130674983faceb8e8989e3f70c62330f.svg" width={60} alt="" />
        <p>Compra online y retira en tienda</p>
        <button><a href="">Ver tiendas</a></button>
      </div>
      
      <div className="item">
        <img src="https://footloose.vtexassets.com/assets/vtex/assets-builder/footloose.store-theme-ftl/2.0.70/icons/reftl-chanchito-info___b601b46e69b3e69897efdbce5dac826b.svg" width={60} alt="" />
        <p>Desde compras de S/. 130</p>        
        <button><a href="">Comprar</a></button>
      </div>
      
      <div className="item">
        <img src="https://footloose.vtexassets.com/assets/vtex/assets-builder/footloose.store-theme-ftl/2.0.70/icons/reftl-revisa-boleta___9ccc12514ebcc7b7977b5130c07808a3.svg" width={60} alt="" />
        <p>Verifícalo aquí, ver boleta</p>
        <button><a href="">Ver aquí</a></button>
      </div>
      
      <div className="item">
        <img src="https://footloose.vtexassets.com/assets/vtex/assets-builder/footloose.store-theme-ftl/2.0.70/icons/reftl-envio-info___a19b4248da13bc1c52c909324e921b70.svg" width={60} alt="" />
        <p>Fácil y rapido solo con tu DNI</p>
        <button><a href="">Mi pedido</a></button>
      </div>
      
      <div className="item">
        <img src="https://footloose.vtexassets.com/assets/vtex/assets-builder/footloose.store-theme-ftl/2.0.70/icons/reftl-libro-info___c389e770d2f6f3aac66bea6198ac5bf5.svg" width={60} alt="" />
        <p>Porque nos importa tu opinión</p>
        <button><a href="">Aquí</a></button>
      </div>
    </div>
  );
}

export default Features;
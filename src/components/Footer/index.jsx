import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className="newsletter">
        <div className="title">
          <h3>RECIBE NUESTRAS NOTIIFICACIONES</h3>
          <p> Y obtén un descuento de 10% en tu próxima compra online.</p>
        </div>

        <div className="form">
          <div className="input">
            <input type="text" placeholder='Email' />
            <button>Suscribirme</button>
          </div>

          <div className="terms">
            <input type="checkbox"/>
            <span>Acepto los <a href="#">términos y condiciones.</a></span>
          </div>
        </div>
      </div>

      <hr />

      <nav>
        <ul>
          <li className='title'><a href="#">Centro de soporte <FontAwesomeIcon icon={faChevronUp} /></a></li>
          <li className='title'><a href="#">Términos y condiciones <FontAwesomeIcon icon={faChevronUp} /></a></li>
          <li className='title'><a href="#">Sobre footloose <FontAwesomeIcon icon={faChevronUp} /></a></li>
          <li className='title'><a href="#">Tiendas <FontAwesomeIcon icon={faChevronUp} /></a></li>
          <li className='title'><a href="#">Descubre más <FontAwesomeIcon icon={faChevronUp} /></a></li>
          <li className='title'><a href="#">Contáctanos <FontAwesomeIcon icon={faChevronUp} /></a></li>
        </ul>
      </nav>

      <div className="socials">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>

      <span>Hecho con Amor para el Perú</span>
    </footer>
  );
}

export default Footer;
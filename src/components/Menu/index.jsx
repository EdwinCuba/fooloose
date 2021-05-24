import React from 'react';
import Logo from '../../assets/static/logos/logo-footloose.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Menu = (props) => {
  const { open, setOpen } = props;

  return(
    <div className="Menu" style={{left: open ? 0 : '-100%'}} >
      <div className="header">
        <Link to='/'><img src={Logo} alt="Logo" height={40} /></Link>
        <span
          onClick={() => { setOpen(false) }}  
        ><FontAwesomeIcon icon={faTimes} /></span>
      </div>

      <nav>
        <ul>
          <li><a href='#'>Mujer <FontAwesomeIcon icon={faChevronRight} /></a></li>
          <li><a href='#'>Hombre <FontAwesomeIcon icon={faChevronRight} /></a></li>
          <li><a href='#'>Niños <FontAwesomeIcon icon={faChevronRight} /></a></li>
          <li><a href='#'>Msrcas <FontAwesomeIcon icon={faChevronRight} /></a></li>
          <li><a href='#'>Colección <FontAwesomeIcon icon={faChevronRight} /></a></li>
          <li><a href='#'>Sale <FontAwesomeIcon icon={faChevronRight} /></a></li>
          <li><a href='#'>Blog <FontAwesomeIcon icon={faChevronRight} /></a></li>
        </ul>
      </nav> 
    </div>
  )
}

export default Menu;
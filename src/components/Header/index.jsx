import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import Menu from '../Menu';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Header">
      <header>
        <span 
          className="menu-open"
          onClick={() => { setOpen(true) }}
        > <FontAwesomeIcon icon={faBars} /></span>

        <div className="input">
          <span className='search-icon'>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input type="text" />
        </div>

        <div className="user">
          <span className="shipping-cart-icon"><FontAwesomeIcon icon={faShoppingCart} /></span>
          <span className="user-circle-icon"><FontAwesomeIcon icon={faUserCircle} /></span>
        </div>
      </header>

      <Menu  open={open} setOpen={setOpen} />
    </div>
  )
}

export default Header;
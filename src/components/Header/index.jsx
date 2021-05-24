import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu';
import UserInfo from '../UserInfo';
import './index.scss';

const Header = (props) => {
  const { cart, user } = props;

  const [open, setOpen] = useState(false);
  const [openUserInfo, setOpenUserInfo] = useState(false);
  const [input, setInput] = useState('');

  const handleInput = event => {
    setInput(event.target.value);
  }

  const handleEnter = event => {
    if(event.keycode === 13 || event.key === 'Enter'){
      search();
    }
  }

  const search = () => {
    props.history.push(`/products?category=${input}`)
  }

  return (
    <div className="Header">
      <header>
        <span 
          className="menu-open"
          onClick={() => { setOpen(true) }}
        > <FontAwesomeIcon icon={faBars} /></span>

        <div className="input">
          <span className='search-icon'>
            <FontAwesomeIcon icon={faSearch} onClick={search} />
          </span>
          <input type="text" onChange={handleInput} onKeyDown={handleEnter} />
        </div>

        <div className="user">
          <span className="shipping-cart-icon"><Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link> <span>{cart.length}</span></span>
          <span className="user-circle-icon">{
            (!user) ?
              <Link to="/login"><FontAwesomeIcon icon={faUserCircle} /></Link> 
            : 
            <FontAwesomeIcon icon={faUserCircle} onClick={() => setOpenUserInfo(true)} />
          }</span>
        </div>
      </header>

      <Menu  open={open} setOpen={setOpen} />
      {user &&
        <UserInfo openUserInfo={openUserInfo} setOpenUserInfo={setOpenUserInfo} user={user} />
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    cart: state.cart
  }
}

export default withRouter(connect(mapStateToProps, null)(Header));
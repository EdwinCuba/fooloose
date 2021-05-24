import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/static/logos/logo-footloose.svg';
import './index.scss';

const UserInfo = (props) => {
  const { openUserInfo, setOpenUserInfo, user } = props

  return (
    <div className='UserInfo' style={{right: !openUserInfo ? '-100%' : '0'}} >
      <div className="header">
        <span
          onClick={() => { setOpenUserInfo(false) }}  
        ><FontAwesomeIcon icon={faTimes} /></span>
         <Link to='/'><img src={Logo} alt="Logo" height={40} /></Link>
      </div>

      <div className="container">
        <span className='userImage'>
          <FontAwesomeIcon icon={faUserCircle}/>
        </span>

        <h2>{user.username}</h2>
        <h3>{user.email}</h3>
      </div>
    </div>
  );
}

export default UserInfo;
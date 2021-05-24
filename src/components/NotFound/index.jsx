import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='NotFound' style={{
      width: '100%',
      height: '50vh',
      backgroundColor: '#3e1151',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{
        fontSize: '5rem',
        color: 'white',
        fontWeight: 700,
      }}>404</h1>

      <p style={{
        color: 'white',
        fontSize: '2rem',
        padding: '20px',
        textAlign: 'center',
        fontWeight: '500'
      }}>La página a la que intenta acceder no existe</p>

      <Link to='/' style={{
        textDecoration: 'underline',
        fontSize: '1.5rem'
      }}>Regresar</Link>
    </div>
  );
}

export default NotFound;
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Facebook from '../../assets/static/logos/facebook-icon.svg';
import Google from '../../assets/static/logos/google-icon.svg';
import registerRequest from '../../utils/auth/registerRequest';
import validateEmail from '../../utils/auth/validateEmail';
import './index.scss';

const RegisterForm = (props) => {
  const [form, setForm] = useState({
    username: '',
    email: ''
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if(!form.username) return alert('Debe ingresar un usuario');

    const emailIsValid = validateEmail(form.email);
    if(!emailIsValid) return alert('Email inválido');

    if(!form.password) return alert('Debe ingresar una contraseña');

    const data = await registerRequest(form);
    if(data.status === 'failed') return alert('El correo o usuario ya existen');

    props.history.push('/login');
  }

  return (
    <div className="RegisterForm">
      <div className="container">
        <div className="title">
          <img src='https://footloose.vtexassets.com/assets/vtex/assets-builder/footloose.store-theme-ftl/2.0.70/footloose-logo___34b68aa3743801440c14aea95a7da3dc.svg' width={100} alt="Logo" />
          <h2>Regístrate</h2>
        </div>

        <form action="#" className='form' onSubmit={handleSubmit}>
          <div className='user'>
            <input
              name="username"
              className="input"
              type="text"
              placeholder="Usuario"
              onChange={handleInput}
            />
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button type="submit" className="button">Registrarme</button>          
          </div>
        </form>

        <div className="socials">
          <div><img src={Facebook} height={20} alt='facebook-logo'/> Inicia sesión con facebook</div>
          <div><img src={Google} height={20} alt='google-logo'/> Inicia sesión con google</div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(RegisterForm);
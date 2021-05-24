import React, { useState } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setToken, setUser } from '../../redux/actions';
import Facebook from '../../assets/static/logos/facebook-icon.svg';
import Google from '../../assets/static/logos/google-icon.svg';
import validateEmail from '../../utils/auth/validateEmail';
import loginRequest from '../../utils/auth/loginRequest';
import './index.scss';

const LoginForm = props => {
  const { isLogged } = props;

  const [form, setForm] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const emailIsValid = validateEmail(form.email);
    if(!emailIsValid){
      return alert('Email inválido');
    }

    const data = await loginRequest(form);
    if(!data.token){
      return alert('Contraseña o correo incorrecto.');
    }

    props.setToken(data.token);
    props.setUser(data.user);

    props.history.push('/');
  }

  return (
    <div className="LoginForm">
      {!isLogged ? (
        <div className="container">
          <div className="title">
            <img src='https://footloose.vtexassets.com/assets/vtex/assets-builder/footloose.store-theme-ftl/2.0.70/footloose-logo___34b68aa3743801440c14aea95a7da3dc.svg' width={100} alt="Logo" />
            <h2>Inicia sesión</h2>
          </div>

          <form action="#" className='form' onSubmit={handleSubmit}>
            <div className='user'>
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
              <button type="submit" className="button">Iniciar sesión</button>          
            </div>
          </form>

          <div className="remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>

          <div className="socials">
            <div><img src={Facebook} height={20} alt='facebook-logo'/> Inicia sesión con facebook</div>
            <div><img src={Google} height={20} alt='google-logo'/> Inicia sesión con google</div>
          </div>

          <p className="register">No tienes ninguna cuenta
            <Link to="/register">
              Regístrate
            </Link>
          </p>
        </div>
      )
      :
      (
        <Redirect to='/' />
      )
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLogged: state.isLogged
  }
}

const mapDispatchToProps = {
  setToken,
  setUser
}

export default withRouter(connect(mapStateToProps ,mapDispatchToProps)(LoginForm));
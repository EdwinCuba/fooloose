import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Products from '../containers/Products';
import Product from '../containers/Product';
import Cart from '../containers/Cart';
import NotFound from '../components/NotFound';
import '../assets/utils/styles/globalStyle.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} /> 
          <Route exact path='/register' component={Register} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/products/:id' component={Product} />
          <Route exact path='/cart' component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
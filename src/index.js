import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './routes/App';
import reducer from './redux/reducer';
import useInitialState from './redux/initialState';

const init = async () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const initialState = await useInitialState();

  const store = createStore(reducer, initialState, composeEnhancers());
  
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    , document.getElementById('root')
  );
}
init();
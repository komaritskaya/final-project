import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'moment/locale/ru';

import App from './components/app/app';
// import { fetchAllPokemons } from './actions/actionCreators';
// import { SHOWN_POKEMONS_COUNT } from './const';

// store.dispatch(fetchAllPokemons(0, SHOWN_POKEMONS_COUNT));
// store.dispatch(fetchUserPokemons());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#root'),
);

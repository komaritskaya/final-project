import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'moment/locale/ru';
// import {movies, currentMovie} from './mocks/films';
import { reducer } from './reducers/reducer';

import App from './components/app/app';

const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#root'),
);

import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/app';
// import addReducer from '../reducers/add';
// import networkReducer from '../reducers/network';

const reducer = combineReducers({
  app: appReducer,
  // add: addReducer,
  // network: networkReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

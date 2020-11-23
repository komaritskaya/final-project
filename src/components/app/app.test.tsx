import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';
import { pokemons } from '../../mocks/pokemons';

const mockStore = configureStore([]);

it('Render App', () => {
  const store = mockStore({
    pokemons,
    shownPokemonsCount: 1,
  });

  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>,
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

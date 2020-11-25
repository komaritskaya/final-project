import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import PokemonPage from './pokemon-page';
import pokemons from '../../mocks/pokemons';

const mockStore = configureStore([]);

it('Should PokemonPage component render correctly', () => {
  const store = mockStore({
    data: {
      pokemons,
    },
  });

  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <PokemonPage />
        </Router>
      </Provider>,
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

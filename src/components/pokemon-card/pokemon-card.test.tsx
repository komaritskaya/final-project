import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import PokemonCard from './pokemon-card';
import pokemons from '../../mocks/pokemons';

const mockStore = configureStore([]);

it('Should Pokemon Card component render correctly', () => {
  const store = mockStore({
    pokemons,
  });

  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <PokemonCard
            pokemon={pokemons[0]}
          />
        </Router>
      </Provider>,
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

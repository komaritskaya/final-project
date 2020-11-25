import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import PokemonsList from './pokemons-list';
import pokemons from '../../mocks/pokemons';

const mockStore = configureStore([]);

it('Should Pokemons List component render correctly', () => {
  const store = mockStore({
    data: {
      pokemons,
    },
  });

  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <PokemonsList
            pokemons={pokemons}
          />
        </Router>
      </Provider>,
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

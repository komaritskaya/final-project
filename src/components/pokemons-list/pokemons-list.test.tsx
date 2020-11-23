import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import PokemonsList from './pokemons-list';
import { pokemons } from '../../mocks/pokemons';

it('Should Pokemons List component render correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <PokemonsList
          pokemons={pokemons}
        />
      </Router>,
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import PokemonCard from './pokemon-card';
import { pokemons } from '../../mocks/pokemons';

it('Should Pokemon Card component render correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <PokemonCard
          pokemon={pokemons[0]}
        />
      </Router>,
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

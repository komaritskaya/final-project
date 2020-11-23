import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import PokemonPage from './pokemon-page';
import { pokemons } from '../../mocks/pokemons';

it('Should PokemonPage component render correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <PokemonPage pokemons={pokemons} />)
      </Router>,
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

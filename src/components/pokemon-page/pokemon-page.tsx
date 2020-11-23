import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { RawPokemon } from '../../types';

interface PokemonPageProps {
  pokemons: RawPokemon[];
  // currentMovie: {
  //   title: string;
  //   genre: string;
  //   year: number;
  // };
}

type PropType = RouteComponentProps<{id: string}> & PokemonPageProps;

const PokemonPage: React.FC<PropType> = ({
  pokemons,
  match: { params: { id } },
}: PropType) => {
  const pokemon = pokemons.find((item) => item.id.toString() === id) || pokemons[0];

  return (
    <>
      <b>{pokemon.name}</b>
      <p>{pokemon.id}</p>
    </>
  );
};

export default withRouter(PokemonPage);

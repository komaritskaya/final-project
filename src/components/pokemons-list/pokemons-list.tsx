import React from 'react';
import MaterialGrid from '../../material/grid';
import PokemonCard from '../pokemon-card/pokemon-card';
import { Pokemon } from '../../types';

interface PokemonsListProps {
  pokemons: Pokemon[];
}

const PokemonsList: React.FC<PokemonsListProps> = ({
  pokemons,
}: PokemonsListProps) => (
  <MaterialGrid>
    {
    pokemons.map((pokemon) => (
      <PokemonCard
        key={pokemon.id}
        pokemon={pokemon}
      />
    ))
  }
  </MaterialGrid>
);

export default PokemonsList;

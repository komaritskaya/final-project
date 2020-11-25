import React from 'react';
import PokemonCard from '../pokemon-card/pokemon-card';
import { Pokemon } from '../../types';

interface PokemonsListProps {
  pokemons: Pokemon[];
}

const PokemonsList: React.FC<PokemonsListProps> = ({
  pokemons,
}: PokemonsListProps) => (
  <div>
    {
      pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))
    }
  </div>
);

export default PokemonsList;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RawPokemon, RootState } from '../../types';
import { ActionCreator } from '../../reducers/reducer';

interface PokemonCardProps {
  pokemon: RawPokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }: PokemonCardProps) => {
  const userPokemons = useSelector((state: RootState) => state.userPokemons);
  const isCaught = userPokemons.find((userPokemon) => userPokemon.id === pokemon.id);

  const dispatch = useDispatch();

  const onCatchButtonClick = (id: number) => {
    dispatch(ActionCreator.catchPokemon(id, new Date()));
  };

  return (
    <div>
      <Link
        to={`/${pokemon.id}`}
      >
        {pokemon.name}
      </Link>
      <button
        type="button"
        onClick={() => onCatchButtonClick(pokemon.id)}
        disabled={isCaught}
      >
        catch
      </button>
      <hr />
    </div>
  );
};

export default PokemonCard;

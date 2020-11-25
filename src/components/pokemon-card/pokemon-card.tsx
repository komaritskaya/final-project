import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pokemon } from '../../types';
import { catchPokemon } from '../../actions/actionCreators';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }: PokemonCardProps) => {
  const dispatch = useDispatch();

  const onCatchButtonClick = (id: number) => {
    dispatch(catchPokemon({ id, catchDate: new Date() }));
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
        disabled={pokemon.isCaught}
      >
        catch
      </button>
      <hr />
    </div>
  );
};

export default PokemonCard;

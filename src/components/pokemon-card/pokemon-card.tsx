import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import MaterialCard from '../../material/card';
import { Pokemon } from '../../types';
import { catchPokemon } from '../../actions/actionCreators';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }: PokemonCardProps) => {
  const dispatch = useDispatch();

  const onCatchButtonClick = useCallback((id: number) => {
    dispatch(catchPokemon({ id, catchDate: new Date() }));
  }, [dispatch]);

  return (
    <MaterialCard
      image={`/img/${pokemon.id}.png`}
      header={pokemon.name}
      buttonText="catch"
      linkAddress={`/${pokemon.id}`}
      buttonClickHandler={() => onCatchButtonClick(pokemon.id)}
      isButtonDisabled={pokemon.isCaught}
    />
  );
};

export default PokemonCard;

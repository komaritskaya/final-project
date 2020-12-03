import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialCard from '../../material/card';
import { Pokemon, State } from '../../types';
import { catchPokemon } from '../../actions/actionCreators';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }: PokemonCardProps) => {
  const dispatch = useDispatch();
  const isCatchPokemonLoading = useSelector((state: State) => state.app.isCatchPokemonLoading);
  const error = useSelector((state: State) => state.app.catchPokemonError);
  const pokemonIdInProgress = useSelector((state: State) => state.app.pokemonIdInProgress);

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
      isButtonDisabled={pokemon.isCaught || isCatchPokemonLoading}
      isLoading={isCatchPokemonLoading && pokemonIdInProgress === pokemon.id}
      isError={error && pokemonIdInProgress === pokemon.id}
    />
  );
};

export default PokemonCard;

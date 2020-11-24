import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { RawPokemon, RootState, UserPokemon } from '../../types';

const PokemonPage: React.FC<RouteComponentProps<{id: string}>> = ({
  match: { params: { id } },
}) => {
  const allPokemons = useSelector((state: RootState) => state.pokemons);
  const userPokemons = useSelector((state: RootState) => state.userPokemons);
  const pokemon = allPokemons.find((item: RawPokemon) => item.id.toString() === id)
    || allPokemons[0];
  const isCaught = userPokemons.find((userPokemon: UserPokemon) => userPokemon.id === pokemon.id);

  const getCatchDate = (caughtPokemon: RawPokemon) => {
    const index = userPokemons.findIndex((userPokemon: UserPokemon) => (
      userPokemon.id === caughtPokemon.id
    ));
    if (index === -1) {
      return null;
    }
    return userPokemons[index].catchDate;
  };

  return (
    <>
      <b>{pokemon.name}</b>
      <p>{pokemon.id}</p>
      {
        isCaught ? `Caught on ${moment(getCatchDate(pokemon)).format('MM/DD/YYYY')}` : ''
      }
    </>
  );
};

export default withRouter(PokemonPage);

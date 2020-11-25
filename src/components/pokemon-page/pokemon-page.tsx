import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Pokemon } from '../../types';

const PokemonPage: React.FC<RouteComponentProps<{id: string}>> = ({
  match: { params: { id } },
}) => {
  const pokemons = useSelector((state) => state.app.pokemons);
  const pokemon = pokemons.find((item: Pokemon) => item.id.toString() === id)
    || pokemons[0];
  const { isCaught, catchDate } = pokemon;

  return (
    <>
      <b>{pokemon.name}</b>
      <p>{pokemon.id}</p>
      {
        isCaught ? `Caught on ${moment(catchDate).format('MM/DD/YYYY')}` : ''
      }
    </>
  );
};

export default withRouter(PokemonPage);

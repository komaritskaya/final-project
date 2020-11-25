import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialContainer from '../../material/container';
import MaterialBackLink from '../../material/back-link';
import MaterialExtendedCard from '../../material/extended-card';
import { Pokemon } from '../../types';

const PokemonPage: React.FC<RouteComponentProps<{id: string}>> = ({
  match: { params: { id } },
}) => {
  const pokemons = useSelector((state) => state.data.pokemons);
  const pokemon = pokemons.find((item: Pokemon) => item.id.toString() === id)
    || pokemons[0];
  const { isCaught, catchDate } = pokemon;

  return (
    <MaterialContainer>
      <MaterialBackLink linkAddress="/" />
      <MaterialExtendedCard
        image={`/img/${pokemon.id}.png`}
        header={`${pokemon.name} (id: ${pokemon.id})`}
        description={isCaught ? `Caught on ${moment(catchDate).format('MM/DD/YYYY')}` : ''}
      />
    </MaterialContainer>
  );
};

export default withRouter(PokemonPage);

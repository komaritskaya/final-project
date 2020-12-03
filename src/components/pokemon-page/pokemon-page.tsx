import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialContainer from '../../material/container';
import MaterialBackLink from '../../material/back-link';
import MaterialExtendedCard from '../../material/extended-card';
import MaterialProgress from '../../material/progress';
import MaterialError from '../../material/error';

import { fetchSinglePokemon, fetchSinglePokemonSuccess } from '../../actions/actionCreators';
import { State } from '../../types';

const PokemonPage: React.FC<RouteComponentProps<{id: string}>> = ({
  match: { params: { id } },
}) => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state: State) => state.data.currentPokemon);
  const isFetchSinglePokemonLoading = useSelector(
    (state: State) => state.app.isFetchSinglePokemonLoading,
  );
  const error = useSelector((state: State) => state.app.fetchSinglePokemonError);

  useEffect(() => {
    dispatch(fetchSinglePokemon(id));

    return () => {
      dispatch(fetchSinglePokemonSuccess(null));
    };
  }, [dispatch, id]);

  const renderCard = () => {
    if (isFetchSinglePokemonLoading) {
      return <MaterialProgress />;
    }
    if (error) {
      return <MaterialError />;
    }

    return pokemon && (
      <MaterialExtendedCard
        image={`/img/${pokemon.id}.png`}
        header={`${pokemon.name} (id: ${pokemon.id})`}
        description={pokemon.isCaught ? `Caught on ${format(new Date(pokemon.catchDate), 'MM/dd/yyyy')}` : ''}
      />
    );
  };

  return (
    <MaterialContainer>
      <MaterialBackLink linkAddress="/" />
      {renderCard()}
    </MaterialContainer>
  );
};

export default withRouter(PokemonPage);

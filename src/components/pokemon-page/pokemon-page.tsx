import moment from 'moment';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialContainer from '../../material/container';
import MaterialBackLink from '../../material/back-link';
import MaterialExtendedCard from '../../material/extended-card';
import MaterialProgress from '../../material/progress';
import MaterialError from '../../material/error';

import { fetchSinglePokemon, fetchSinglePokemonSuccess } from '../../actions/actionCreators';

const PokemonPage: React.FC<RouteComponentProps<{id: string}>> = ({
  match: { params: { id } },
}) => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.data.currentPokemon);
  const isLoading = useSelector((state) => state.app.isLoading);
  const error = useSelector((state) => state.app.error);

  useEffect(() => {
    dispatch(fetchSinglePokemon(id));

    return () => {
      dispatch(fetchSinglePokemonSuccess(null));
    };
  }, [dispatch, id]);

  const renderCard = () => {
    if (isLoading) {
      return <MaterialProgress />;
    }
    if (error) {
      return <MaterialError />;
    }

    return pokemon && (
      <MaterialExtendedCard
        image={`/img/${pokemon.id}.png`}
        header={`${pokemon.name} (id: ${pokemon.id})`}
        description={pokemon.isCaught ? `Caught on ${moment(pokemon.catchDate).format('MM/DD/YYYY')}` : ''}
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

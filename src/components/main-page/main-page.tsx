import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialContainer from '../../material/container';
import MaterialProgress from '../../material/progress';
import MaterialError from '../../material/error';
import Navigation from '../navigation/navigation';
import PokemonsList from '../pokemons-list/pokemons-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';
import { fetchPokemons, resetShownPokemons } from '../../actions/actionCreators';
import { SHOWN_POKEMONS_COUNT } from '../../const';
import { State } from '../../types';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state: State) => state.data.pokemons);
  const activeFilter = useSelector((state: State) => state.app.filter);
  const isFetchPokemonsLoading = useSelector((state: State) => state.app.isFetchPokemonsLoading);
  const fetchPokemonsError = useSelector((state: State) => state.app.fetchPokemonsError);

  useEffect(() => {
    dispatch(fetchPokemons(activeFilter, 0, SHOWN_POKEMONS_COUNT));

    return () => {
      dispatch(resetShownPokemons());
    };
  }, [dispatch, activeFilter]);

  const renderList = () => {
    if (isFetchPokemonsLoading && pokemons.length === 0) {
      return <MaterialProgress />;
    }
    return (
      <PokemonsList
        pokemons={pokemons}
      />
    );
  };

  return (
    <MaterialContainer>
      <Navigation />
      {renderList()}
      {fetchPokemonsError && <MaterialError />}
      <ShowMoreBtn />
    </MaterialContainer>
  );
};

export default MainPage;

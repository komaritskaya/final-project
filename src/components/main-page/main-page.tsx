import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FilterType,
} from '../../types';
import MaterialContainer from '../../material/container';
import Navigation from '../navigation/navigation';
import PokemonsList from '../pokemons-list/pokemons-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';
import { fetchAllPokemons, fetchCaughtPokemons } from '../../actions/actionCreators';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.data.pokemons);
  const activeFilter = useSelector((state) => state.app.filter);
  const shownPokemonsCount = useSelector((state) => state.app.shownPokemonsCount);

  useEffect(() => {
    if (activeFilter === FilterType.CAUGHT) {
      dispatch(fetchCaughtPokemons(0, shownPokemonsCount));
    }
    dispatch(fetchAllPokemons(0, shownPokemonsCount));
  }, [dispatch, shownPokemonsCount, activeFilter]);

  return (
    <MaterialContainer>
      <Navigation />
      <PokemonsList
        pokemons={pokemons}
      />
      <ShowMoreBtn />
    </MaterialContainer>
  );
};

export default MainPage;

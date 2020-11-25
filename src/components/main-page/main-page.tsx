import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FilterType,
} from '../../types';
import MaterialContainer from '../../material/container';
import Navigation from '../navigation/navigation';
import PokemonsList from '../pokemons-list/pokemons-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';
import { addShownPokemons, resetShownPokemons, fetchCaughtPokemons } from '../../actions/actionCreators';
import { SHOWN_POKEMONS_COUNT } from '../../const';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => {
    console.log(state);
    return state.data.pokemons;
  });
  const activeFilter = useSelector((state) => state.app.filter);
  // const shownPokemonsCount = useSelector((state) => state.app.shownPokemonsCount);

  useEffect(() => {
    dispatch(resetShownPokemons());
    dispatch(addShownPokemons(0, activeFilter));
  }, [dispatch, activeFilter]);

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

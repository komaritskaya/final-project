import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialContainer from '../../material/container';
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

  useEffect(() => {
    dispatch(fetchPokemons(activeFilter, 0, SHOWN_POKEMONS_COUNT));

    return () => {
      dispatch(resetShownPokemons());
    };
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

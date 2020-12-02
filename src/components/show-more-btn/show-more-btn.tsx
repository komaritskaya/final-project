import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MaterialButton from '../../material/button';
import { SHOWN_POKEMONS_COUNT } from '../../const';
import { fetchPokemons } from '../../actions/actionCreators';
import { State } from '../../types';

const ShowMoreBtn: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: State) => state.data.pokemons);
  const activeFilter = useSelector((state: State) => state.app.filter);

  const onButtonClick = useCallback(() => {
    dispatch(fetchPokemons(activeFilter, pokemons.length, pokemons.length + SHOWN_POKEMONS_COUNT));
  }, [dispatch, activeFilter, pokemons]);

  return (
    <MaterialButton
      value="show more"
      clickHandler={() => onButtonClick()}
    />
  );
};

export default ShowMoreBtn;

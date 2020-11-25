import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MaterialButton from '../../material/button';
// import { SHOWN_POKEMONS_COUNT } from '../../const';
import { addShownPokemons } from '../../actions/actionCreators';

const ShowMoreBtn: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.data.pokemons);
  const currentFilter = useSelector((state) => state.app.filter);

  const onButtonClick = useCallback((count, filter) => {
    dispatch(addShownPokemons(count, filter));
  }, [dispatch]);

  return (
    <MaterialButton
      value="show more"
      clickHandler={() => onButtonClick(pokemons.length, currentFilter)}
    />
  );
};

export default ShowMoreBtn;

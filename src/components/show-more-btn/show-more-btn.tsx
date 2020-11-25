import React from 'react';
import { useDispatch } from 'react-redux';
import MaterialButton from '../../material/button';
import { SHOWN_POKEMONS_COUNT } from '../../const';
import { addShownPokemons } from '../../actions/actionCreators';

const ShowMoreBtn: React.FC = () => {
  const dispatch = useDispatch();

  const onButtonClick = (count) => {
    dispatch(addShownPokemons(count));
  };

  return (
    <MaterialButton
      value="show more"
      clickHandler={() => onButtonClick(SHOWN_POKEMONS_COUNT)}
    />
  );
};

export default ShowMoreBtn;

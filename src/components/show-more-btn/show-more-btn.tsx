import React from 'react';
import { useDispatch } from 'react-redux';
import { SHOWN_POKEMONS_COUNT } from '../../const';
import { addShownPokemons } from '../../actions/actionCreators';

const ShowMoreBtn: React.FC = () => {
  const dispatch = useDispatch();

  const onButtonClick = (count) => {
    dispatch(addShownPokemons(count));
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => onButtonClick(SHOWN_POKEMONS_COUNT)}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMoreBtn;

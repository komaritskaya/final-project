import React from 'react';
import { useDispatch } from 'react-redux';
import { SHOWN_POKEMONS_COUNT } from '../../const';
import { ActionCreator } from '../../reducers/reducer';
// import { RawPokemon } from '../../types';

interface ShowMoreBtnProps {
  // pokemon: RawPokemon;
  // onCardClick: (id: number) => void;

  // onTitleClick: () => void;
  // onCardHover: (id: string) => void;
}

const ShowMoreBtn: React.FC<ShowMoreBtnProps> = () => {
  const dispatch = useDispatch();

  const onButtonClick = (count) => {
    dispatch(ActionCreator.addShownPokemons(count));
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

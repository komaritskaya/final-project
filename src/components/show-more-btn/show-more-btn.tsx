import axios from 'axios';
import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MaterialButton from '../../material/button';
import { URL, SHOWN_POKEMONS_COUNT, Path } from '../../const';
import { fetchPokemons } from '../../actions/actionCreators';
import { FilterType, State } from '../../types';

const ShowMoreBtn: React.FC = () => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  const pokemons = useSelector((state: State) => state.data.pokemons);
  const activeFilter = useSelector((state: State) => state.app.filter);
  const isFetchPokemonsLoading = useSelector((state: State) => state.app.isFetchPokemonsLoading);

  useEffect(() => {
    const path = activeFilter === FilterType.CAUGHT ? Path.CAUGHT : Path.POKEMONS;
    axios.get(`${URL}/${path}`).then((res) => {
      if (pokemons.length && res.data.length > pokemons.length) {
        setIsShown(true);
      } else {
        setIsShown(false);
      }
      // eslint-disable-next-line no-console
    }).catch((err) => console.log(err));
  }, [activeFilter, pokemons]);

  const onButtonClick = useCallback(() => {
    dispatch(fetchPokemons(activeFilter, pokemons.length, pokemons.length + SHOWN_POKEMONS_COUNT));
  }, [dispatch, activeFilter, pokemons]);

  if (!isShown) {
    return null;
  }

  return (
    <MaterialButton
      value="show more"
      clickHandler={() => onButtonClick()}
      isLoading={isFetchPokemonsLoading}
      isDisabled={isFetchPokemonsLoading}
    />
  );
};

export default ShowMoreBtn;

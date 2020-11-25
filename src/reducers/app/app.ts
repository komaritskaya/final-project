import {
  SET_FILTER,
  // ADD_SHOWN_POKEMONS,
  // RESET_SHOWN_POKEMONS,
} from '../../actions/actionTypes';
// import { SHOWN_POKEMONS_COUNT } from '../../const';
import { FilterType } from '../../types';

const initialState = {
  filter: FilterType.DEFAULT,
  // shownPokemonsCount: SHOWN_POKEMONS_COUNT,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      const { filter } = action.payload;
      return { ...state, filter };
    // case ADD_SHOWN_POKEMONS:
    //   const shownPokemonsCount = state.shownPokemonsCount + action.payload.count;
    //   return { ...state, shownPokemonsCount };
    // case RESET_SHOWN_POKEMONS:
    //   return { ...state, shownPokemonsCount: SHOWN_POKEMONS_COUNT };
    default:
      return state;
  }
}

import {
  FETCH_POKEMONS_SUCCESS,
  CATCH_POKEMON_SUCCESS,
  SET_FILTER,
  ADD_SHOWN_POKEMONS,
  RESET_SHOWN_POKEMONS,
} from '../actions/actionTypes';
import { SHOWN_POKEMONS_COUNT } from '../const';
import { FilterType } from '../types';

const initialState = {
  pokemons: [],
  filter: FilterType.DEFAULT,
  shownPokemonsCount: SHOWN_POKEMONS_COUNT,
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS_SUCCESS:
      const { pokemons } = action.payload;
      return { ...state, pokemons };
    case CATCH_POKEMON_SUCCESS:
      const { pokemon } = action.payload;
      return {
        ...state,
        pokemons: state.pokemons.map((p) => (
          p.id === pokemon.id ? { ...p, ...pokemon, isCaught: true } : p)),
      };
    case SET_FILTER:
      const { filter } = action.payload;
      return { ...state, filter };
    case ADD_SHOWN_POKEMONS:
      const shownPokemonsCount = state.shownPokemonsCount + action.payload.count;
      return { ...state, shownPokemonsCount };
    case RESET_SHOWN_POKEMONS:
      return { ...state, shownPokemonsCount: SHOWN_POKEMONS_COUNT };
    default:
      return state;
  }
}

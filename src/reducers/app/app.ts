import {
  SET_FILTER,
  FETCH_SINGLE_POKEMON_REQUEST,
  FETCH_SINGLE_POKEMON_SUCCESS,
  FETCH_SINGLE_POKEMON_FAILURE,
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  CATCH_POKEMON_REQUEST,
  CATCH_POKEMON_SUCCESS,
  CATCH_POKEMON_FAILURE,
} from '../../actions/actionTypes';
import { AppAction, FilterType } from '../../types';

const initialState = {
  filter: FilterType.DEFAULT,
  isLoading: false,
  error: null,
  pokemonIdInProgress: null,
};

export default function appReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case FETCH_SINGLE_POKEMON_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_SINGLE_POKEMON_SUCCESS:
      return { ...state, isLoading: false, error: null };
    case FETCH_SINGLE_POKEMON_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    case FETCH_POKEMONS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_POKEMONS_SUCCESS:
      return { ...state, isLoading: false, error: null };
    case FETCH_POKEMONS_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    case CATCH_POKEMON_REQUEST:
      return {
        ...state, isLoading: true, pokemonIdInProgress: action.payload.id, error: null,
      };
    case CATCH_POKEMON_SUCCESS:
      return {
        ...state, isLoading: false, error: null, pokemonIdInProgress: null,
      };
    case CATCH_POKEMON_FAILURE:
      return {
        ...state, isLoading: false, error: action.payload.error,
      };
    case SET_FILTER:
      const { filter } = action.payload;
      return { ...state, filter };
    default:
      return state;
  }
}

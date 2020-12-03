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
  isFetchPokemonsLoading: false,
  isFetchSinglePokemonLoading: false,
  isCatchPokemonLoading: false,
  fetchPokemonsError: null,
  fetchSinglePokemonError: null,
  catchPokemonError: null,
  pokemonIdInProgress: null,
};

export default function appReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case FETCH_SINGLE_POKEMON_REQUEST:
      return { ...state, isFetchSinglePokemonLoading: true, fetchSinglePokemonError: null };
    case FETCH_SINGLE_POKEMON_SUCCESS:
      return { ...state, isFetchSinglePokemonLoading: false, fetchSinglePokemonError: null };
    case FETCH_SINGLE_POKEMON_FAILURE:
      return {
        ...state,
        isFetchSinglePokemonLoading: false,
        fetchSinglePokemonError: action.payload.error,
      };
    case FETCH_POKEMONS_REQUEST:
      return { ...state, isFetchPokemonsLoading: true, fetchPokemonsError: null };
    case FETCH_POKEMONS_SUCCESS:
      return { ...state, isFetchPokemonsLoading: false, fetchPokemonsError: null };
    case FETCH_POKEMONS_FAILURE:
      return { ...state, isFetchPokemonsLoading: false, fetchPokemonsError: action.payload.error };
    case CATCH_POKEMON_REQUEST:
      return {
        ...state,
        isCatchPokemonLoading: true,
        pokemonIdInProgress: action.payload.id,
        catchPokemonError: null,
      };
    case CATCH_POKEMON_SUCCESS:
      return {
        ...state,
        isCatchPokemonLoading: false,
        catchPokemonError: null,
        pokemonIdInProgress: null,
      };
    case CATCH_POKEMON_FAILURE:
      return {
        ...state,
        isCatchPokemonLoading: false,
        catchPokemonError: action.payload.error,
      };
    case SET_FILTER:
      const { filter } = action.payload;
      return { ...state, filter };
    default:
      return state;
  }
}

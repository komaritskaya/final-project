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
  error: null,
  pokemonIdInProgress: null,
};

export default function appReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case FETCH_SINGLE_POKEMON_REQUEST:
      return { ...state, isFetchSinglePokemonLoading: true, error: null };
    case FETCH_SINGLE_POKEMON_SUCCESS:
      return { ...state, isFetchSinglePokemonLoading: false, error: null };
    case FETCH_SINGLE_POKEMON_FAILURE:
      return { ...state, isFetchSinglePokemonLoading: false, error: action.payload.error };
    case FETCH_POKEMONS_REQUEST:
      return { ...state, isFetchPokemonsLoading: true, error: null };
    case FETCH_POKEMONS_SUCCESS:
      return { ...state, isFetchPokemonsLoading: false, error: null };
    case FETCH_POKEMONS_FAILURE:
      return { ...state, isFetchPokemonsLoading: false, error: action.payload.error };
    case CATCH_POKEMON_REQUEST:
      return {
        ...state, isCatchPokemonLoading: true, pokemonIdInProgress: action.payload.id, error: null,
      };
    case CATCH_POKEMON_SUCCESS:
      return {
        ...state, isCatchPokemonLoading: false, error: null, pokemonIdInProgress: null,
      };
    case CATCH_POKEMON_FAILURE:
      return {
        ...state, isCatchPokemonLoading: false, error: action.payload.error,
      };
    case SET_FILTER:
      const { filter } = action.payload;
      return { ...state, filter };
    default:
      return state;
  }
}

import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  FETCH_SINGLE_POKEMON_REQUEST,
  FETCH_SINGLE_POKEMON_SUCCESS,
  FETCH_SINGLE_POKEMON_FAILURE,
  CATCH_POKEMON_REQUEST,
  CATCH_POKEMON_SUCCESS,
  CATCH_POKEMON_FAILURE,
  SET_FILTER,
  RESET_SHOWN_POKEMONS,
} from './actions/actionTypes';

export interface RawPokemon {
  id: number;
  name: string;
}

export interface UserPokemon {
  id: number;
  catchDate: Date;
}

export interface Pokemon extends RawPokemon, UserPokemon {
  isCaught: boolean;
}

export enum FilterType {
  DEFAULT = 'default',
  CAUGHT = 'caught',
}

export interface State {
  app: {
    filter: FilterType;
    isFetchSinglePokemonLoading: boolean;
    isFetchPokemonsLoading: boolean;
    isCatchPokemonLoading: boolean;
    fetchSinglePokemonError: Error;
    fetchPokemonsError: Error;
    catchPokemonError: Error;
    pokemonIdInProgress: number;
  };
  data: {
    currentPokemon: Pokemon;
    pokemons: Pokemon[];
  };
}

export interface FetchPokemonsRequestAction {
  type: typeof FETCH_POKEMONS_REQUEST;
}

export interface FetchPokemonsFailureAction {
  type: typeof FETCH_POKEMONS_FAILURE;
  payload: { error: Error };
}

export interface FetchPokemonsSuccessAction {
  type: typeof FETCH_POKEMONS_SUCCESS;
  payload?: { pokemons: Pokemon[] };
}

export interface FetchSinglePokemonRequestAction {
  type: typeof FETCH_SINGLE_POKEMON_REQUEST;
}

export interface FetchSinglePokemonFailureAction {
  type: typeof FETCH_SINGLE_POKEMON_FAILURE;
  payload: { error: Error };
}

export interface FetchSinglePokemonSuccessAction {
  type: typeof FETCH_SINGLE_POKEMON_SUCCESS;
  payload?: { currentPokemon: Pokemon };
}

export interface CatchPokemonRequestAction {
  type: typeof CATCH_POKEMON_REQUEST;
  payload: { id: number },
}

export interface CatchPokemonFailureAction {
  type: typeof CATCH_POKEMON_FAILURE;
  payload: { error: Error };
}

export interface CatchPokemonSuccessAction {
  type: typeof CATCH_POKEMON_SUCCESS;
  payload?: { pokemon: UserPokemon };
}

export interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: { filter: FilterType };
}

export interface ResetShownPokemonsAction {
  type: typeof RESET_SHOWN_POKEMONS;
}

export type AppAction = FetchSinglePokemonRequestAction |
FetchSinglePokemonFailureAction |
FetchSinglePokemonSuccessAction |
FetchPokemonsRequestAction |
FetchPokemonsFailureAction |
FetchPokemonsSuccessAction |
CatchPokemonRequestAction |
CatchPokemonFailureAction |
CatchPokemonSuccessAction |
SetFilterAction;

export type DataAction = FetchSinglePokemonSuccessAction |
FetchPokemonsSuccessAction |
CatchPokemonSuccessAction |
ResetShownPokemonsAction;

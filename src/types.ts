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

// export interface RootState {
//   pokemons: RawPokemon[];
//   userPokemons: UserPokemon[];
//   filter: string;
//   shownPokemonsCount: number;
// }

// export interface Action {
//   type:
//   'FETCH_ALL_POKEMONS_REQUEST' |
//   'FETCH_ALL_POKEMONS_SUCCESS' |
//   'FETCH_ALL_POKEMONS_FAILURE' |
//   'FETCH_USER_POKEMONS_REQUEST' |
//   'FETCH_USER_POKEMONS_SUCCESS' |
//   'FETCH_USER_POKEMONS_FAILURE' |
//   'CATCH_POKEMON_REQUEST' |
//   'CATCH_POKEMON_SUCCESS' |
//   'CATCH_POKEMON_FAILURE' |
//   'SET_FILTER' |
//   'ADD_SHOWN_POKEMONS' |
//   'RESET_SHOWN_POKEMONS' |
//   'ERROR';
//   payload?: unknown;
// }

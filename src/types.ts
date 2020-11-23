export interface RawPokemon {
  id: number;
  name: string;
}

export interface UserPokemon {
  id: number;
  // isCaught: boolean;
  catchDate: Date;
}

export interface ExtendedPokemon extends RawPokemon, UserPokemon {
  isCaught: boolean;
}

export enum FilterType {
  DEFAULT = 'default',
  CAUGHT = 'caught',
}

export interface RootState {
  pokemons: RawPokemon[];
  userPokemons: UserPokemon[];
  filter: string;
  shownPokemonsCount: number;
}

export interface Action {
  type: 'SET_FILTER' | 'ADD_SHOWN_POKEMONS' | 'RESET_SHOWN_POKEMONS' | 'ERROR';
  payload?: unknown;
}

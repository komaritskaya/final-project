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

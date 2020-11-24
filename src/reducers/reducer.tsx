import { Filter, SHOWN_POKEMONS_COUNT } from '../const';
import { pokemons, userPokemons } from '../mocks/pokemons';
import { RootState, Action } from '../types';

const initialState: RootState = {
  pokemons,
  userPokemons,
  filter: Filter.DEFAULT,
  shownPokemonsCount: SHOWN_POKEMONS_COUNT,
};

const ActionCreator = {
  setFilter: (filter: string): Action => ({
    type: 'SET_FILTER',
    payload: filter,
  }),
  addShownPokemons: (count: number): Action => ({
    type: 'ADD_SHOWN_POKEMONS',
    payload: count,
  }),
  resetShownPokemons: (): Action => ({
    type: 'RESET_SHOWN_POKEMONS',
  }),
  catchPokemon: (id: number, catchDate: Date): Action => ({
    type: 'CATCH_POKEMON',
    payload: { id, catchDate },
  }),

};

const reducer = (state = initialState, action: Action) => {
  const filter = action.payload;
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, filter };
    case 'ADD_SHOWN_POKEMONS':
      const shownPokemonsCount = state.shownPokemonsCount + (action.payload as number);
      return { ...state, shownPokemonsCount };
    case 'RESET_SHOWN_POKEMONS':
      return { ...state, shownPokemonsCount: SHOWN_POKEMONS_COUNT };
    case 'CATCH_POKEMON':
      const userPokemonsNew = [...state.userPokemons, action.payload];
      return { ...state, userPokemons: userPokemonsNew };
    default:
      return state;
  }
};

export { reducer, ActionCreator, initialState };

// import { reducer, ActionCreator } from './reducer';
// import { Action } from '../types';
// import { pokemons, userPokemons } from '../mocks/pokemons';
// import { SHOWN_POKEMONS_COUNT } from '../const';

// const initialState = {
//   pokemons,
//   userPokemons,
//   filter: null,
//   shownPokemonsCount: SHOWN_POKEMONS_COUNT,
// };

// it('Reducer without additional parameters should return initial state', () => {
//   expect(reducer(initialState, { type: 'ERROR', payload: null })).toEqual(initialState);
// });

// it('Reducer should change filter to a given value', () => {
//   expect(reducer(initialState, {
//     type: 'SET_FILTER',
//     payload: 'filter',
//   })).toEqual({ ...initialState, filter: 'filter' });
// });

// it('Reducer should increase shown pokemons count by a given value', () => {
//   expect(reducer(initialState, {
//     type: 'ADD_SHOWN_POKEMONS',
//     payload: 1,
//   })).toEqual({ ...initialState, shownPokemonsCount: initialState.shownPokemonsCount + 1 });
// });

// it('Reducer should reset shown pokemons count', () => {
//   expect(reducer(initialState, {
//     type: 'RESET_SHOWN_POKEMONS',
//   })).toEqual(initialState);
// });

// describe('Action creators work correctly', () => {
//   it('Action creator for changing filter returns correct action', () => {
//     expect(ActionCreator.setFilter('filter')).toEqual({
//       type: 'SET_FILTER',
//       payload: 'filter',
//     } as Action);
//   });
// });

import appReducer from './app';
import { SHOWN_POKEMONS_COUNT } from '../../const';
import {
  setFilter,
  addShownPokemons,
  resetShownPokemons,
} from '../../actions/actionCreators';
import {
  SET_FILTER,
  ADD_SHOWN_POKEMONS,
  RESET_SHOWN_POKEMONS,
} from '../../actions/actionTypes';

const initialState = {
  filter: null,
  shownPokemonsCount: SHOWN_POKEMONS_COUNT,
};

it('Reducer without additional parameters should return initial state', () => {
  expect(appReducer(initialState, { type: 'ERROR', payload: null })).toEqual(initialState);
});

it('Reducer should change filter to a given value', () => {
  expect(appReducer(initialState, {
    type: SET_FILTER,
    payload: {
      filter: 'filter',
    },
  })).toEqual({ ...initialState, filter: 'filter' });
});

it('Reducer should increase shown pokemons count by a given value', () => {
  expect(appReducer(initialState, {
    type: ADD_SHOWN_POKEMONS,
    payload: {
      count: 1,
    },
  })).toEqual({ ...initialState, shownPokemonsCount: initialState.shownPokemonsCount + 1 });
});

it('Reducer should reset shown pokemons count', () => {
  expect(appReducer(initialState, {
    type: RESET_SHOWN_POKEMONS,
  })).toEqual(initialState);
});

describe('setFilter works correctly', () => {
  it('Action creator for changing filter returns correct action', () => {
    expect(setFilter('filter')).toEqual({
      type: SET_FILTER,
      payload: {
        filter: 'filter',
      },
    });
  });
});

describe('addShownPokemons works correctly', () => {
  it('Action creator for adding shown pokemons returns correct action', () => {
    expect(addShownPokemons('count')).toEqual({
      type: ADD_SHOWN_POKEMONS,
      payload: {
        count: 'count',
      },
    });
  });
});

describe('resetShownPokemons works correctly', () => {
  it('Action creator for reseting shown pokemons returns correct action', () => {
    expect(resetShownPokemons()).toEqual({
      type: RESET_SHOWN_POKEMONS,
    });
  });
});

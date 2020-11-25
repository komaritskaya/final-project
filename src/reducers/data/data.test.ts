import dataReducer from './data';
import {
  fetchPokemonsSuccess,
  catchPokemonSuccess,
} from '../../actions/actionCreators';
import {
  FETCH_POKEMONS_SUCCESS,
  CATCH_POKEMON_SUCCESS,
} from '../../actions/actionTypes';
import pokemons from '../../mocks/pokemons';

const initialState = {
  pokemons,
};

it('Reducer without additional parameters should return initial state', () => {
  expect(dataReducer(initialState, { type: 'ERROR', payload: null })).toEqual(initialState);
});

it('Reducer should change pokemons list to a given value', () => {
  expect(dataReducer(initialState, {
    type: FETCH_POKEMONS_SUCCESS,
    payload: {
      pokemons: [],
    },
  })).toEqual({ ...initialState, pokemons: [] });
});

it('Reducer should modify a pokemon in pokemons list', () => {
  expect(dataReducer(initialState, {
    type: CATCH_POKEMON_SUCCESS,
    payload: {
      pokemon: {
        id: 3,
        date: new Date(2020, 0, 0),
      },
    },
  })).toEqual({
    ...initialState,
    pokemons: initialState.pokemons.map((p) => (
      p.id === 3 ? { ...p, ...{ date: new Date(2020, 0, 0), isCaught: true } } : p)),
  });
});

describe('fetchPokemonsSuccess works correctly', () => {
  it('Action creator for changing filter returns correct action', () => {
    expect(fetchPokemonsSuccess(pokemons)).toEqual({
      type: FETCH_POKEMONS_SUCCESS,
      payload: {
        pokemons,
      },
    });
  });
});

describe('catchPokemonSuccess work correctly', () => {
  it('Action creator for changing filter returns correct action', () => {
    expect(catchPokemonSuccess({
      id: 3,
      date: new Date(2020, 0, 0),
    })).toEqual({
      type: CATCH_POKEMON_SUCCESS,
      payload: {
        pokemon: {
          id: 3,
          date: new Date(2020, 0, 0),
        },
      },
    });
  });
});

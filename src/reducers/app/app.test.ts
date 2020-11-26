import appReducer from './app';
import {
  setFilter,
  fetchSinglePokemonRequest,
  fetchSinglePokemonSuccess,
  fetchSinglePokemonFailure,
  fetchPokemonsRequest,
  fetchPokemonsSuccess,
  fetchPokemonsFailure,
} from '../../actions/actionCreators';
import {
  SET_FILTER,
  FETCH_SINGLE_POKEMON_REQUEST,
  FETCH_SINGLE_POKEMON_SUCCESS,
  FETCH_SINGLE_POKEMON_FAILURE,
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  filter: null,
  isLoading: false,
  error: null,
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

it('Reducer should perform single pokemon request', () => {
  expect(appReducer(initialState, {
    type: FETCH_SINGLE_POKEMON_REQUEST,
  })).toEqual({ ...initialState, isLoading: true, error: null });
});

it('Reducer should perform pokemons request', () => {
  expect(appReducer(initialState, {
    type: FETCH_POKEMONS_REQUEST,
  })).toEqual({ ...initialState, isLoading: true, error: null });
});

it('Reducer should handle single pokemon request success', () => {
  expect(appReducer(initialState, {
    type: FETCH_SINGLE_POKEMON_SUCCESS,
  })).toEqual(initialState);
});

it('Reducer should handle pokemons request success', () => {
  expect(appReducer(initialState, {
    type: FETCH_POKEMONS_SUCCESS,
  })).toEqual(initialState);
});

it('Reducer should handle single pokemon request error', () => {
  expect(appReducer(initialState, {
    type: FETCH_SINGLE_POKEMON_FAILURE,
    payload: {
      error: 'error',
    },
  })).toEqual({ ...initialState, error: 'error' });
});

it('Reducer should handle pokemons request error', () => {
  expect(appReducer(initialState, {
    type: FETCH_POKEMONS_FAILURE,
    payload: {
      error: 'error',
    },
  })).toEqual({ ...initialState, error: 'error' });
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

describe('fetchSinglePokemonRequest works correctly', () => {
  it('Action creator for fetching single pokemon returns correct action', () => {
    expect(fetchSinglePokemonRequest()).toEqual({
      type: FETCH_SINGLE_POKEMON_REQUEST,
    });
  });
});
describe('fetchSinglePokemonSuccess works correctly', () => {
  it('Action creator for handling single pokemon load success returns correct action', () => {
    expect(fetchSinglePokemonSuccess({
      id: 3,
      date: new Date(2020, 0, 0),
    })).toEqual({
      type: FETCH_SINGLE_POKEMON_SUCCESS,
      payload: {
        currentPokemon: {
          id: 3,
          date: new Date(2020, 0, 0),
        },
      },
    });
  });
});
describe('fetchSinglePokemonFailure works correctly', () => {
  it('Action creator for handling single pokemon load failure returns correct action', () => {
    expect(fetchSinglePokemonFailure('error')).toEqual({
      type: FETCH_SINGLE_POKEMON_FAILURE,
      payload: {
        error: 'error',
      },
    });
  });
});

describe('fetchPokemonsRequest works correctly', () => {
  it('Action creator for fetching pokemons returns correct action', () => {
    expect(fetchPokemonsRequest()).toEqual({
      type: FETCH_POKEMONS_REQUEST,
    });
  });
});
describe('fetchPokemonsSuccess works correctly', () => {
  it('Action creator for handling pokemons load success returns correct action', () => {
    expect(fetchPokemonsSuccess([])).toEqual({
      type: FETCH_POKEMONS_SUCCESS,
      payload: {
        pokemons: [],
      },
    });
  });
});
describe('fetchPokemonsFailure works correctly', () => {
  it('Action creator for handling pokemons load failure returns correct action', () => {
    expect(fetchPokemonsFailure('error')).toEqual({
      type: FETCH_POKEMONS_FAILURE,
      payload: {
        error: 'error',
      },
    });
  });
});

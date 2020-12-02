import appReducer from './app';
import {
  setFilter,
  fetchSinglePokemonRequest,
  fetchSinglePokemonSuccess,
  fetchSinglePokemonFailure,
  fetchPokemonsRequest,
  fetchPokemonsSuccess,
  fetchPokemonsFailure,
  catchPokemonRequest,
  catchPokemonSuccess,
  catchPokemonFailure,
} from '../../actions/actionCreators';
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
import pokemons from '../../mocks/pokemons';
import { FilterType } from '../../types';

const initialState = {
  filter: FilterType.DEFAULT,
  isFetchPokemonsLoading: false,
  isFetchSinglePokemonLoading: false,
  isCatchPokemonLoading: false,
  error: null,
  pokemonIdInProgress: null,
};

it('Reducer should change filter to a given value', () => {
  expect(appReducer(initialState, {
    type: SET_FILTER,
    payload: {
      filter: FilterType.CAUGHT,
    },
  })).toEqual({ ...initialState, filter: FilterType.CAUGHT });
});

it('Reducer should perform single pokemon request', () => {
  expect(appReducer(initialState, {
    type: FETCH_SINGLE_POKEMON_REQUEST,
  })).toEqual({ ...initialState, isFetchSinglePokemonLoading: true, error: null });
});

it('Reducer should perform pokemons request', () => {
  expect(appReducer(initialState, {
    type: FETCH_POKEMONS_REQUEST,
  })).toEqual({ ...initialState, isFetchPokemonsLoading: true, error: null });
});

it('Reducer should perform catch pokemon request', () => {
  expect(appReducer(initialState, {
    type: CATCH_POKEMON_REQUEST,
    payload: {
      id: 1,
    },
  })).toEqual({
    ...initialState, isCatchPokemonLoading: true, error: null, pokemonIdInProgress: 1,
  });
});

it('Reducer should handle single pokemon success', () => {
  expect(appReducer(initialState, {
    type: FETCH_SINGLE_POKEMON_SUCCESS,
  })).toEqual(initialState);
});

it('Reducer should handle pokemons success', () => {
  expect(appReducer(initialState, {
    type: FETCH_POKEMONS_SUCCESS,
  })).toEqual(initialState);
});

it('Reducer should handle catch pokemon success', () => {
  expect(appReducer(initialState, {
    type: CATCH_POKEMON_SUCCESS,
    payload: { pokemon: { id: 1, catchDate: new Date(2020, 1, 1) } },
  })).toEqual(initialState);
});

it('Reducer should handle single pokemon request error', () => {
  expect(appReducer(initialState, {
    type: FETCH_SINGLE_POKEMON_FAILURE,
    payload: {
      error: new Error(),
    },
  })).toEqual({ ...initialState, error: new Error() });
});

it('Reducer should handle pokemons request error', () => {
  expect(appReducer(initialState, {
    type: FETCH_POKEMONS_FAILURE,
    payload: {
      error: new Error(),
    },
  })).toEqual({ ...initialState, error: new Error() });
});

it('Reducer should handle catch pokemon failure', () => {
  expect(appReducer(initialState, {
    type: CATCH_POKEMON_FAILURE,
    payload: {
      error: new Error(),
    },
  })).toEqual({ ...initialState, error: new Error() });
});

describe('setFilter works correctly', () => {
  it('Action creator for changing filter returns correct action', () => {
    expect(setFilter(FilterType.DEFAULT)).toEqual({
      type: SET_FILTER,
      payload: {
        filter: FilterType.DEFAULT,
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
    expect(fetchSinglePokemonSuccess(pokemons[0])).toEqual({
      type: FETCH_SINGLE_POKEMON_SUCCESS,
      payload: {
        currentPokemon: pokemons[0],
      },
    });
  });
});
describe('fetchSinglePokemonFailure works correctly', () => {
  it('Action creator for handling single pokemon load failure returns correct action', () => {
    expect(fetchSinglePokemonFailure(new Error())).toEqual({
      type: FETCH_SINGLE_POKEMON_FAILURE,
      payload: {
        error: new Error(),
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
    expect(fetchPokemonsFailure(new Error())).toEqual({
      type: FETCH_POKEMONS_FAILURE,
      payload: {
        error: new Error(),
      },
    });
  });
});

describe('catchPokemonRequest works correctly', () => {
  it('Action creator for catching pokemon returns correct action', () => {
    expect(catchPokemonRequest(1)).toEqual({
      type: CATCH_POKEMON_REQUEST,
      payload: {
        id: 1,
      },
    });
  });
});
describe('catchPokemonSuccess works correctly', () => {
  it('Action creator for handling pokemon catch success returns correct action', () => {
    expect(catchPokemonSuccess({ id: 1, catchDate: new Date(2020, 1, 1) })).toEqual({
      type: CATCH_POKEMON_SUCCESS,
      payload: {
        pokemon: {
          id: 1,
          catchDate: new Date(2020, 1, 1),
        },
      },
    });
  });
});
describe('catchPokemonFailure works correctly', () => {
  it('Action creator for handling pokemon catch failure returns correct action', () => {
    expect(catchPokemonFailure(new Error())).toEqual({
      type: CATCH_POKEMON_FAILURE,
      payload: {
        error: new Error(),
      },
    });
  });
});

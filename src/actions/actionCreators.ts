import axios from 'axios';
import { Dispatch } from 'redux';
import {
  FETCH_SINGLE_POKEMON_REQUEST,
  FETCH_SINGLE_POKEMON_SUCCESS,
  FETCH_SINGLE_POKEMON_FAILURE,
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  CATCH_POKEMON_REQUEST,
  CATCH_POKEMON_SUCCESS,
  CATCH_POKEMON_FAILURE,
  SET_FILTER,
  RESET_SHOWN_POKEMONS,
} from './actionTypes';
import { Path, Status } from '../const';
import {
  RawPokemon,
  UserPokemon,
  Pokemon,
  FilterType,
  DataAction,
  AppAction,
} from '../types';

const URL = 'http://localhost:3000';

export const fetchSinglePokemonRequest = (): AppAction => ({
  type: FETCH_SINGLE_POKEMON_REQUEST,
});

export const fetchSinglePokemonSuccess = (currentPokemon: Pokemon): DataAction => ({
  type: FETCH_SINGLE_POKEMON_SUCCESS, payload: { currentPokemon },
});

export const fetchSinglePokemonFailure = (error: Error): AppAction => ({
  type: FETCH_SINGLE_POKEMON_FAILURE, payload: { error },
});

export const fetchSinglePokemon = (id: string) => (dispatch: Dispatch<DataAction | AppAction>) => {
  dispatch(fetchSinglePokemonRequest());
  axios.get(`${URL}/${Path.POKEMONS}/${id}`).then((allResponse) => {
    axios.get(`${URL}/${Path.CAUGHT}/${id}`).then((caughtResponse) => {
      dispatch(fetchSinglePokemonSuccess({
        ...allResponse.data,
        ...caughtResponse.data,
        isCaught: true,
      }));
    }).catch((caughtError) => {
      if (caughtError.response.status !== Status.OK) {
        dispatch(fetchSinglePokemonSuccess({
          ...allResponse.data,
          isCaught: false,
          catchDate: null,
        }));
      }
    });
  }).catch((allError) => {
    dispatch(fetchSinglePokemonFailure(allError));
  });
};

export const fetchPokemonsRequest = (): AppAction => ({
  type: FETCH_POKEMONS_REQUEST,
});

export const fetchPokemonsSuccess = (pokemons: Pokemon[]): DataAction => ({
  type: FETCH_POKEMONS_SUCCESS, payload: { pokemons },
});

export const fetchPokemonsFailure = (error: Error): AppAction => ({
  type: FETCH_POKEMONS_FAILURE, payload: { error },
});

export const fetchAllPokemons = (from: number, to: number) => (
  dispatch: Dispatch<DataAction | AppAction>,
) => {
  dispatch(fetchPokemonsRequest());
  const pokemonsRequest = axios.get(`${URL}/${Path.POKEMONS}?_start=${from}&_end=${to}`);
  const caughtPokemonsRequest = axios.get(`${URL}/${Path.CAUGHT}`);
  axios.all([pokemonsRequest, caughtPokemonsRequest]).then(
    axios.spread((...responses) => {
      const pokemonsResponse = responses[0].data;
      const caughtPokemonsResponse = responses[1].data;

      const pokemons = pokemonsResponse.map((pokemon: RawPokemon) => {
        const matchingIndex = caughtPokemonsResponse.findIndex((caughtPokemon: UserPokemon) => (
          caughtPokemon.id === pokemon.id
        ));

        if (matchingIndex === -1) {
          return {
            ...pokemon,
            isCaught: false,
            catchDate: null,
          };
        }

        return {
          ...pokemon,
          ...caughtPokemonsResponse[matchingIndex],
          isCaught: true,
        };
      });

      dispatch(fetchPokemonsSuccess(pokemons));
    }),
  ).catch((err) => {
    dispatch(fetchPokemonsFailure(err));
  });
};

export const fetchCaughtPokemons = (from: number, to: number) => (
  dispatch: Dispatch<DataAction | AppAction>,
) => {
  dispatch(fetchPokemonsRequest());
  axios.get(`${URL}/${Path.CAUGHT}?_start=${from}&_end=${to}`).then((caughtResponse) => {
    const caughtPokemons = caughtResponse.data;
    const filter = caughtPokemons.map((item: UserPokemon) => `id=${item.id}`).join('&');

    axios.get(`${URL}/${Path.POKEMONS}?${filter}`).then((allResponse) => {
      const matchedPokemons = allResponse.data;

      const pokemons = caughtPokemons.map((pokemon: UserPokemon) => {
        const matchingIndex = matchedPokemons.findIndex((matchedPokemon: RawPokemon) => (
          matchedPokemon.id === pokemon.id
        ));

        return {
          ...pokemon,
          ...matchedPokemons[matchingIndex],
          isCaught: true,
        };
      });

      dispatch(fetchPokemonsSuccess(pokemons));
    }).catch((err) => {
      dispatch(fetchPokemonsFailure(err));
    });
  }).catch((err) => {
    dispatch(fetchPokemonsFailure(err));
  });
};

export const fetchPokemons = (filter: FilterType, from: number, to: number) => (
  dispatch: Dispatch<any>,
) => {
  if (filter === FilterType.CAUGHT) {
    dispatch(fetchCaughtPokemons(from, to));
  } else {
    dispatch(fetchAllPokemons(from, to));
  }
};

export const catchPokemonRequest = (): AppAction => ({
  type: CATCH_POKEMON_REQUEST,
});

export const catchPokemonSuccess = (pokemon: UserPokemon): DataAction => ({
  type: CATCH_POKEMON_SUCCESS, payload: { pokemon },
});

export const catchPokemonFailure = (error: Error): AppAction => ({
  type: CATCH_POKEMON_FAILURE, payload: { error },
});

export const catchPokemon = (pokemon: UserPokemon) => (
  dispatch: Dispatch<DataAction | AppAction>,
) => {
  dispatch(catchPokemonRequest());
  axios.post(`${URL}/${Path.CAUGHT}`, pokemon).then(() => {
    dispatch(catchPokemonSuccess(pokemon));
  }).catch((err) => {
    dispatch(catchPokemonFailure(err));
  });
};

export const setFilter = (filter: FilterType): AppAction => ({
  type: SET_FILTER,
  payload: { filter },
});

export const resetShownPokemons = (): DataAction => ({
  type: RESET_SHOWN_POKEMONS,
});

export const changeFilter = (filter: FilterType) => (
  dispatch: Dispatch<DataAction | AppAction>,
) => {
  dispatch(resetShownPokemons());
  dispatch(setFilter(filter));
};

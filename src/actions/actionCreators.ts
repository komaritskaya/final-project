import axios from 'axios';
import {
  FETCH_ALL_POKEMONS_SUCCESS,
  FETCH_ALL_POKEMONS_FAILURE,
  CATCH_POKEMON_SUCCESS,
  CATCH_POKEMON_FAILURE,
  SET_FILTER,
  ADD_SHOWN_POKEMONS,
  RESET_SHOWN_POKEMONS,
} from './actionTypes';
import { Path } from '../const';

const URL = 'http://localhost:3000';

export const fetchAllPokemonsSuccess = (pokemons) => ({
  type: FETCH_ALL_POKEMONS_SUCCESS, payload: { pokemons },
});

export const fetchAllPokemonsFailure = (error) => ({
  type: FETCH_ALL_POKEMONS_FAILURE, payload: { error },
});

export const fetchAllPokemons = (from, to) => (dispatch) => {
  const pokemonsRequest = axios.get(`${URL}/${Path.POKEMONS}?_start=${from}&_end=${to}`);
  const caughtPokemonsRequest = axios.get(`${URL}/${Path.CAUGHT}`);
  axios.all([pokemonsRequest, caughtPokemonsRequest]).then(
    axios.spread((...responses) => {
      const pokemonsResponse = responses[0].data;
      const caughtPokemonsResponse = responses[1].data;

      const pokemons = pokemonsResponse.map((pokemon) => {
        const matchingIndex = caughtPokemonsResponse.findIndex((caughtPokemon) => (
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

      dispatch(fetchAllPokemonsSuccess(pokemons));
    }),
  ).catch((err) => {
    dispatch(fetchAllPokemonsFailure(err));
  });
};

export const fetchCaughtPokemons = (from, to) => (dispatch) => {
  axios.get(`${URL}/${Path.CAUGHT}?_start=${from}&_end=${to}`).then((caughtResponse) => {
    const caughtPokemons = caughtResponse.data;
    const filter = caughtPokemons.map((item) => `id=${item.id}`).join('&');

    axios.get(`${URL}/${Path.POKEMONS}?${filter}`).then((allResponse) => {
      const matchedPokemons = allResponse.data;

      const pokemons = caughtPokemons.map((pokemon) => {
        const matchingIndex = matchedPokemons.findIndex((matchedPokemon) => (
          matchedPokemon.id === pokemon.id
        ));

        return {
          ...pokemon,
          ...matchedPokemons[matchingIndex],
          isCaught: true,
        };
      });

      dispatch(fetchAllPokemonsSuccess(pokemons));
    }).catch((err) => {
      dispatch(fetchAllPokemonsFailure(err));
    });
  }).catch((err) => {
    dispatch(fetchAllPokemonsFailure(err));
  });
};

export const catchPokemonSuccess = (pokemon) => ({
  type: CATCH_POKEMON_SUCCESS, payload: { pokemon },
});

export const catchPokemonFailure = (error) => ({
  type: CATCH_POKEMON_FAILURE, payload: { error },
});

export const catchPokemon = (pokemon) => (dispatch) => {
  axios.post(`${URL}/${Path.CAUGHT}`, pokemon).then(() => {
    dispatch(catchPokemonSuccess(pokemon));
  }).catch((err) => {
    dispatch(catchPokemonFailure(err));
  });
};

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

export const addShownPokemons = (count) => ({
  type: ADD_SHOWN_POKEMONS,
  payload: { count },
});

export const resetShownPokemons = () => ({
  type: RESET_SHOWN_POKEMONS,
});

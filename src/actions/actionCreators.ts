import axios from 'axios';
import {
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  CATCH_POKEMON_SUCCESS,
  CATCH_POKEMON_FAILURE,
  SET_FILTER,
  ADD_SHOWN_POKEMONS,
  RESET_SHOWN_POKEMONS,
} from './actionTypes';
import { Path } from '../const';

const URL = 'http://localhost:3000';

export const fetchPokemonsSuccess = (pokemons) => ({
  type: FETCH_POKEMONS_SUCCESS, payload: { pokemons },
});

export const fetchPokemonsFailure = (error) => ({
  type: FETCH_POKEMONS_FAILURE, payload: { error },
});

export const fetchPokemons = () => (dispatch) => {
  const allPokemonsRequest = axios.get(`${URL}/${Path.POKEMONS}`);
  const caughtPokemonsRequest = axios.get(`${URL}/${Path.CAUGHT}`);
  axios.all([allPokemonsRequest, caughtPokemonsRequest])
    .then(
      axios.spread((...responses) => {
        const allPokemonsResponse = responses[0].data;
        const caughtPokemonsResponse = responses[1].data;

        const pokemons = allPokemonsResponse.map((pokemon) => {
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

        dispatch(fetchPokemonsSuccess(pokemons));
      }),
    )
    .catch((err) => {
      dispatch(fetchPokemonsFailure(err));
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

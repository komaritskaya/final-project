import {
  FETCH_ALL_POKEMONS_SUCCESS,
  CATCH_POKEMON_SUCCESS,
} from '../../actions/actionTypes';

const initialState = {
  pokemons: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_POKEMONS_SUCCESS:
      const { pokemons } = action.payload;
      return { ...state, pokemons };
    case CATCH_POKEMON_SUCCESS:
      const { pokemon } = action.payload;
      return {
        ...state,
        pokemons: state.pokemons.map((p) => (
          p.id === pokemon.id ? { ...p, ...pokemon, isCaught: true } : p)),
      };
    default:
      return state;
  }
}

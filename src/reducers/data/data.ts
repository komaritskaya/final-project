import {
  FETCH_SINGLE_POKEMON_SUCCESS,
  FETCH_POKEMONS_SUCCESS,
  CATCH_POKEMON_SUCCESS,
  RESET_SHOWN_POKEMONS,
} from '../../actions/actionTypes';

const initialState = {
  currentPokemon: null,
  pokemons: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SINGLE_POKEMON_SUCCESS:
      const { currentPokemon } = action.payload;
      return { ...state, currentPokemon };
    case FETCH_POKEMONS_SUCCESS:
      const { pokemons } = action.payload;
      return { ...state, pokemons: [...state.pokemons, ...pokemons] };
    case CATCH_POKEMON_SUCCESS:
      const { pokemon } = action.payload;
      return {
        ...state,
        pokemons: state.pokemons.map((p) => (
          p.id === pokemon.id ? { ...p, ...pokemon, isCaught: true } : p)),
      };
    case RESET_SHOWN_POKEMONS:
      return { ...state, pokemons: [] };
    default:
      return state;
  }
}

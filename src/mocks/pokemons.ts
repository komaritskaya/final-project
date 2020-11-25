import { Pokemon } from '../types';

const pokemons: Pokemon[] = [
  {
    name: 'bulbasaur',
    id: 1,
    isCaught: true,
    catchDate: new Date(),
  },
  {
    name: 'ivysaur',
    id: 2,
    isCaught: false,
    catchDate: null,
  },
  {
    name: 'venusaur',
    id: 3,
    isCaught: false,
    catchDate: null,
  },
  {
    name: 'charmander',
    id: 4,
    isCaught: false,
    catchDate: null,
  },
];

export default pokemons;

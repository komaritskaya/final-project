import React from 'react';
import { useSelector } from 'react-redux';
import { pokemons } from '../../mocks/pokemons';
import {
  ExtendedPokemon, FilterType, RawPokemon, RootState, UserPokemon,
} from '../../types';
import Navigation from '../navigation/navigation';
import PokemonsList from '../pokemons-list/pokemons-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';

interface MainPageProps {
  // pokemons: RawPokemon[];
  // onCardClick: (id: number) => void;
  // currentMovie: {
  //   title: string;
  //   genre: string;
  //   year: number;
  // };
}

const MainPage: React.FC<MainPageProps> = () => {
  const allPokemons = useSelector((state: RootState) => state.pokemons);
  const activeFilter = useSelector((state: RootState) => state.filter);
  const userPokemons = useSelector((state: RootState) => state.userPokemons);
  const shownPokemonsCount = useSelector((state: RootState) => state.shownPokemonsCount);
  const shownPokemons = allPokemons.slice(0, shownPokemonsCount);

  const getFilteredPokemons = (
    unFilteredPokemons: RawPokemon[],
    filter: FilterType,
  ): (
    RawPokemon[] | ExtendedPokemon[]
    ) => {
    if (filter === FilterType.CAUGHT) {
      const filteredRawPokemons = unFilteredPokemons.filter((pokemon) => (
        userPokemons.find((userPokemon: UserPokemon) => pokemon.id === userPokemon.id)
      ));
      const filteredExtendedPokemons = filteredRawPokemons.map((pokemon) => {
        const matchingUserPokemonIndex = userPokemons.findIndex((userPokemon: UserPokemon) => (
          pokemon.id === userPokemon.id
        ));
        const matchingUserPokemon = userPokemons[matchingUserPokemonIndex];
        return { ...pokemon, ...matchingUserPokemon, isCaught: true };
      });
      return filteredExtendedPokemons;
    }
    return pokemons;
  };

  return (
    <>
      <Navigation />
      <PokemonsList
        pokemons={getFilteredPokemons(allPokemons, activeFilter)}
        // onCardClick={onCardClick}
      />
      {allPokemons.length > shownPokemons.length && <ShowMoreBtn />}
    </>
  );
};

export default MainPage;

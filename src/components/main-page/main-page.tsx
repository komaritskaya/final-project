import React from 'react';
import { useSelector } from 'react-redux';
import {
  Pokemon, FilterType,
} from '../../types';
import MaterialContainer from '../../material/container';
import Navigation from '../navigation/navigation';
import PokemonsList from '../pokemons-list/pokemons-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';

const MainPage: React.FC = () => {
  const pokemons = useSelector((state) => state.data.pokemons);
  const activeFilter = useSelector((state) => state.app.filter);
  const shownPokemonsCount = useSelector((state) => state.app.shownPokemonsCount);

  const getFilteredPokemons = (unFilteredPokemons: Pokemon[], filter: FilterType): Pokemon[] => {
    if (filter === FilterType.CAUGHT) {
      return unFilteredPokemons.filter((pokemon) => pokemon.isCaught);
    }
    return unFilteredPokemons;
  };

  const getShownPokemons = (allPokemons, count) => allPokemons.slice(0, count);

  if (!pokemons) {
    return <div>loading</div>;
  }

  const filteredPokemons = getFilteredPokemons(pokemons, activeFilter);
  const shownPokemons = getShownPokemons(
    filteredPokemons, shownPokemonsCount,
  );

  return (
    <MaterialContainer>
      <Navigation />
      <PokemonsList
        pokemons={shownPokemons}
      />
      {filteredPokemons.length > shownPokemons.length && <ShowMoreBtn />}
    </MaterialContainer>
  );
};

export default MainPage;

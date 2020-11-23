import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { ActionCreator } from '../../reducers/reducer';
import { RootState } from '../../types';
import MainPage from '../main-page/main-page';
import PokemonPage from '../pokemon-page/pokemon-page';

// interface AppProps {
//   pokemons: RawPokemon[];
//   selectedPokemon: RawPokemon;
// }

const App: React.FC = () => {
  const allPokemons = useSelector((state: RootState) => state.pokemons);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/:id">
          <PokemonPage pokemons={allPokemons} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

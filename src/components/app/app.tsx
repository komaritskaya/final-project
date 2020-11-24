import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import PokemonPage from '../pokemon-page/pokemon-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/:id">
        <PokemonPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;

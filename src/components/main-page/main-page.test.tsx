import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import MainPage from './main-page';
import pokemons from '../../mocks/pokemons';

const mockStore = configureStore([]);

it('Should MainPage component render correctly', () => {
  const store = mockStore({
    data: {
      pokemons,
    },
    app: {
      shownPokemonsCount: 1,
    },
  });

  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <MainPage />
        </Router>
      </Provider>,
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

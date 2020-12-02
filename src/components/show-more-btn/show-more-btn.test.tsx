import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import ShowMoreBtn from './show-more-btn';
import pokemons from '../../mocks/pokemons';

const mockStore = configureStore([]);

it('Should ShowMoreBtn component render correctly', () => {
  const store = mockStore({
    data: {
      pokemons,
    },
    app: {
      filter: 'default',
    },
  });

  const node = renderer.create(
    <Provider store={store}>
      <ShowMoreBtn />,
    </Provider>,
  ).toJSON();

  expect(node).toMatchSnapshot();
});

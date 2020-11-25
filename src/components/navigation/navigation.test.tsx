import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Navigation from './navigation';

const mockStore = configureStore([]);

it('Should Navigation component render correctly', () => {
  const store = mockStore({
    app: {
      filter: 'default',
    },
  });

  const node = renderer.create(
    <Provider store={store}>
      <Navigation />,
    </Provider>,
  ).toJSON();

  expect(node).toMatchSnapshot();
});

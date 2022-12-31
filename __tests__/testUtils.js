import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import store from '../src/reducers/store';

export function renderWithProviders(component, initialState, renderOptions) {
  const mockStore = configureStore([thunk])(initialState);
  store.getState = () => initialState;
  jest.mock('reduxContainer/store/store', () => store);

  const queries = render(
    <>
      <Provider store={mockStore}>{component}</Provider>
    </>,
    renderOptions,
  );

  return {...queries, store};
}

export * from '@testing-library/react-native';

import 'react-native';
import React from 'react';
import Home from 'screen/Home';
import {render} from '@testing-library/react-native';

import {Provider} from 'react-redux';
import reducers from 'reducers';
import ReduxThunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';

describe('Home render test', () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
  });
});

import 'react-native';
import React from 'react';
import Home from 'screen/Home';
import {render} from '@testing-library/react-native';

import {Provider} from 'react-redux';
import {store} from 'reducers/store';

describe('Home render test', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
  });
});

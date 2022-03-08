import 'react-native';
import React from 'react';
import Home from 'screen/Home';
import {render} from '@testing-library/react-native';

describe('Home render test', () => {
  it('renders correctly', () => {
    render(<Home />);
  });
});

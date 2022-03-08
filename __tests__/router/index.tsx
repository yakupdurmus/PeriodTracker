import 'react-native';
import React from 'react';
import Router from 'router';
import {render} from '@testing-library/react-native';

describe('Route render test', () => {
  it('renders correctly', () => {
    render(<Router />);
  });
});

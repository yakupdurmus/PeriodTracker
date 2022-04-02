import 'react-native';
import React from 'react';
import Router from 'router/Container';
import {render} from '@testing-library/react-native';

describe('Route render test', () => {
  it('renders correctly', () => {
    render(<Router />);
  });
});

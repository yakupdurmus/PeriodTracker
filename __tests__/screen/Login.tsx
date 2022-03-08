import 'react-native';
import React from 'react';
import Login from 'screen/Login';
import {render} from '@testing-library/react-native';

describe('Login render test', () => {
  it('renders correctly', () => {
    render(<Login />);
  });
});

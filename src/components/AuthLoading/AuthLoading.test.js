import React from 'react';
import { shallow } from 'enzyme';
import AuthLoading from './AuthLoading';

describe('Testing AuthLoading Component', () => {
  it('renders without crashing', () => {
    shallow(<AuthLoading />);
  });
});
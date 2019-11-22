import React from 'react';
import { shallow } from 'enzyme';
import AuthLoading from '../AuthLoading';

describe('Testing Header Component', () => {
  it('renders without crashing', () => {
    shallow(<AuthLoading />);
  });
});
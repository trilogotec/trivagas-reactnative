import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';

describe('Testing Header Component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';

describe('Testing Register Component', () => {
  it('renders without crashing', () => {
    shallow(<Register />);
  });
});
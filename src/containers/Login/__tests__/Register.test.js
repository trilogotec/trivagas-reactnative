import React from 'react';
import { shallow } from 'enzyme';
import Register from '../Register';

describe('Testing Header Component', () => {
  it('renders without crashing', () => {
    shallow(<Register />);
  });
});
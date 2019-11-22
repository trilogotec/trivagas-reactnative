import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('Testing Header Component', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField';

describe('Testing TextField Component', () => {
  it('renders without crashing', () => {
    shallow(<TextField />);
  });
});
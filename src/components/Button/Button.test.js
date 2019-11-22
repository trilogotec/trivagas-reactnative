import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Testing Button Component', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });
});
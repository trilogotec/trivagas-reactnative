  
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Home from './Home';

const props = {};

storiesOf('Home', module)
  .add('default view', () => (
    <Home {...props} /> 
  ));
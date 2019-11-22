  
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Login from './Login';

const props = {};

storiesOf('Login', module)
  .add('default view', () => (
    <Login {...props} /> 
  ));
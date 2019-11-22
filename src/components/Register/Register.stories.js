  
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Register from './Register';

const props = {};

storiesOf('Register', module)
  .add('default view', () => (
    <Register {...props} /> 
  ));
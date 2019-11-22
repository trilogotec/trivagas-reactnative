  
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import TextField from './TextField';

const props = {};

storiesOf('TextField', module)
  .add('default view', () => (
    <TextField {...props} /> 
  ));
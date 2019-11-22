  
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AuthLoading from './AuthLoading';

const props = {};

storiesOf('AuthLoading', module)
  .add('default view', () => (
    <AuthLoading {...props} /> 
  ));
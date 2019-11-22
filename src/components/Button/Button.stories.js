  
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Button from './Button';

const props = {};

storiesOf('Button', module)
  .add('default view', () => (
    <Button {...props} /> 
  ));
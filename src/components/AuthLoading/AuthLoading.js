import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import {
  AuthLoadingContainer,
  ActivityIndicator,
  Message,
} from './AuthLoading.styles';

export default function AuthLoading() {
  return (
    <AuthLoadingContainer>
      <Message>Seja bem-vindo</Message>
      <ActivityIndicator />
    </AuthLoadingContainer>
  );
}

AuthLoading.defaultProps = {};
AuthLoading.propTypes = {};
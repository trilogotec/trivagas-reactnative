import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import {
  LoginContainer,
  LoginContent,
} from './Login.styles';

import TextField from '../TextField/TextField';
import Button from '../Button/Button';

export default function Login(props) {
  const {
    initialValues,
    validationSchema,
    onPressRegister,
    onSubmit,
  } = props;

  return (
    <LoginContainer>
      <KeyboardAvoidingView>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          >
          {(formik) => (
            <LoginContent>
              <TextField
                label="E-mail"
                placeholder="Digite seu e-mail"
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                value={formik.values.email}
                messageError={formik.errors.email}
              />
              <TextField
                label="Senha"
                placeholder="Digite sua senha"
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                value={formik.values.password}
                messageError={formik.errors.password}
              />
              <Button onPress={formik.handleSubmit}>Logar</Button>
              <Button link onPress={onPressRegister}>Não tem conta? Registre-se</Button>
            </LoginContent>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </LoginContainer>
  );
}

Login.defaultProps = {
  initialValues: {},
  validationSchema: null,
};
Login.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onPressRegister: PropTypes.func.isRequired,
};
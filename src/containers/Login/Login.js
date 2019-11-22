import React, { useEffect, useCallback } from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';

import Login from '../../components/Login/Login';

const createValidationSchema = () => {
  return yup.object().shape({
    email: yup.string()
      .required("E-mail requerido"),
    password: yup.string()
      .required("Senha requerida")
      .min(6, "Mínimo de 6 digitos")
  });
};

export default function LoginContainer(props) {
  const { navigation } = props;
  
  const dispatch = useDispatch();
  const validationSchema = createValidationSchema();

  const { authentication } = dispatch;

  const handleOnSubmit = useCallback(async (values) => {
    authentication.authenticate();
  });
  const handlePressRegister = useCallback(() => {
    navigation.navigate('Register');
  });

  return (
    <Login
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
      onPressRegister={handlePressRegister}
    />
  );
}

LoginContainer.navigationOptions = {
  title: 'Login'
};
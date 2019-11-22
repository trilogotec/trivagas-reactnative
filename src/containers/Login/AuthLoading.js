import React, { useEffect, useCallback } from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AuthLoading from '../../components/AuthLoading/AuthLoading';

export default function AuthLoadingContainer(props) {
  const { navigation } = props;
  
  const bootstrap = useCallback(async () => {
    // TODO: Pegar token do AsyncStorage e verificar de tá logado
    const logged = false;
    navigation.navigate(logged ? 'App' : 'Auth');
  });

  useEffect(() => {
    bootstrap();
  }, []);

  return <AuthLoading />;
}
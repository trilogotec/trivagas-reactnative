import React, { useEffect, useCallback } from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Register from '../../components/Register/Register';

export default function RegisterContainer(props) {
  const handlePressRegister = useCallback(() => {}, []);

  return (
    <Register
      onPressRegister={handlePressRegister}
    />
  );
}

RegisterContainer.navigationOptions = {
  title: 'Register'
};
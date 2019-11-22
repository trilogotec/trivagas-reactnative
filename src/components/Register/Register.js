import React from 'react';
import PropTypes from 'prop-types';
import {
  RegisterContainer,
  RegisterContent,
} from './Register.styles';

import TextField from '../TextField/TextField';
import Button from '../Button/Button';

export default function Register(props) {
  const { onPressRegister } = props;

  return (
    <RegisterContainer>
      <RegisterContent>
        <TextField
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextField
          label="E-mail"
          placeholder="Digite seu e-mail"
        />
        <TextField
          label="Password"
          placeholder="Digite sua senha"
        />
        <Button onPress={onPressRegister}>Criar conta</Button>
      </RegisterContent>
    </RegisterContainer>
  );
}

Register.defaultProps = {};
Register.propTypes = {
  onPressRegister: PropTypes.func.isRequired,
};
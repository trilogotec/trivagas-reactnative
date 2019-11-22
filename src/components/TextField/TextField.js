import React from 'react';
import PropTypes from 'prop-types';
import {
  TextFieldContainer,
  Label,
  TextInputContainer,
  TextInput,
  MessageError,
  Spacer,
} from './TextField.styles';

export default function TextField(props) {
  const {
    label,
    labelProps,
    messageError,
    ...restProps
  } = props;

  return (
    <TextFieldContainer>
      <Label {...labelProps}>{label}</Label>
      <TextInputContainer>
        <TextInput {...restProps} />
      </TextInputContainer>
      {!!messageError && <MessageError>{messageError}</MessageError>}
      <Spacer />
    </TextFieldContainer>
  );
}

TextField.defaultProps = {
  label: '',
  labelProps: {},
  messageError: '',
};
TextField.propTypes = {
  label: PropTypes.string,
  labelProps: PropTypes.object,
  messageError: PropTypes.string,
};
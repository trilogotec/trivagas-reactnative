import React from 'react';
import { TouchableNativeFeedback, TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import {
  ButtonContainer,
  Label,
} from './Button.styles';

const Touchable = Platform.select({
  ios: () => TouchableOpacity,
  android: () => TouchableNativeFeedback,
})();

export default function Button(props) {
  const {
    children,
    labelProps,
    loading,
    link,
    ...restProps
  } = props;

  return (
    <Touchable {...restProps}>
      <ButtonContainer link={link}>
        {!loading && <Label link={link} {...labelProps}>{children}</Label>}
        {loading && <ActivityIndicator />}
      </ButtonContainer>
    </Touchable>
  );
}

Button.defaultProps = {
  link: false,
  loading: false,
  labelProps: {},
};
Button.propTypes = {
  link: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.string.isRequired,
  labelProps: PropTypes.object,
};
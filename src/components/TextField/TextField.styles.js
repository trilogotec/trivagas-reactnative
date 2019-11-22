import styled from 'styled-components/native';
import colors from '../../styles/colors';
import general from '../../styles/general';

export const TextFieldContainer = styled.View``;
export const Label = styled.Text`
  font-weight: bold;
  margin-bottom: 8px;
`;
export const TextInputContainer = styled.View`
  padding: 5px;
  background-color: ${colors.backgroundTextField};
  border-radius: ${general.borderRadius}px;
`;
export const TextInput = styled.TextInput`
  padding-vertical: 10px;
  padding-horizontal: 5px;
`;
export const MessageError = styled.Text`
  color: ${colors.errorMessage};
`;
export const Spacer = styled.View`
  height: 15px;
`;
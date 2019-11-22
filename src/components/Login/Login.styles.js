import styled from 'styled-components/native';
import colors from '../../styles/colors';
import general from '../../styles/general';

export const LoginContainer = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${colors.backgroundScreen};
`;
export const LoginContent = styled.View`
  background-color: ${colors.white};
  border-radius: ${general.borderRadius};
  padding: 20px;
  margin-horizontal: 15px;
`;

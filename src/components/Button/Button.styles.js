import styled, { css } from 'styled-components/native';
import colors from '../../styles/colors';
import general from '../../styles/general';

export const ButtonContainer = styled.View`
  border-radius: ${general.borderRadius}px;
  height: 45px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;

  ${props => !props.link && css`
    background-color: ${colors.primaryColor[0]};
  `}
`;
export const Label = styled.Text`
  font-weight: bold;
  color: ${colors.white};
  
  ${props => props.link && css`
    color: ${colors.primaryColor[0]};
  `}
`;
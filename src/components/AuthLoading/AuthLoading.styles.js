import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const AuthLoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Message = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 15px;
  color: ${colors.gray[3]};
`;
export const ActivityIndicator = styled.ActivityIndicator``;
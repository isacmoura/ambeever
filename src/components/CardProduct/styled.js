import styled from 'styled-components/native'
import colors from '../../theme/colors'
import BoxRadius from '../commom/BoxRadius/BoxRadius'

export const Image = styled.Image`
  background-color: transparent;
  padding: 10px;
  width: 70px;
  height: 80px;
  align-items: flex-end;
  border-radius: 5px;
`
export const Text = styled.Text`
  color: ${colors.darkGray};
  font-weight: ${({ strong }) => (strong ? 'bold' : 300)};
  font-size: ${({ strong }) => (strong ? '18px' : '14px')};
`

export const touchableZone = styled.TouchableOpacity`
  align-items: center;
`;

export const Box = styled(BoxRadius)`
  padding: 0;
  height: 100px;
  width: 100px;
  padding: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

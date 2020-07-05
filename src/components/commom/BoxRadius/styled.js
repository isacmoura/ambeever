import styled from 'styled-components/native'
import colors from '../../../theme/colors'
import { TouchableOpacity } from 'react-native'

export const ContainerBox = styled(TouchableOpacity)`
  margin: 10px;
  width: 145px;
  height: 100px;
  border: 1px solid ${colors.darkGray};
  padding: 20px;
  align-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : colors.white};
`

import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Image = styled.Image`
  margin: 10px;
`

export const RowClickableContainer = styled(TouchableOpacity)`
  flex-direction: row;
  margin-left: 2px;
  align-items: center;
  justify-content: center;
`

export const SectionTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  align-self: flex-start;
  margin-left: 10px;
`

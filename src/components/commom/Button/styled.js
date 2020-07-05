import styled from 'styled-components/native'
import colors from '../../../theme/colors'


export const Button = styled.TouchableOpacity`
  background-color: ${colors.blue};
  width: 90%;
  height: 45px ;
  padding: 10px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
`

export const Text = styled.Text`
  align-self: center;
  /* color: ${colors.white}; */
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`

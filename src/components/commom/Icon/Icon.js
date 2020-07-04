import React from 'react'
import styled from 'styled-components/native'
import wallet from '../../../../assets/images/wallet.png'
const Image = styled.Image`
  height: 20px;
  width: 20px;
  margin: 0 10px;
`

const Icon = ({ iconName, ...props }) => <Image source={wallet} {...props} />

export default Icon

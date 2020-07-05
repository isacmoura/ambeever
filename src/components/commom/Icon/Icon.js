import React from 'react'
import styled from 'styled-components/native'

const Image = styled.Image`
  height: 20px;
  width: 20px;
  margin: 0 10px;
`

const Icon = ({ iconPath, ...props }) =>
  iconPath ? <Image source={iconPath} {...props} /> : null

export default Icon

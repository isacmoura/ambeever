import React from 'react'
import styled from 'styled-components/native'

const Image = styled.Image`
  border-radius: 50px;
  height: 100px;
  width: 100px;
`

const ImageCircle = (props) => <Image {...props}/>

export default ImageCircle;

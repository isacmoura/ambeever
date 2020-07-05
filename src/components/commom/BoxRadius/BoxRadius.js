import React from 'react'
import * as S from './styled'

const BoxRadius = ({ children, ...props }) => (
  <S.ContainerBox {...props}>{children}</S.ContainerBox>
)

export default BoxRadius

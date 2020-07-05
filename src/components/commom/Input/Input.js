import React from 'react'
import * as S from './styled'

export const Input = ({ iconPath, iconRight, ...props }) => (
  <S.InputContainer>
    {!iconRight && <S.Icon iconPath={iconPath} />}
    <S.TextInput {...props} />
    {iconRight && <S.Icon iconPath={iconPath} />}
  </S.InputContainer>
)

import React from 'react'
import * as S from './styled'
import Icon from '../Icon/Icon'

const Button = ({ title, iconName, iconRight, children, ...props }) => (
  <S.Button title={title} {...props}>
    {!iconRight && <Icon iconName="haha" />}
    <S.Text>{title}</S.Text>
    {children}
    {iconRight && <Icon iconName="haha" />}
  </S.Button>
)

export default Button

import React from 'react'
import * as S from './styled'
import Icon from '../Icon/Icon'

const Button = ({
  title,
  iconPath,
  onPress,
  iconRight,
  children,
  ...props
}) => (
  <S.Button title={title} onPress={onPress} {...props}>
    {!iconRight && <Icon iconPath={iconPath} />}
    <S.Text>{title}</S.Text>
    {children}
    {iconRight && <Icon iconPath={iconPath} />}
  </S.Button>
)

export default Button

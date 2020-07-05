import React from 'react'
import * as S from './styled'
import colors from '../../theme/colors'

const CardProduct = ({ imagePath, price, description, onPress }) => (
  <S.touchableZone onPress={onPress}>
    <S.Box backgroundColor={colors.yellow}>
      <S.Image source={imagePath} />
    </S.Box>
    {description && <S.Text>{description}</S.Text>}
    {price && <S.Text strong>{price}</S.Text>}
  </S.touchableZone>
)

export default CardProduct

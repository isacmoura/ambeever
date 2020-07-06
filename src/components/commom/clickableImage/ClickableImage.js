import React from 'react'
import { RowClickableContainer } from '../styled'
import * as S from './styled'
const ClickableImage = ({ imagePath, ...props }) =>
  imagePath ? (
    <RowClickableContainer {...props}>
      <S.Image source={imagePath} />
    </RowClickableContainer>
  ) : null

export default ClickableImage

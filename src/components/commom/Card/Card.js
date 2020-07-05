import React from 'react'
import BoxRadius from '../BoxRadius/BoxRadius'
import { Button } from 'react-native'
import * as S from './styled';

const CardImage = ({ imagePath, title="", btnLabel }) => (
  <BoxRadius>
    <S.ImgContainer>
      <S.Image source={imagePath} />
    </S.ImgContainer>
    <S.Text>{title}</S.Text>
    {btnLabel && <Button title={btnLabel}/>}
  </BoxRadius>
)

export default CardImage

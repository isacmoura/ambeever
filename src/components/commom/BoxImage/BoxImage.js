import React from 'react'
import BoxRadius from '../BoxRadius/BoxRadius'
import * as S from './styled';

const BoxImage = ({ imagePath, label }) => {
  return (
    <BoxRadius>
      <S.Image source={imagePath} />
      {label && <S.Text>{label}</S.Text>}
    </BoxRadius>
  )
}

export default BoxImage

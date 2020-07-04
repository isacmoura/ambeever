import React from 'react';
import * as S from './styled';

export const Input = ({iconName, ...props}) => <S.InputContainer>
    {iconName && <S.Icon iconName={iconName} />}
    <S.TextInput {...props}/>
</S.InputContainer>
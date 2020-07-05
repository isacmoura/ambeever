import styled from 'styled-components/native';
import BoxRadius from '../BoxRadius/BoxRadius';
import IconDefault from '../Icon/Icon';

export const InputContainer = styled(BoxRadius)`
    width: 90%;
    height: 40px ;
    padding: 10px;
    border-radius: 5px;
    flex-direction: row;
    justify-content: space-between;
`;

export const TextInput = styled.TextInput`
    width: 100%;
`;

export const Icon = styled(IconDefault)`
    align-self: flex-start;
`;
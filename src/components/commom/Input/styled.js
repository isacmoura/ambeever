import styled from 'styled-components/native';
import BoxRadius from '../BoxRadius/BoxRadius';
import IconDefault from '../Icon/Icon';
import colors from '../../../theme/colors';

export const InputContainer = styled(BoxRadius)`
    width: 90%;
    height: 40px ;
    padding: 10px;
    border-radius: 5px; 
    flex-direction: row;
    justify-content: space-between;
`;

export const TextInput = styled.TextInput.attrs({placeholderTextColor: colors.gray})`
    width: 90%;
    height: 100%; 
`;

export const Icon = styled(IconDefault)`
    align-self: flex-start;
    margin-right: 10px;
`;
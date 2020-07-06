import styled from 'styled-components/native';
import { colors } from '../../theme';
import { FlatList } from 'react-native';

export const HeaderContainer = styled.View`
    justify-content: space-around;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const AddressContainer = styled.View`
    flex-direction: column;
    margin-right: 30px;
`;

export const address = styled.Text`
    color: ${colors.orange};
    font-size: 16px;
`;

export const CardContainer = styled.View`
    align-self: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CustomFlatList = styled(FlatList)`
    margin-bottom: 50px;
`;
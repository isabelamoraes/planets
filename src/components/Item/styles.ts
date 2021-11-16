import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    height: 65px;

    background: ${({ theme }) => theme.colors.shape};
    border-radius: 30px;
    margin-top: 20px;

    flex-direction: row;
    align-items: center;
    padding-left: 30px;
`;

export const Wrapper = styled.View`
    flex-direction: column;
    margin-left: 30px;
`;

export const Property = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
`;

export const Value = styled.Text`
    font-family: ${({ theme }) => theme.fonts.titleBold};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(16)}px;
`;
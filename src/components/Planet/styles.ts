import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    padding-top: 80px;

    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height}px;

    align-items: center;
    justify-content: center;
`;

export const PlanetButton = styled(TouchableOpacity).attrs({
    activeOpacity: 1
})``;
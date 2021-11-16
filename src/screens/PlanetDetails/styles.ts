import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(LinearGradient).attrs({
    colors: [theme.colors.backgroundLinearPrimary, theme.colors.backgroundLinearSecondary]
  })`
  flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 250px;

    justify-content: center;
    align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;

    top: 60px;
    left: 20px;

    z-index: 2;
`;

export const HeaderStars = styled.View`
    position: absolute;

    z-index: 0;
    top: -20px;
`;

export const Content = styled(ScrollView).attrs({
    showsVerticalScrollIndicator: false
})`
    padding: 30px;
    padding-top: 0px;
`;

export const InfoTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.titleBold};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(36)}px;

    text-transform: uppercase;
`;

export const Info = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(16)}px;

    text-align: justify;

    margin-top: 22px;
`;

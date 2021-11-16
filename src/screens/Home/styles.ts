import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(LinearGradient).attrs({
  colors: [theme.colors.backgroundLinearPrimary, theme.colors.backgroundLinearSecondary]
})`
  flex: 1;
`;

export const SystemLines = styled.View`
  left: -229px;
  top: -24px;
  
  position: absolute;
  z-index: 0;
`;

export const SystemStars = styled.View`
  position: absolute;
  z-index: 1;
`;

export const SystemSun = styled.View`
  position: absolute;
  z-index: 2;
`;

export const AstronautHome = styled.View`
  left: 37px;
  top: 172px;

  z-index: 3;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;

  text-align: right;

  top: 130px;
  margin-right: 30px;
`;

export const TitleBold = styled.Text`
  font-family: ${({ theme }) => theme.fonts.titleBold};
`;

export const Button = styled(RectButton)`
  background-color: ${({ theme }) =>  theme.colors.button};
  width: 260px;
  height: 65px;
  border-radius: 30px;

  position: absolute;
  align-self: center;
  bottom: 30px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.titleBold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-right: 20px;
  text-transform: uppercase;
`;
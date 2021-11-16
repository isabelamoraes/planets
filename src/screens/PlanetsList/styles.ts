import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../styles/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(LinearGradient).attrs({
    colors: [theme.colors.backgroundLinearPrimary, theme.colors.backgroundLinearSecondary]
  })`
  flex: 1;
`;

export const SystemLines = styled.View`
  left: -240px;
  top: -35px;
  
  position: absolute;
  z-index: 0;
`;

export const SystemStars = styled.View`
  top: 80px;
  
  position: absolute;
`;

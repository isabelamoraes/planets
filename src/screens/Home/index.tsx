import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "styled-components";

import Lines from '../../assets/lines.svg';
import Stars from '../../assets/starsHorizontal.svg';
import Sun from '../../assets/sun.svg';
import Astronaut from '../../assets/astronaut.svg';

import { 
  Container,
  SystemLines,
  SystemStars,
  SystemSun,
  AstronautHome,
  Title,
  TitleBold,
  Button,
  TextButton
} from "./styles";

export function Home({navigation}: any) {
  const theme = useTheme();

  function handlePlanetsList(){
    navigation.navigate('PlanetsList');
  }

  return <Container>
    <SystemLines>
      <Lines 
        width={870}
        height={870}
      />
    </SystemLines>

    <SystemStars>
      <Stars/>
    </SystemStars>

    <SystemSun>
      <Sun />
    </SystemSun>

    <AstronautHome>
      <Astronaut 
        width={342}
        height={342}
      />
    </AstronautHome>

    <Title>
      do you{'\n'}
      know the{'\n'}
      <TitleBold>planets</TitleBold> of the{'\n'}
      solar system?{'\n'}
    </Title>

    <Button
      onPress={handlePlanetsList}
    >
      <TextButton>Explore</TextButton>

      <MaterialIcons
        name="arrow-right-alt"
        size={24}
        color={theme.colors.text}
      />
    </Button>
  </Container>;
}

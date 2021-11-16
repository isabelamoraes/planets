import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import { LogBox } from 'react-native';

import theme from "./src/styles/theme";
import { Routes } from "./src/routes";


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function App() {
  
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    OpenSans_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Routes />
    </ThemeProvider>
  );
}

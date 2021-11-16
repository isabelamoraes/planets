import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { PlanetsList } from '../screens/PlanetsList';
import { PlanetDetails } from '../screens/PlanetDetails';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen
                    name="Home"
                    component={Home}
                />

                <Screen
                    name="PlanetsList"
                    component={PlanetsList}
                />

                <Screen
                    name="PlanetDetails"
                    component={PlanetDetails}
                />
            </Navigator>
        </NavigationContainer>
    )
}
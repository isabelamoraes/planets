import React from 'react';
import { FlatList } from 'react-native';

import Lines from '../../assets/lines.svg';
import Stars from '../../assets/starsVertical.svg';

import { Planet } from '../../components/Planet';
import { PlanetProps, planets } from '../../utils/planets';

import {
    Container,
    SystemLines,
    SystemStars,
} from './styles';

export function PlanetsList({navigation}: any){
    
    function handlePlanet(planet: PlanetProps){
        navigation.navigate('PlanetDetails', planet);
    }

    return(
        <Container>
            <SystemLines>
            <Lines 
                width={870}
                height={870}
            />
            </SystemLines>

            <SystemStars>
                <Stars
                    width={411}
                    height={731}
                />
            </SystemStars>

            <FlatList
                horizontal
                pagingEnabled
                data={planets}
                keyExtractor={planets => planets.name}
                decelerationRate={0}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Planet 
                        image={item.image}
                        handlePlanet={() => handlePlanet(item)}
                    />
                )}

            />

        </Container>
    );
}
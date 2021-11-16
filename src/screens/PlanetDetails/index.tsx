import React from 'react';
import { useRoute } from '@react-navigation/core';
import { useTheme } from 'styled-components';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MotiView } from 'moti';

import Stars from '../../assets/starsHorizontal.svg';

import { Item } from '../../components/Item';

import { PlanetProps } from '../../utils/planets';

import {
    Container,
    Header,
    HeaderStars,
    InfoTitle,
    Title,
    Info,
    Content,
    Description,
    BackButton
} from './styles';

export function PlanetDetails({navigation}: any){
    const theme = useTheme();
    const route = useRoute();

    const {name, order, description, distance, period, area, image: Image} = route.params as PlanetProps;

    function handleBack(){
        navigation.goBack()
    }

    return(
        <Container>
            <Header>
                <BackButton
                    onPress={handleBack}
                >
                    <MaterialIcons
                        name='chevron-left'
                        size={30}
                        color={theme.colors.text}
                    />
                </BackButton>

                <HeaderStars>
                    <Stars />
                </HeaderStars>

                <MotiView
                    from={{
                        rotate: '0deg'
                    }}
                    animate={{
                        rotate: '360deg'
                    }}
                    transition={{
                        loop: true,
                        type: 'timing',
                        repeatReverse: false,
                        duration: 27000,
                        delay: 0,
                    }}
                >
                <Image 
                    width={173}
                />
                </MotiView>
            </Header>

            <Content>
                <InfoTitle>
                    <Title>{name}</Title>

                    <Info>{order} planet{'\n'}from the Sun</Info>
                </InfoTitle>

                <Description>{description}</Description>

                <Item 
                    icon="wb-sunny"
                    property="Distance from Sun:"
                    value={distance}
                />

                <Item 
                    icon="timelapse"
                    property="Orbital period:"
                    value={period}
                />

                <Item 
                    icon="crop-free"
                    property="Surface area:"
                    value={area}
                />

            </Content>
        </Container>
    );
}
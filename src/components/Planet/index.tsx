import React from 'react';
import { SvgProps } from 'react-native-svg';
import { MotiView } from '@motify/components';

import {
    Container,
    PlanetButton
} from './styles';

interface Props {
    image: React.FC<SvgProps>;
    handlePlanet(): void; 
}

export function Planet({image: Image, handlePlanet}: Props){
    
    return(
        <Container>
            <PlanetButton
                onPress={handlePlanet}
            >
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
                <Image height={400}/>
                </MotiView>
            </PlanetButton>
        </Container>
    );
}
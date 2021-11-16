import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from 'styled-components';

import {
    Container,
    Wrapper,
    Property,
    Value
} from './styles';

interface Props {
    icon:any;
    property: string;
    value: string;
}

export function Item({
    icon,
    property, 
    value
}: Props){
    const theme = useTheme();

    return(
        <Container>
            <MaterialIcons
                name={icon}
                size={30}
                color={theme.colors.text}
            />

            <Wrapper> 
                <Property>{property}</Property>

                <Value>{value}</Value>
            </Wrapper>
        </Container>
    );
}
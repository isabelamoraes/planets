import { SvgProps } from 'react-native-svg';

import MercurySVG from '../assets/mercury.svg';
import VenusSVG from '../assets/venus.svg';
import EarthSVG from '../assets/earth.svg';
import MarsSVG from '../assets/mars.svg';
import JupiterSVG from '../assets/jupiter.svg';
import SaturnSVG from '../assets/saturn.svg';
import UranusSVG from '../assets/uranus.svg';
import NeptuneSVG from '../assets/neptune.svg';

export interface PlanetProps {
    name: string;
    order: string;
    description: string;
    distance: string;
    period: string;
    area: string;
    image: React.FC<SvgProps>;
}

export const planets: PlanetProps[] = [
    {
        name: 'Mercury',
        order: 'first',
        description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.",
        distance: '57.91 million km',
        period: '88 days',
        area: '74.8 million km²',
        image: MercurySVG
    },
    {
        name: 'Venus',
        order: 'second',
        description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        distance: '108.2 million km',
        period: '225 days',
        area: '460.2 million km²',
        image: VenusSVG
    },
    {
        name: 'Earth',
        order: 'third',
        description: "Earth is the third planet from the Sun and the only astronomical object known to harbour and support life. 29.2% of Earth's surface is land consisting of continents and islands. ",
        distance: '149.6 million km',
        period: '365 days',
        area: '510.1 million km²',
        image: EarthSVG
    },
    {
        name: 'Mars',
        order: 'fourth',
        description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
        distance: '227.9 million km',
        period: '687 days',
        area: '144.8 million km²',
        image: MarsSVG
    },
    {
        name: 'Jupiter',
        order: 'fifth',
        description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.",
        distance: '778.5 million km',
        period: '12 years',
        area: '61.42 billion km²',
        image: JupiterSVG
    },
    {
        name: 'Saturn',
        order: 'sixth',
        description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.",
        distance: '1.434 billion km',
        period: '29 years',
        area: '42.7 billion km²',
        image: SaturnSVG
    },
    {
        name: 'Uranus',
        order: 'seventh',
        description: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares, grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        distance: '2.871 billion km',
        period: '84 years',
        area: '8.083 billion km²',
        image: UranusSVG
    },
    {
        name: 'Neptune',
        order: 'eighth',
        description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.",
        distance: '4.495 billion km',
        period: '165 years',
        area: '7.618 billion km²',
        image: NeptuneSVG
    }
]
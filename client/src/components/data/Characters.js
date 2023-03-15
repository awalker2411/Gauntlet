import Brute from '../../assets/images/characters/Brute.png';
import Arcanist from '../../assets/images/characters/Arcanist.png';
import Bulwark from '../../assets/images/characters/Bulwark.png';
import Engineer from '../../assets/images/characters/Engineer.png';
import DreadKnight from '../../assets/images/characters/dreadKnight.png';
import Shadowblade from '../../assets/images/characters/Shadowblade.png';
import Carousel from 'react-bootstrap/Carousel';


const characters = [
    {
        id: 1,
        name: 'Brute',
        image: Brute,
    },
    {
        id: 2,
        name: 'Arcanist',
        image: Arcanist,
    },
    {
        id: 3,
        name: 'Bulwark',
        image: Bulwark,
    },
    {
        id: 4,
        name: 'Engineer',
        image: Engineer,
    },
    {
        id: 5,
        name: 'DreadKnight',
        image: DreadKnight,
    },
    {
        id: 6,
        name: 'Shadowblade',
        image: Shadowblade,
    },
]

export default function CharacterCarousel({index, handleSelect}) {
    
    return (
        <Carousel
            interval={null}
            activeIndex={index}
            onSelect={handleSelect}
            style={{
                width: 350,
                backgroundColor: 'black',
            }}>
            {characters.map(item => (

                <Carousel.Item key={item.id}>
                    <img
                        className="d-block w-100"
                        src={item.image}
                        alt={item.description}
                    />
                    <Carousel.Caption>
                        <h3 id="charName">{item.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}
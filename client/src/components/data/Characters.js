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
        description: 'A Bruiser with good attack damage and sustain.',
        image: Brute
    },
    {
        id: 2,
        name: 'Arcanist',
        description: 'A mage who can summon powerful magic.',
        image: Arcanist
    },
    {
        id: 3,
        name: 'Bulwark',
        description: 'Low damage, but an absolute tank.',
        image: Bulwark
    },
    {
        id: 4,
        name: 'Engineer',
        description: 'A skillfull marksman with a lot of utility.',
        image: Engineer
    },
    {
        id: 5,
        name: 'DreadKnight',
        description: 'Another Bruiser with considerable damage.',
        image: DreadKnight
    },
    {
        id: 6,
        name: 'Shadowblade',
        description: 'An Assasin with stealth capabilities.',
        image: Shadowblade
    },
]

export default function CharacterCarousel() {
    return (
        <Carousel
        style={{
            width: 350,
            backgroundColor: 'black',
            opacity: '90%'
        }}>
            {characters.map(item => (

                <Carousel.Item key={item.id}>
                    <img
                        className="d-block w-100"
                        src={item.image}
                        alt={item.description}
                    />
                    {/* <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            ))}
        </Carousel>
    )
}
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Figure from 'react-bootstrap/Figure';
import Velnias from '../../assets/images/characters/Velnias.png';
import Brute from '../../assets/images/characters/Brute.png';
import Button from 'react-bootstrap/esm/Button';
import Thud from '../../assets/sounds/thudSound.wav';
import createCharacter from '../../utils/combat';

const characters = [
    {
    id: 1, name: 'Brute'
    },
    {
    id: 2, name: 'Engineer'
    },
    {
    id: 3, name: 'DreadKnight'
    },
    {
    id: 4, name: 'Bulwark'
    },
    {
    id: 5, name: 'Shadowblade'
    },
    {
    id: 6, name: 'Arcanist'
    }
]


export default function Gauntlet() {
    let characterName
    function play () {
        new Audio(Thud).play();
    }

    function storeName(event){
        characterName = event.target.innerHTML
    }

    function startGauntlet(){
        play()
        createCharacter(characterName)
    }


    return (
        <Container>
            <h2>
                Welcome to the Arena
            </h2>
            <Dropdown>
                <Dropdown.Toggle className="Btn" id="dropdown-button-dark-example1" variant="secondary">
                    Character Select
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    {characters.map(item => (
                        <Dropdown.Item key={item.id} onClick={storeName} >{item.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            <Row className="arena">
                <Col xs={6}>
                    <Figure>
                        <img
                            
                            src={Brute}
                        />
                    </Figure>
                </Col>
                <Col
                    className=''
                    xs={6}>
                    <Figure>
                        <img
                            
                            src={Velnias}/>
                    </Figure>
                </Col>
            </Row>
            <Button
            onClick={startGauntlet}
                variant="primary"
                // onClick={startBattle}
                className="Btn btn-secondary"
            >
                Begin Battle
            </Button>
        </Container>
    )
}
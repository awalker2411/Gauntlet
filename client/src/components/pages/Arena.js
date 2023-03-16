import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Figure from 'react-bootstrap/Figure';
import Velnias from '../../assets/images/characters/Velnias.png';
import Brute from '../../assets/images/characters/Brute.png';
import Arcanist from '../../assets/images/characters/Arcanist.png';
import Bulwark from '../../assets/images/characters/Bulwark.png';
import DreadKnight from '../../assets/images/characters/dreadKnight.png';
import Engineer from '../../assets/images/characters/Engineer.png';
import Shadowblade from '../../assets/images/characters/Shadowblade.png';
import Button from 'react-bootstrap/esm/Button';
import Thud from '../../assets/sounds/thudSound.wav';
import createCharacter from '../../utils/combat';
import { useRef } from 'react';

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
    const characterSelect = useRef(null)
    const characterImg = useRef(null)
    const postBattle = useRef(null)
    const gauntletBtn = useRef(null)
    const waves = useRef(null)
    let characterName
    function play () {
        new Audio(Thud).play();
    }

    function storeName(event){
        characterName = event.target.innerHTML
        characterSelect.current.classList.remove('d-none')
        characterSelect.current.innerHTML = characterName

        switch (characterName){
            case 'Brute':
                characterImg.current.src = Brute
                break
            case 'Engineer':
                characterImg.current.src = Engineer
                break
            case 'DreadKnight':
                characterImg.current.src = DreadKnight
                break
            case 'Bulwark':
                characterImg.current.src = Bulwark
                break
            case 'Shadowblade':
                characterImg.current.src = Shadowblade
                break
            case 'Arcanist':
                characterImg.current.src = Arcanist
                break
            default:
                characterImg.current.src = Brute
        }
    }

    function startGauntlet(){
        play()
        createCharacter(characterName)

        const wavesReached = localStorage.getItem('waves')
        waves.current.innerHTML = 'Waves Defeated: '+wavesReached
        postBattle.current.classList.remove('d-none')
        gauntletBtn.current.classList.add('d-none')
        
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
                            ref={characterImg}
                            src={Brute}
                        />
                    </Figure>
                    <span className="charName" ref={characterSelect}></span>
                </Col>
                <Col
                    className=''
                    xs={6}>
                    <Figure>
                        <img
                            className="velnias"
                            src={Velnias}/>
                        <span className="charName" >Velnias</span>
                    </Figure>
                </Col>
            </Row>
            <Col className='arenaRecord d-none' ref={postBattle}>
                <span className='p-2' ref={waves}></span>

                <br></br>
                <br></br>
                <span className='p-2'>NEW HIGHEST WAVE RECORD!</span>
            </Col>
            <Button
                onClick={startGauntlet}
                variant="primary"
                className="Btn btn-secondary mt-3"
                ref={gauntletBtn}
            >
                Begin Battle
            </Button>
        </Container>
    )
}
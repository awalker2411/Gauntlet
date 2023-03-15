import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Figure from 'react-bootstrap/Figure';
import Velnias from '../../assets/vids/Velnias.mp4';
import Brute from '../../assets/images/characters/Brute.png';
import Button from 'react-bootstrap/esm/Button';
import Thud from '../../assets/sounds/thudSound.wav';


export default function Gauntlet() {

    function play () {
        new Audio(Thud).play();
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
                    <Dropdown.Item href="#/action-1">
                        Brute
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Engineer</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">DreadKnight</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Bulwark</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Shadowblade</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Arcanist</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Row className="arena">
                <Col xs={6}>
                    <Figure>
                        <img
                            width={500}
                            height={500}
                            alt="500x300"
                            src={Brute}
                        />
                    </Figure>
                </Col>
                <Col
                    className=''
                    xs={6}>
                    
                        <video autoPlay loop muted
                            style={{
                                position: 'relative',
                                width: "100%",
                                left: "55%",
                                top: "50%",
                                height: "100%",
                                objectFit: "fill",
                                transform: "translate(-50%, -50%)",
                                zIndex: "0"
                            }}
                        >
                            <source src={Velnias} type="video/mp4" />
                        </video>
                    
                </Col>
            </Row>
            <Button
            onClick={play}
                variant="primary"
                // onClick={startBattle}
                className="Btn btn-secondary"
            >
                Begin Battle
            </Button>
        </Container>
    )
}
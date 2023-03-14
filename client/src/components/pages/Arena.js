import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Figure from 'react-bootstrap/Figure';
import Velnias from '../../assets/images/characters/Velnias.png';
import Brute from '../../assets/images/characters/Brute.png';
import Button from 'react-bootstrap/esm/Button';


export default function Gauntlet() {
    
    return (
        <Container>
            <h2>
                Welcome to the Arena
            </h2>
            <Dropdown>
                <Dropdown.Toggle className="Btn" id="dropdown-button-dark-example1" variant="secondary">
                    Select a character to send to the Arena
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
                    <Figure>
                        <img
                            width={700}
                            height={475}
                            alt="700x300"
                            src={Velnias}
                        />
                    </Figure>
                </Col>
            </Row>
            <Button 
            variant="primary" 
            // onClick={startBattle}
            className="Btn btn-secondary"
            >
                Begin Battle
            </Button>
        </Container>
    )
}
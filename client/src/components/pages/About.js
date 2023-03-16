import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Chris from '../../assets/images/devs/chris.jpg';
import Anthony from '../../assets/images/devs/anthonyWalker.png'

export default function About() {
    return (
        <>
            <Container>
                <h2>
                    About The Developers
                </h2>
                <Row>
                    <Col xs={6} className='aboutDevs'>
                        <Card style={{ width: '30rem', backgroundColor: 'black' }}>
                            <Card.Img variant="top" src={Chris} />
                            <Card.Body>
                                <Card.Title>Chris Simmonds</Card.Title>
                                <Card.Text>
                                    Full Stack Web Developer. I enjoyed partnering up with Mr. Walker on creating this game. I mostly handled the front-end of this application. It's always exciting to see a concept come to fruition and interact with the code you've developed!
                                    <br/><br/>
                                    Check out my Github to see additional projects.
                                </Card.Text>
                                <Button className="Btn btn-secondary" variant="primary">
                                    <a target="_blank" href="https://github.com/Christoph551">
                                        Github Profile
                                    </a>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} className='aboutDevs'>
                        <Card style={{ width: '30rem', backgroundColor: 'black' }}>
                            <Card.Img variant="top" src={Anthony} />
                            <Card.Body>
                                <Card.Title>Anthony Walker</Card.Title>
                                <Card.Text>
                                    Full Stack Web Developer. Working with Mr. Simmonds was an absolute blast! I handled most of back-end, with a large focus on the combot logic for our Arena. It's been an extremely challenging task, but thankfully, I'm always up for a challenge!
                                    <br></br>
                                    If you're interested in my work, check out my Github below.
                                </Card.Text>
                                <Button className="Btn btn-secondary">
                                    <a target="_blank" href="https://github.com/awalker2411">
                                        Github Profile
                                    </a>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
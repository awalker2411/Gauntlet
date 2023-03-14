import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Chris from '../../assets/images/devs/chris.jpg';

export default function About() {
    return (
        <>
            <Container>
                <h2>
                    About The Developers
                </h2>
                <Row className="arena">
                    <Col xs={6}>
                        <Card style={{ width: '18rem', backgroundColor: 'black' }}>
                            <Card.Img variant="top" src={Chris} />
                            <Card.Body>
                                <Card.Title>Chris Simmonds</Card.Title>
                                <Card.Text>
                                    Full Stack Web Developer. I enjoyed partnering up with Mr. Walker on creating this game. I mostly handled the front-end of this application. It's always exciting to see a concept come to fruition and interact with the code you've developed!
                                    <br/><br/>
                                    Check out my Github to see additional projects.
                                </Card.Text>
                                <Button className="Btn" variant="primary">
                                    <a target="_blank" href="https://github.com/Christoph551">
                                        Github Profile
                                    </a>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6}>
                        <Card style={{ width: '18rem', backgroundColor: 'black' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className="Btn" variant="primary">
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
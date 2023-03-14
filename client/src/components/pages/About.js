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
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Chris} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Github Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Github Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
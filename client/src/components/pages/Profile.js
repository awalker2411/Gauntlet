import CreateCharacter from '../modals/CreateCharacter';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Brute from '../../assets/images/characters/Brute.png'
import { useState } from 'react';


function Profile({selectedIndex,img}) {
    const [userStats, insertUserStats] = useState();

    return (
        <>
            <h3>
                Welcome to your profile, 
            </h3>
            <CreateCharacter insertUserStats={insertUserStats}/>
            <main
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginTop: 50,
                }}
            >
                <p className='profileDescription'>
                    Below, you can view the stats from your most recent Arena match!
                </p>
                <Container className='statsContainer'>
                    <Figure className='container'
                        style={{
                            marginTop: 50,
                        }}
                    >
                        <img src={Brute}/>
                    </Figure>
                    <h3 className='prevBattle'>
                        Previous Battle:
                    </h3>
                    <Row className='stats'>
                        <Row>
                            <Col xs={6}>
                                User Stats:
                                <p className='userStats'>
                                    {/* Health Points - {insertUserStats[selectedIndex].health} */}
                                </p>
                                <p className='userStats'> 
                                    Attack Points - 
                                </p>
                                <p className='userStats'>
                                    Defense Points - 
                                </p>
                                <p className='userStats'>
                                    Speed Points - 
                                </p>
                            </Col>
                            <Col xs={6}>
                                Character Stats:
                                <p className='stats'>
                                    Average Wave Reached - 
                                </p>
                                <p className='stats'> 
                                    Highest Wave Reached - 
                                </p>
                                <p className='stats'>
                                    Number of Arena Battles - 
                                </p>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </main>
        </>
    );
}

export default Profile;
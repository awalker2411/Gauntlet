import CreateCharacter from '../modals/CreateCharacter';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';


function Profile({selectedIndex,img}) {
    const [userStats, insertUserStats] = useState({});

    const { data } = useQuery(GET_ME)
    let user

    if(data){
        user = data.username
    }

    return (
        <>
            {user ? (
                <>
                    <h3>
                    Welcome to your profile, {data.username}
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
                    {/* <p className='profileDescription'>
                        Below, you can view the stats from your most recent Arena match!
                    </p> */}
                    <Container id='statsContainer'>
                        <Figure className='container'
                            style={{
                                marginTop: 50,
                            }}
                            >
                            <img src={userStats.image}/>
                        </Figure>
                        <h3 className='prevBattle'>
                            Previous Battle:
                        </h3>
                        <Row className='stats'>
                            <Row>
                                <Col xs={6}>
                                    User Stats:
                                    <p className='userStats'>
                                        Health Points - {userStats.health}
                                    </p>
                                    <p className='userStats'> 
                                        Attack Points - {userStats.attack}
                                    </p>
                                    <p className='userStats'>
                                        Defense Points - {userStats.defense}
                                    </p>
                                    <p className='userStats'>
                                        Speed Points - {userStats.speed}
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
            ) : <CreateCharacter insertUserStats={insertUserStats}/>}
        </>
    );
}

export default Profile;
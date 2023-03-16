import CreateCharacter from '../modals/CreateCharacter';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Auth from '../../utils/auth';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';


function Profile({selectedIndex,img}) {
    const { loading, data } = useQuery(GET_ME);
    const username = data?.me.username || [];
    const [userStats, insertUserStats] = useState({});

    return (
        <>
            <div className="title">
            {Auth.loggedIn() ? (
            <h3 className="title">Welcome to your profile, {loading ? "" : username}</h3>
            ) : (
            <h2 className="title"> </h2>
            )}
            </div>
            {username ? (
                <>
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
                    <section
                    className="card howItWorks"
                    style={{
                        marginTop: 100,
                        display: 'flex',
                        justifyContent: 'center',
                    }}>

                    <h3
                        style={{ color: '#910505' }}
                        className="card-header btn-primary">
                        How it works:
                    </h3>

                    <article className="container">
                        <p className="tutorialLine">
                            First, create an account if you don't have one already.
                        </p>
                        <p className="tutorialLine">
                            You'll be able to select one of 6 characters, each with their own base stats.
                        </p>
                        <p className="tutorialLine">
                            Once you've selected a character, you can enter the Arena to see how many waves of enemies your champion can take on.
                        </p>
                        <p className="tutorialLine">
                            Be sure to keep tabs on your profile, as your stats will be there from the previous battle!
                        </p>
                    </article>
                </section>
                
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
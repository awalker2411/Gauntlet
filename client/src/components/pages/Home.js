import NewUserModal from '../modals/NewUser';
import Figure from 'react-bootstrap/Figure';
import CharacterGif from '../../assets/images/characters/Mercenaries-Gif.gif'


export default function Home() {

    return (
        <main>
            <NewUserModal />

            <h2 className='mt-5'>
                Welcome to Gauntlet, an in-browser gaming experience!
            </h2>

            <div
                className="tutorial"
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <section
                    className="card howItWorks"
                    style={{
                        marginTop: 100,
                        display: 'flex',
                        justifyContent: 'center',
                    }}>

                    <h3
                        style={{ color: 'white' }}
                        className="card-header btn-primary">
                        How it works:
                    </h3>

                    <article className="container">
                        <p className="tutorialLine">
                            First, create an account if you don't have one already.
                        </p>
                        <p className="tutorialLine">
                            You'll be able to select one of 6 champions, each with their own base stats.
                        </p>
                        <p className="tutorialLine">
                            Once you've selected a character, you can enter the Arena to see how many waves of enemies your champion can take on.
                        </p>
                        <p className="tutorialLine">
                            Be sure to keep tabs on your profile, as your stats will be there from the previous battle!
                        </p>
                    </article>
                </section>
                <Figure>
                    <Figure.Image
                        width={500}
                        height={180}
                        alt="500x180"
                        src={CharacterGif}
                    />
                    <Figure.Caption
                        style={{ color: '#e41010e5', fontSize: 24}}
                    >
                        Choose one of these characters and see how many waves of enemies you can defeat!
                    </Figure.Caption>
                </Figure>
            </div>
        </main>
    )
}
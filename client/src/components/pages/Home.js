import Figure from 'react-bootstrap/Figure';
import CharacterGif from '../../assets/images/characters/Mercenaries-Gif.gif'


export default function Home() {

    return (
        <main>
            <h2 className="mx-5 mb-5">
                Welcome to Gauntlet, where we've developed an in-browser gaming experience!
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
                        {/* <p className="tutorialLine">
                            Be sure to keep tabs on your profile, as your stats will be there from the previous battle!
                        </p> */}
                    </article>
                </section>
                <Figure>
                    <Figure.Caption
                        className="textCard mx-5"
                        style={{ color: '#3ae410e5', fontSize: 24, marginTop: 50 }}
                    >
                        Choose one of these characters and see how many waves of enemies you can defeat!
                    </Figure.Caption>
                    <Figure.Image
                        width={500}
                        height={180}
                        alt="500x180"
                        src={CharacterGif}
                    />
                </Figure>
            </div>
        </main>
    )
}
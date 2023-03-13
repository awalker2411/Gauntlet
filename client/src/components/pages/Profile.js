import CharacterCarousel from '../data/Characters';

function UncontrolledExample() {
    return (
        <>
            <h3>
                Welcome to your profile, Chris!
            </h3>
            <main
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginTop: 100,
                }}
            >
                <p className='profileDescription'>
                    Select your character to send into the Arena. Once you have selected a character, we'll show you the base stats of that user, along with the results from the most recent Arena match! 
                </p>
                <CharacterCarousel/>
            </main>
        </>
    );
}

export default UncontrolledExample;
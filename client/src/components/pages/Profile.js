import CharacterCarousel from '../data/Characters';
import CreateCharacter from '../modals/CreateCharacter';

function UncontrolledExample() {
    return (
        <>
            <h3>
                Welcome to your profile, Chris!
            </h3>
            <CreateCharacter/>
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
                    Below, you can view the stats from your most recent Arena match!
                </p>
                {/* <CharacterCarousel/> */}
            </main>
        </>
    );
}

export default UncontrolledExample;
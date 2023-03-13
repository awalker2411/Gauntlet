import NewUserModal from '../modals/NewUser';

export default function Home() {

    const openModal = () => {
        // Need to figure out login to open up the modal before I can see what is inside of it.
        // Then need to have login and signup from the same modal, like tabs
        const myModal = document.getElementById('myModal')
        const myInput = document.getElementById('myInput')

        myModal.addEventListener('shown.bs.modal', () => {
            myInput.focus()
        })
    }

    return (
        <main>
            <NewUserModal/>

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
                        width: '40%',
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'black'
                    }}>

                    <h3
                        style={{ color: 'white'}}
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
            </div>
        </main>
    )
}
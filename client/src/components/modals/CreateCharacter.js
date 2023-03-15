import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CharacterCarousel from '../data/Characters';

const characters = [
    {
        id: 1,
        name: 'Brute',
        description: 'A Bruiser with high attack damage and health.',
        health: 400,
        attack: 70,
        defense: 20,
        speed: 10,
    },
    {
        id: 2,
        name: 'Arcanist',
        description: 'A mage who can summon powerful magic.',
        health: 150,
        attack: 35,
        defense: 30,
        speed: 10,
    },
    {
        id: 3,
        name: 'Bulwark',
        description: 'Low damage, but an absolute tank.',
        health: 400,
        attack: 15,
        defense: 45,
        speed: 5,
    },
    {
        id: 4,
        name: 'Engineer',
        description: 'A skillfull marksman who is quick on his feet to maintain distance.',
        health: 100,
        attack: 69,
        defense: 17,
        speed: 25,
    },
    {
        id: 5,
        name: 'DreadKnight',
        description: 'A fearsome Bruiser with decent attack damage and defenses.',
        health: 200,
        attack: 30,
        defense: 30.5,
        speed: 10,
    },
    {
        id: 6,
        name: 'Shadowblade',
        description: 'An Assasin with stealth capabilities and speed.',
        health: 75,
        attack: 45,
        defense: 15,
        speed: 75,
    },
];

export default function CreateCharacter() {
    const [lgShow, setLgShow] = useState(false);
    const [charSelect, setCharSelect] = useState('');
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
        setCharSelect(characters[selectedIndex].description);
    };

    return (
        <>
            <Button onClick={() => setLgShow(true)} className="Btn btn-secondary">
                Create New Character
            </Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header
                    style={{ backgroundColor: 'black' }}
                    closeButton
                >
                    <Modal.Title
                        style={{ display: 'flex', justifyContent: 'center' }}
                        id="modalTitle"
                    >
                        Create Your Character
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: 'black',
                        color: 'white',
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <section>
                            <h3 style={{borderBottom: '1px solid #3ae410e5'}}>Description:</h3>
                            <p className="charPar">{charSelect}</p>
                        </section>
                        <article className="baseStats">
                            <h3 style={{borderBottom: '1px solid #3ae410e5'}}>Base Stats:</h3>
                            {index >= 0 && (
                                <ul>
                                    <li>Health: {characters[index].health}</li>
                                    <li>Attack: {characters[index].attack}</li>
                                    <li>Defense: {characters[index].defense}</li>
                                    <li>Speed: {characters[index].speed}</li>
                                </ul>
                            )}
                        </article>
                        <Button id="charConfirm" className="Btn btn-secondary">
                            Confirm Selection
                        </Button>
                    </div>
                    <CharacterCarousel index={index} handleSelect={handleSelect} />
                </Modal.Body>
            </Modal>
        </>
    );
}

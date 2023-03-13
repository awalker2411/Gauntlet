import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CharacterCarousel from '../data/Characters';

export default function CreateCharacter() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            {/* This button will need to be connected to the submit button from when a user signs up for a new account */}
            <Button onClick={() => setLgShow(true)} className="loginBtn btn-secondary">Create New Character</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header
                    style={{ backgroundColor: 'black' }}
                    closeButton>
                    <Modal.Title
                        style={{ display: 'flex', justifyContent: 'center' }}
                        id="example-modal-sizes-title-lg">
                        Create Your Character
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body
                    style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'black', color: 'white' }}>
                    <div
                        style={{ display: 'flex', flexDirection: 'column' }}
                    >

                        <section>
                            <h4>
                                Description:
                            </h4>
                            <p className="charPar">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio, deleniti
                            </p>
                        </section>
                        <article>
                            <h4>
                                Base Stats:
                            </h4>
                            <p className="charPar">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio, deleniti
                            </p>
                        </article>
                        <Button
                            className="loginBtn btn-secondary"
                        >
                            Confirm Selection
                        </Button>
                    </div>
                    <CharacterCarousel />
                </Modal.Body>
            </Modal>
        </>
    );
}
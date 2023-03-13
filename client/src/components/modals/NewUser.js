import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function NewUserModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button 
            variant="primary" 
            onClick={handleShow}
            className="loginBtn btn-secondary"
            >
                Login / Signup
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title
                        style={{ color: 'black' }}
                    >
                        Log In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" id="emailInput">
                            <Form.Label
                            style={{ color: 'black' }}
                            >
                                Email address
                                </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            id="passwordInput"
                        >
                            <Form.Label
                            style={{ color: 'black' }}
                            >
                                Password
                            </Form.Label>
                            <Form.Control type="password" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose} id="loginBtn">
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

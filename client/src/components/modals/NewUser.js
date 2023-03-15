import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import AuthService from '../../utils/auth'

export default function NewUserModal() {
    const [userFormData, setUserFormData] = useState({email: '', password: ''})
    const [validated] = useState(false)
    const [show, setShow] = useState(false);
    const [loginUser, {error}] = useMutation(LOGIN_USER)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity)
        handleClose()
    }
    
    const handleSignup = () =>{
        handleClose()
    }

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
                <Modal.Header style={{ backgroundColor: 'black' }} closeButton>
                    <Modal.Title
                        style={{ color: '#3ae410e5' }}
                    >
                        Log In
                    </Modal.Title>
                    <Modal.Title
                        className="d-none" style={{ color: 'black' }}
                    >
                        Sign Up
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'black' }}>
                    <Form>
                        <Form.Group className="mb-3" id="emailInput">
                            <Form.Label
                            style={{ color: '#3ae410e5' }}
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
                            style={{ color: '#3ae410e5' }}
                            >
                                Password
                            </Form.Label>
                            <Form.Control type="password" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: 'black' }}>
                    <Button variant="secondary" onClick={handleClose} className="loginBtn btn-secondary">
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleLogin} id="loginBtn" className="loginBtn btn-secondary">
                        Login
                    </Button>
                    <Button className="d-none" variant="primary" onClick={handleSignup} id="signupBtn">
                        Sign Up
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

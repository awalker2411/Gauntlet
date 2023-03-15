import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import { ADD_USER } from '../../utils/mutations';
import AuthService from '../../utils/auth'
import { useRef } from 'react';

export default function NewUserModal() {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' })
    const [signupFormData, setSignupFormData] = useState({username: ''})
    const usernameInputField = useRef(null)
    const [validated] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [show, setShow] = useState(false);
    const [loginUser, {error}] = useMutation(LOGIN_USER)
    const [ addUser ] = useMutation(ADD_USER)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setUserFormData({...userFormData, [name]: value})
    }

    const handleLogin = async(event) => {
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity === false){
            event.preventDefault()
            event.stopPropagation()
        }
        try {
            const { data } = await loginUser({ variables: {...userFormData}})
            AuthService.login(data.login.token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }
        setUserFormData({
            email: '',
            password: '',
        });
        setSignupFormData({
            username: ''
        })
    }

    const handleSignUp = async(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }try{
            const {data} = await addUser({variables: {...userFormData, ...signupFormData}});
            AuthService.login(data.addUser.token)
        }catch(err){
            console.error(err);
            setShowAlert(true);
        }
        setUserFormData({
            email: '',
            password: '',
        });
        setSignupFormData({
            username: ''
        })
    }

    const handleFormSubmit = async(event) => {
        if(usernameInputField.current.classList.contains('d-none')){
        handleLogin()
        }else{
        handleSignUp()
        }
    }



    return (
        <>
            <Button
                variant="primary"
                onClick={handleShow}
                className="Btn btn-secondary"
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
                        className="d-none" style={{ color: '#3ae410e5' }}
                    >
                        Sign Up
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'black' }}>
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                        <Form.Group className='mb-3 d-none' id="usernameInput" ref={usernameInputField}>
                            <Form.Label htmlFor='username'>Username</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Your username'
                                name='username'
                                onChange={handleInputChange}
                                value={userFormData.username}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" id="emailInput">
                            <Form.Label
                                style={{ color: '#3ae410e5' }}
                            >
                                Email address
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="name@example.com"
                                onChange={handleInputChange}
                                value={userFormData.email}
                                required
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
                            <Form.Control type="password" rows={3} placeholder="Your Password" name="password" onChange={handleInputChange} value={userFormData.password} required/>
                            <Button type="submit" variant="primary" id="loginBtn" className="Btn btn-secondary" disabled={!( userFormData.email && userFormData.password)}>

                                Login
                            </Button>
                            <Button type="submit" className="d-none" variant="primary" id="signupBtn" disabled={!( userFormData.email && userFormData.password)}>
                                Sign Up
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: 'black' }}>
                    <Button variant="secondary" onClick={handleClose} className="Btn btn-secondary">
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

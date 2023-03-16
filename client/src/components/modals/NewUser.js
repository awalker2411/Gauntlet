import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from 'react-router-dom';
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Signup = () => {
    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <main>
            <div>
                <h2>Sign-up</h2>
                {data ? (
                    <p>
                    </p>
                ) : (
                    <form 
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px'}} 
                        onSubmit={handleFormSubmit}>
                        <div className="alignForm">
                            <div>
                                <h3>Username:</h3>
                                <input
                                    className="mb-3"
                                    name="username"
                                    type="text"
                                    value={formState.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <div>
                                    <h3 className="nameLabel">Email:</h3>
                                    <input
                                        className="mb-3"
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <h3 className="nameLabel">Password:</h3>
                                    <input
                                        className="mb-5"
                                        name="password"
                                        type="password"
                                        value={formState.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="logSign">
                                    <button
                                        className="Btn mb-4"
                                        style={{ cursor: "pointer" }}
                                        type="submit"
                                    >
                                        Sign-up
                                    </button>
                                    <Link className="Btn mb-3" to="/Login">
                                        Login instead
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
                {error && <div className="loading">{error.message}</div>}
            </div>
        </main>
    );
};
export default Signup;
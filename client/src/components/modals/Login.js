import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
        setFormState({
            email: '',
            password: '',
        });
    };
    return (
        <main>
            <div>
                <h2>Login</h2>
                {data ? (
                    <p>
                    </p>
                ) : (
                    <form 
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px'}}
                        onSubmit={handleFormSubmit}>
                        <div className="alignForm">
                            <div>
                                <div>
                                    <h3>Email:</h3>
                                </div>
                                <input
                                    className="mb-3"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <div>
                                    <h3>Password:</h3>
                                </div>
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
                                    Login
                                </button>
                                <Link className="Btn mt-4" to="/NewUser">
                                    Sign-up instead
                                </Link>
                            </div>
                        </div>
                    </form>
                )}
                {error && <div className="loading">{error.message}</div>}
            </div>
        </main>
    );
};
export default Login;
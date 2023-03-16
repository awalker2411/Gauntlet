import * as React from 'react';
import { Link } from 'react-router-dom';
import FireNav2 from '../assets/animations/fireNav2.mp4';
import Music from '../components/Audio';
import Auth from '../utils/auth';

const pages = ['Home', 'Profile', 'Gauntlet', 'About', 'Login'];


export default function Navbar() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div
                    className="container-fluid"
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <video autoPlay loop muted
                        style={{
                            position: 'absolute',
                            width: "100%",
                            left: "50%",
                            top: "50%",
                            height: "90%",
                            objectFit: "cover",
                            transform: "translate(-50%, -50%)",
                            zIndex: "-1"
                        }}
                    >
                        <source src={FireNav2} type="video/mp4" />
                    </video>

                    <a className="navbar-brand" href="/">Gauntlet</a>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"

                    >
                        <ul

                            className="navbar-nav me-auto mb-2 mb-lg-0">
                            {pages.map((page) => {
                                <li key={page} onClick={handleCloseNavMenu}>
                                    <a textAlign="center">
                                        <Link to={`/${page}`}>
                                            {page}
                                        </Link>
                                    </a>
                                </li>
                            })}

                            <li className="nav-item mx-5">
                                <a
                                    className="nav-link"
                                    aria-current="page"
                                    href="/Arena">
                                    Arena
                                </a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="/Profile">Profile</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="/About">About</a>
                            </li>
                            <li className="nav-item mx-5">
                                <Music/>
                            </li>
                            <li className="nav-item mx-5">
                                {Auth.loggedIn() ? (<a className="nav-link" onClick={logout}>Logout</a>) : (<a className="nav-link" href="/Login">Login</a>)}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
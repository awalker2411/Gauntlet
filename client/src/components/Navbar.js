import * as React from 'react';
import { Link } from 'react-router-dom';


const pages = ['Home', 'Profile', 'Gauntlet', 'About', 'Login/Signup' ];

export default function Navbar() {
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
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Gauntlet</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                    className="collapse navbar-collapse" 
                    id="navbarSupportedContent"
                    
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {pages.map((page) => {
                                <li key={page} onClick={handleCloseNavMenu}>
                                    <a textAlign="center">
                                        <Link to={`/${page}`}>
                                            {page}
                                        </Link>
                                    </a>
                                </li>
                            })}

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Arena">Arena</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Profile">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/About">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
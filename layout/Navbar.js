import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand" to="/" style={{color: 'white'}}>Navbar</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/prod1" style={{color: 'white'}}>Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{color: 'white'}}>Contact Us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color: 'white'}}>About Us</Link>
            </li>
            </ul>
        </div>
        </nav>
    )
};

export default Navbar

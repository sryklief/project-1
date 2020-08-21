import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand" to="/" style={{color: 'white'}}>FLOKKIES FLOCK</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{color: 'white'}}>Contact Us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color: 'white'}}>About Us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/prod1" style={{color: 'white'}}>Products</Link>
            </li>
            <li> 
                <NavDropdown id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/prod1">Feed</NavDropdown.Item>
                    <NavDropdown.Item href="/prod2">Medication</NavDropdown.Item>
                    <NavDropdown.Item href="/prod3">Equipment</NavDropdown.Item>
                </NavDropdown>
            </li>
            </ul>
        </div>
        </nav>
    )
};

export default Navbar;

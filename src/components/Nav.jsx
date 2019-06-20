import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function Nav() {
    return (
        <nav className="nav">
            <h1>Logo</h1>
            <ul>
                <Link to="/" className="navStyle"><li>Home</li></Link>
                <Link to="/Upcoming" className="navStyle"> <li>Upcoming Items</li></Link>
                <Link to="/Weapons" className="navStyle"><li>Weapons</li></Link>
                <Link to="/Stores" className="navStyle"><li>Stores</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;

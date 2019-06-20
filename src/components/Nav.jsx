import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function Nav() {
    return (
        <nav className="nav">
            <h1>Logo</h1>
            <ul>
                <Link to="/" className="navStyle"><li>Home</li></Link>
                <Link to="/Shop" className="navStyle"> <li>Shop</li></Link>
                <Link to="/Artist" className="navStyle"><li>Artist</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;

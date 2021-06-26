import React from 'react'
import './nav.css';
import {Link} from 'react-router-dom';

// we use Link tag instead of a href tag becoz of router
function Nav() {
    return (
        <nav class = "nav-bar">
            <h1>Logo</h1>
            <ul class="nav-list">
                <Link to ='/'>
                <li>Home</li>
                </Link>

                <Link to ='/about'>
                <li>About</li>
                </Link>

                <Link to ='/movies'>
                <li>Movies</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
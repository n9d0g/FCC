import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav: React.FC = () => {
    const navStyle = {
        color: 'white',
    }

    return (
        <nav>
            <Link style={navStyle} to="/">
                <h3 className="App">logo</h3>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/connect">
                    <li>Connect</li>
                </Link>
                <Link style={navStyle} to="/events">
                    <li>Events</li>
                </Link>
                <Link style={navStyle} to="sermons">
                    <li>Sermons</li>
                </Link>
                <Link style={navStyle} to="give">
                    <li>Give</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav

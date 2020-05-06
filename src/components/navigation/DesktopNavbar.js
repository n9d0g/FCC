import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyDesktopNavbar = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    background: red;
    color: white;

    height: 15vh;
`

const DesktopNavbar = () => {
    return (
        <MyDesktopNavbar>
            <div className="logo">logo</div>

            <ul className="nav-links">
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/" className="link">About</Link></li>
                <li><Link to="/" className="link">Contact</Link></li>
            </ul>

            <button>Button</button>
        </MyDesktopNavbar>
    );
};

export default DesktopNavbar;
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
import logo from '../../../images/square-logo.png'
import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import AboutDropdown from './dropdowns/AboutDropdown'
import ConnectDropdown from './dropdowns/ConnectDropdown'

const NavBar = () => {
    return (
        <div className="navbar-container">
            <Link to="/" className="logo">
                <img className="logo-img" src={logo} alt="FCC logo" />
            </Link>
            <div className="links-container">
                <Link to="/" className="home-nav">
                    Home
                </Link>
                <Dropdown overlay={AboutDropdown}>
                    <Link to="/about" className="about-nav">
                        About <DownOutlined />
                    </Link>
                </Dropdown>
                <Dropdown overlay={ConnectDropdown}>
                    <Link to="/connect" className="connect-nav">
                        Connect <DownOutlined />
                    </Link>
                </Dropdown>
                <Link to="/events" className="events-nav">
                    Events
                </Link>
                <Link to="/sermons" className="sermons-nav">
                    Sermons
                </Link>

                <Link to="/give" className="give-nav">
                    Give
                </Link>
            </div>
        </div>
    )
}

export default NavBar

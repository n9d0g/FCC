import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const AboutDropdown = (
    <Menu className="dropdown">
        <Menu.Item>
            <Link to="/values">What We Believe</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/mission-vision">Mission and Vision</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/leadership">Leadership</Link>
        </Menu.Item>
    </Menu>
)

export default AboutDropdown

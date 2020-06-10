import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const AboutDropdown = (
    <Menu className="dropdown">
        <Menu.Item>
            <Link to="/">Our Values</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/">Location</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/">Elders</Link>
        </Menu.Item>
    </Menu>
)

export default AboutDropdown

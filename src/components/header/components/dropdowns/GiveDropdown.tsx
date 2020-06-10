import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const GiveDropdown = (
    <Menu className="dropdown">
        <Menu.Item>
            <Link to="/">item1</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/">item2</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/">item3</Link>
        </Menu.Item>
    </Menu>
)

export default GiveDropdown

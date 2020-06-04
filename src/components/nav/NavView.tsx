import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import '../../images/n9d0ggy.png'

const { Header } = Layout

const NavView: React.FC = () => {
    return (
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/connect">Connect</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/sermons">Sermons</Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="/events">Events</Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link to="/give">Give</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default NavView

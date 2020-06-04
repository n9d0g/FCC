import React, { FC } from 'react'
import '../app/App.css'
import './components/HomeView.css'
import { Layout, Breadcrumb } from 'antd'
import HomeButton from './components/HomeButton'
import { Link } from 'react-router-dom'

const { Content } = Layout

const HomeView: FC = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <h1 className="module-header">Home</h1>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div className="home-content">
                Welcome to Freedom in Christ Church :)
            </div>
            <div className="newButton">
                <Link to="/about">
                    <HomeButton text="I'm new here" />
                </Link>
                <Link to="/sermons">
                    <HomeButton text="Sermons" />
                </Link>
            </div>
        </Content>
    )
}

export default HomeView

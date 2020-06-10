import React, { FC } from 'react'
import './styles/HomeView.css'
import { Layout } from 'antd'
import HomeButton from './components/HomeButton'
import { Link } from 'react-router-dom'

const { Content } = Layout

const HomeView: FC = () => {
    return (
        <Content className="content-container">
            <h1 className="module-header">Home</h1>
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

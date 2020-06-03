import React, { FC } from 'react'
import '../app/App.css'
import './components/HomeContent.css'
import { Layout, Breadcrumb } from 'antd'

const { Content } = Layout

const HomeView: FC = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div className="home-content">
                Welcome to Freedom in Christ Church :)
            </div>
        </Content>
    )
}

export default HomeView

import React, { FC } from 'react'
import '../app/App.css'
import { Layout, Breadcrumb } from 'antd'

const { Content } = Layout

const ConnectView: FC = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <h1 className="module-header">Connect Page</h1>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Connect</Breadcrumb.Item>
            </Breadcrumb>
        </Content>
    )
}

export default ConnectView

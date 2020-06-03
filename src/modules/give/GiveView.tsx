import React, { FC, useEffect } from 'react'
import '../app/App.css'
import { Layout, Breadcrumb } from 'antd'
import GiveForm from './components/GiveForm'

const { Content } = Layout
const GiveView: FC = () => {
    useEffect(() => {
        console.log('give page has loaded')
    })

    return (
        <Content style={{ padding: '0 50px' }}>
            <h1 className="module-header">Give Page</h1>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Give</Breadcrumb.Item>
            </Breadcrumb>
            <GiveForm />
        </Content>
    )
}

export default GiveView

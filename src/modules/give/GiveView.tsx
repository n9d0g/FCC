import React, { FC } from 'react'
import { Layout } from 'antd'
import GiveForm from './components/GiveForm'

const { Content } = Layout
const GiveView: FC = () => {
    return (
        <Content className="content-container">
            <h1 className="module-header">Give Page</h1>
            <GiveForm />
        </Content>
    )
}

export default GiveView

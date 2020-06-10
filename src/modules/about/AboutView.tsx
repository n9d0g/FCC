import React, { FC } from 'react'
import './styles/AboutView.css'
import { Layout, Breadcrumb } from 'antd'

const { Content } = Layout

const AboutView: FC = () => {
    const VisionStatement: string =
        'a Christ-centred, Holy Spirit-led community committed to the building of strong relationships and planting of healthy, reproducing churches.'
    const MissionStatement: string =
        'to introduce and represent Christ through our nurturing small group-driven ministries in the community.'

    return (
        <Content className="content-container">
            <h1 className="module-header">About Page</h1>
            <Breadcrumb className="breadcrumb-container">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>About</Breadcrumb.Item>
            </Breadcrumb>
            <div className="about-content">
                Mission: {MissionStatement}
                <br />
                Vision: {VisionStatement}
            </div>
        </Content>
    )
}

export default AboutView

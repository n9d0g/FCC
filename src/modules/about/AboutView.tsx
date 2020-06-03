import React, { FC } from 'react'
import '../app/App.css'
import './components/AboutContent.css'
import { Layout, Breadcrumb } from 'antd'

const { Content } = Layout

const AboutView: FC = () => {
    const VisionStatement: string =
        'a Christ-centred, Holy Spirit-led community committed to the building of strong relationships and planting of healthy, reproducing churches.'
    const MissionStatement: string =
        'to introduce and represent Christ through our nurturing small group-driven ministries in the community.'

    return (
        <Content style={{ padding: '0 50px' }}>
            <h1 className="module-header">About Page</h1>
            <Breadcrumb style={{ margin: '16px 0' }}>
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

import React, { FC } from 'react'
import { Layout } from 'antd'
import ModuleListItem from '../../components/module-list-item/ModuleListItem'
import './styles/ConnectView.css'

const { Content } = Layout

const ConnectView: FC = () => {
    return (
        <Content className="connect-content">
            <h1 className="module-header">Connect Page</h1>
            <div className="content-container">
                <ModuleListItem
                    link="/ministries"
                    section="Ministries"
                    subtext="See the ministries at FCC"
                />
                <ModuleListItem
                    link="/small-groups"
                    section="Small Groups"
                    subtext="Small groups in Mississauga and Brampton"
                />
                <ModuleListItem
                    link="/services"
                    section="Weekly Church Services"
                    subtext="Location and Service times"
                />
            </div>
        </Content>
    )
}

export default ConnectView

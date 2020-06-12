import React, { FC } from 'react'
import './styles/AboutView.css'
import ModuleListItem from '../../components/module-list-item/ModuleListItem'

const AboutView: FC = () => {
    return (
        <div className="about-content">
            <h1 className="module-header">About Home</h1>
            <div className="content-container">
                <ModuleListItem
                    link="/values"
                    section="Values"
                    subtext="Doctrinal Statement"
                />
                <ModuleListItem
                    link="/mission-vision"
                    section="Mission and Vision"
                    subtext="To spread the gospel by word and by deed"
                />
                <ModuleListItem
                    link="/leadership"
                    section="Leadership"
                    subtext="Meeting the Leadership Team"
                />
            </div>
        </div>
    )
}

export default AboutView

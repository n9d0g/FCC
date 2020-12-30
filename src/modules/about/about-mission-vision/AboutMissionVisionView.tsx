import React, { FC, useEffect } from 'react'
import '../styles/AboutView.css'
import './AboutMissionVisionView.css'
import * as statements from '../../../data/statements.json'
import TitleAndBreadcrumb from '../../../components/title-and-breadcrumb/TitleAndBreadcrumb'

const AboutMissionVisionView: FC = () => {
    useEffect(() => {
        document.title = 'Mission & Vision | FCC'
        return () => {
            console.log('unmount')
        }
    }, [])

    return (
        <div className="content-container">
            <div className="about-subtitle-container">
                <TitleAndBreadcrumb
                    title="Mission and Vision"
                    secondBreadcrumbTitle="About"
                />
            </div>
            <div className="about-content">
                Mission: {statements.mission}
                <br />
                Vision: {statements.vision}
            </div>
        </div>
    )
}

export default AboutMissionVisionView

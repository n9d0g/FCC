import React, { FC } from 'react'
import '../styles/AboutView.css'
import './AboutMissionVisionView.css'

const AboutMissionVisionView: FC = () => {
    const VisionStatement: string =
        'a Christ-centred, Holy Spirit-led community committed to the building of strong relationships and planting of healthy, reproducing churches.'
    const MissionStatement: string =
        'to introduce and represent Christ through our nurturing small group-driven ministries in the community.'

    return (
        <div className="content-container">
            <h1 className="module-header">FCC Mission and Vision</h1>
            <div className="about-content">
                Mission: {MissionStatement}
                <br />
                Vision: {VisionStatement}
            </div>
        </div>
    )
}

export default AboutMissionVisionView

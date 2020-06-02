import React, { useState, useEffect } from 'react'
import '../../app/App.css'

const About: React.FC = () => {
    const VisionStatement: string =
        'a Christ-centred, Holy Spirit-led community committed to the building of strong relationships and planting of healthy, reproducing churches.'
    const MissionStatement: string =
        'to introduce and represent Christ through our nurturing small group-driven ministries in the community.'

    return (
        <div className="App">
            <h1>About Page</h1>
            <h2>Mission: {MissionStatement}</h2>
            <h2>Vision: {VisionStatement}</h2>
        </div>
    )
}

export default About

import React, { FC } from 'react'
import './styles/AboutView.css'
import AboutMainView from './about-main/AboutMainView'

const AboutView: FC = () => {
    return (
        <div className="about-content">
            <h1 className="module-header">About Home</h1>
            <AboutMainView />
        </div>
    )
}

export default AboutView

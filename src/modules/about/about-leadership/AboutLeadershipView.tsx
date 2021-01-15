import React, { FC, useEffect } from 'react'
import HeadshotCard from '../../../components/headshot-card/HeadshotCard'
import TitleAndBreadcrumb from '../../../components/title-and-breadcrumb/TitleAndBreadcrumb'
import * as statements from '../../../data/statements.json'
import './AboutLeadershipView.css'

const AboutLeadershipView: FC = () => {
    useEffect(() => {
        document.title = 'Leadership | FCC'
    }, [])

    return (
        <div className="title-and-content-container">
            <div className="title-container">
                <TitleAndBreadcrumb
                    title="Leadership"
                    secondBreadcrumbTitle="About"
                />
            </div>
            <div className="title-description">
                <p className="title-big-center">
                    {statements['leadership-description']}
                </p>
            </div>
            <div className="dark-content-container">
                <div className="leadership-grid">
                    <HeadshotCard
                        name="Roland Yumul"
                        description="Elder - Chair"
                    />
                    <HeadshotCard
                        name="Lolita Irong"
                        description="Elder - 74 years old"
                    />
                    <HeadshotCard
                        name="Bernard Bersamin"
                        description="Elder - Closing Prayer"
                    />
                    <HeadshotCard
                        name="Errol Rasco"
                        description="Elder - Treasurer"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutLeadershipView

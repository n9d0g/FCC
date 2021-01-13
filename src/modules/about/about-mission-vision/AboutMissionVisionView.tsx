import React, { FC, useEffect } from 'react'
import '../styles/AboutView.css'
import './AboutMissionVisionView.css'
import * as statements from '../../../data/statements.json'
import TitleAndBreadcrumb from '../../../components/title-and-breadcrumb/TitleAndBreadcrumb'
import ValueStatement from '../../../components/value-statement/ValueStatement'

const AboutMissionVisionView: FC = () => {
    useEffect(() => {
        document.title = 'Mission & Vision | FCC'
    }, [])

    // map statements into array
    const jsonFile = require('../../../data/statements-of-faith.json')
    var arr: any = []
    Object.keys(jsonFile).forEach(function (key) {
        arr.push(jsonFile[key])
    })

    return (
        <div className="title-and-content-container">
            <div className="title-container">
                <TitleAndBreadcrumb
                    title="Mission and Vision"
                    secondBreadcrumbTitle="About"
                />
                <div className="title-picture-card-container">
                    <div className="title-picture-container"></div>
                    <div className="title-card-container">
                        <div className="title-card">
                            Our mission is to be {statements['mission']} Our
                            vision is {statements['vision']}
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="SOF-container">
                    <h2 className="content-title">Statements of Faith</h2>
                    <ul>
                        {arr.map(
                            (item: { title: string; description: string }) => (
                                <ValueStatement
                                    header={item.title}
                                    description={item.description}
                                />
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMissionVisionView

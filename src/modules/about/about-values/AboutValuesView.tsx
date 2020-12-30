import React, { FC, useEffect } from 'react'
import TitleAndBreadcrumb from '../../../components/title-and-breadcrumb/TitleAndBreadcrumb'
import './AboutValuesView.css'
import CoreValueItem from '../../../components/core-value-item/CoreValueItem'
import * as statements from '../../../data/statements.json'

const AboutValuesView: FC = () => {
    useEffect(() => {
        document.title = 'Values | FCC'
        return () => {
            console.log('unmount')
        }
    }, [])

    // map values into array
    const jsonFile = require('../../../data/values.json')
    var arr: any = []
    Object.keys(jsonFile).forEach(function (key) {
        arr.push(jsonFile[key])
    })

    return (
        <div className="title-and-content-container">
            <div className="title-container">
                <TitleAndBreadcrumb
                    title="What We Believe"
                    secondBreadcrumbTitle="About"
                />
                <div className="title-picture-card-container">
                    <div className="title-picture-container">
                        <div className="title-picture"></div>
                    </div>
                    <div className="title-card-container">
                        <p className="title-card">
                            {statements['about-values-description']}
                        </p>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <section className="about-core-values-container">
                    <h2 className="about-core-values-title">
                        <a
                            href="https://www.cmacan.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="CMA-text-link"
                        >
                            CMA
                        </a>
                        &nbsp;Core Values
                    </h2>
                    <div className="about-core-values-narrow">
                        <div className="core-value-container">
                            <ul>
                                {arr.map(
                                    (item: {
                                        title: string
                                        description: string
                                    }) => (
                                        <CoreValueItem
                                            header={item.title}
                                            description={item.description}
                                        />
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutValuesView

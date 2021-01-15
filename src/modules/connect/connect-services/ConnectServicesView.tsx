import React, { FC, useEffect } from 'react'
import LocationMap from '../../../components/location-map/LocationMap'
import TitleAndBreadcrumb from '../../../components/title-and-breadcrumb/TitleAndBreadcrumb'
import './ConnectServicesView.css'

const ConnectServicesView: FC = () => {
    useEffect(() => {
        document.title = 'Church Services | FCC'
    }, [])

    return (
        <div className="weekly-services-container">
            <div className="title-container">
                <TitleAndBreadcrumb
                    title="Weekly Services"
                    secondBreadcrumbTitle="Connect"
                />
                <div className="weekly-services-title-picture-container">
                    <div className="weekly-services-title-picture"></div>
                    <div className="weekly-services-title-description">
                        <p className="weekly-services-title-description-text">
                            Sunday mornings are a time for our local church to
                            gather together and celebrate all that God has done
                            and is currently doing in our midst. Come and join
                            us!
                        </p>
                    </div>
                </div>
            </div>
            <div className="weekly-services-content-container">
                <div className="weekly-services-content-location-container">
                    <div className="weekly-services-content-location-wrapper">
                        <div className="weekly-services-content-location-map-container">
                            <div className="weekly-services-content-location-map">
                                <LocationMap />
                            </div>
                        </div>
                        <div className="weekly-services-content-location-description-container">
                            <div className="weekly-services-content-location-description-wrapper">
                                <div className="weekly-services-content-location-description-title">
                                    <h2 className="weekly-services-content-location-description-title-text">
                                        Join us on Zoom!
                                    </h2>
                                </div>
                                <p>
                                    <strong>
                                        5225 Orbitor Drive, Mississauga, ON
                                    </strong>
                                </p>
                                <p className="weekly-services-content-location-description-text-container">
                                    When you come to Freedom in Christ Church,
                                    you can expect to be welcomed into a
                                    friendly environment by people who are
                                    genuinely excited to see you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectServicesView

import React, { FC, useEffect } from 'react'
import TitleAndBreadcrumb from '../../../components/title-and-breadcrumb/TitleAndBreadcrumb'
import Ministry from '../components/Ministry'
import './ConnectMinistriesView.css'

const ConnectMinistriesView: FC = () => {
    useEffect(() => {
        document.title = 'Ministries | FCC'
    }, [])

    return (
        <div className="ministries-container">
            <div className="title-container">
                <TitleAndBreadcrumb
                    title="Our Ministries"
                    secondBreadcrumbTitle="Connect"
                />
                <div className="ministries-title-picture-container">
                    <div className="ministries-title-picture"></div>
                    <div className="ministries-title-description">
                        <p className="ministries-title-description-text">
                            God created all of us with an inherent need for
                            community. It is in the context of meaningful
                            relationships with other believers that we grow as
                            disciples of Jesus Christ (Hebrews 10:24-25).
                            Connection Groups are the way we establish this kind
                            of biblical community.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ministries-pre-content-container">
                <div className="ministries-pre-content-title-container">
                    <h2 className="ministries-pre-content-title">
                        Connect with one of our Ministries!
                    </h2>
                </div>
            </div>
            <div className="ministries-content-container">
                <div className="ministries-content-ministries-container">
                    <Ministry />
                    <Ministry />
                    <Ministry />
                    <Ministry />
                </div>
            </div>
        </div>
    )
}

export default ConnectMinistriesView

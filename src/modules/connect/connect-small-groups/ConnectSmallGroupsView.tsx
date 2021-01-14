import React, { FC, useEffect } from 'react'
import TitleAndBreadcrumb from '../../../components/title-and-breadcrumb/TitleAndBreadcrumb'
import SmallGroup from '../components/SmallGroup'
import './ConnectSmallGroupsView.css'

const ConnectSmallGroupsView: FC = () => {
    useEffect(() => {
        document.title = 'Small Groups | FCC'
    }, [])

    return (
        <div className="small-group-container">
            <div className="title-container">
                <TitleAndBreadcrumb
                    title="Small Groups"
                    secondBreadcrumbTitle="Connect"
                />
                <div className="small-groups-title-picture-container">
                    <div className="small-groups-title-picture"></div>
                    <div className="small-groups-title-description">
                        <p className="small-groups-title-description-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
            <div className="small-group-pre-content-container">
                <div className="small-group-pre-content-title-container">
                    <h2 className="small-group-pre-content-title">
                        Join one of our Small Groups!
                    </h2>
                </div>
            </div>
            <div className="small-group-content-container">
                <div className="small-group-content-smallgroups-container">
                    <SmallGroup />
                    <SmallGroup />
                    <SmallGroup />
                    <SmallGroup />
                </div>
            </div>
        </div>
    )
}

export default ConnectSmallGroupsView

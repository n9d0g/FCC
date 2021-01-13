import React, { FC, useEffect } from 'react'
// import ModuleListItem from '../../components/module-list-item/ModuleListItem'
import ConnectList from './connect-landingpage/ConnectList'
import './styles/ConnectView.css'

const ConnectView: FC = () => {
    useEffect(() => {
        document.title = 'Connect | FCC'
    }, [])

    return (
        <section className="landing-page">
            <div className="landing-page-title-container">
                <div className="landing-page-wrapper">
                    <div className="landing-page-title">
                        <h1 className="landing-page-title-text">
                            Connect with us!
                        </h1>
                    </div>
                    <div className="landing-page-title-description-container">
                        <h2 className="landing-page-title-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                        </h2>
                    </div>
                </div>
            </div>
            <div className="landing-page-content-container">
                <div className="landing-page-picture-container1">
                    <div className="landing-page-picture-container2"></div>
                    <div className="landing-page-picture"></div>
                </div>
                <div className="landing-page-list-pages-container">
                    <div className="landing-page-list-pages">
                        <ConnectList />
                    </div>
                </div>
            </div>
            <div className="landing-page-jesus-container">
                <div className="landing-page-jesus-card-container">
                    <div className="landing-page-jesus-card">
                        <div className="landing-page-jesus-card-text-container">
                            <h1 className="landing-page-jesus-card-text-verse">
                                He gives us the victory through our Lord Jesus
                                Christ.
                            </h1>
                            <p>1 Corinthians 15:57</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConnectView

import React, { FC, useEffect } from 'react'
import TitleAndBreadcrumb from '../../components/title-and-breadcrumb/TitleAndBreadcrumb'
import GiveOption from './components/GiveOption'
import './styles/GiveView.css'

const GiveView: FC = () => {
    useEffect(() => {
        document.title = 'Give | FCC'
    }, [])

    return (
        <section className="give-page-container">
            <div className="give-title-container">
                <div className="give-title-spacing">
                    <TitleAndBreadcrumb title="Give" />
                </div>
                <div className="give-title-picture-container">
                    <div className="give-title-picture"></div>
                    <div className="give-title-description">
                        <p className="give-title-description-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="give-content-container">
                <div className="give-content-body-container">
                    <p className="give-content-body-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <div className="give-content-body-options-container">
                        <GiveOption />
                        <GiveOption />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GiveView

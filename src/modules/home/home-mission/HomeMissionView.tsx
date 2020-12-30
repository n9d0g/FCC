import React, { FC } from 'react'
import './HomeMissionView.css'
import * as statements from '../../../data/statements.json'

const HomeMissionView: FC = () => {
    return (
        <section className="home-mission">
            <div className="home-mission-text-container">
                <div className="home-mission-text">
                    The mission of Freedom in Christ Church is to be{' '}
                    {statements.mission}
                </div>
            </div>
        </section>
    )
}

export default HomeMissionView

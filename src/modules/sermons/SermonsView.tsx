import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SermonTile from '../../components/sermon-tile/SermonTile'
import TitleAndBreadcrumb from '../../components/title-and-breadcrumb/TitleAndBreadcrumb'
import './SermonsView.css'

const SermonsView: FC = () => {
    useEffect(() => {
        document.title = 'Sermons | FCC'
    }, [])

    return (
        <section className="sermons-page-container">
            <div className="title-container">
                <TitleAndBreadcrumb title="Sermons" />
                <div className="sermons-title-featured-sermon">
                    <Link
                        to="/sermons/featured"
                        className="sermons-title-featured-sermon-card-container"
                    >
                        <div className="sermon-title-featured-sermon-card-date">
                            January 10th, 2021
                        </div>
                        <h2 className="sermon-title-featured-sermon-card-title">
                            Sermon Title
                        </h2>
                        <div className="sermon-title-featured-sermon-card-speaker">
                            Firstname Lastname
                        </div>
                    </Link>
                    <Link
                        to="/sermons/featured"
                        className="sermon-title-featured-sermon-card-art"
                    ></Link>
                </div>
            </div>
            <div className="sermons-content-container">
                <div className="sermons-list-container">
                    <div className="sermon-list-container2">
                        <SermonTile />
                        <SermonTile />
                        <SermonTile />
                        <SermonTile />
                        <SermonTile />
                        <SermonTile />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SermonsView

import React, { FC, useEffect } from 'react'
import './FeaturedSermon.css'

const FeaturedSermon: FC = () => {
    useEffect(() => {
        document.title = 'Sermons | Jan. 11 | FCC'
    }, [])

    return (
        <div className="featured-sermon-page-container">
            <div className="featured-sermon-title-container">
                <div className="featured-sermon-title-description-container">
                    <div className="featured-sermon-title-description-item">
                        January 10th, 2021
                    </div>
                    <div className="featured-sermon-title-description-item">
                        Firstname Lastname
                    </div>
                    <div className="featured-sermon-title-description-item">
                        Psalm 18:1-3
                    </div>
                </div>
                <h1 className="featured-sermon-title">Sermon Title</h1>
            </div>
            <div className="featured-sermon-video-container"></div>
        </div>
    )
}

export default FeaturedSermon

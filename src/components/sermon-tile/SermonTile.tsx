import React from 'react'
import { Link } from 'react-router-dom'

const SermonTile = () => {
    return (
        <Link to="/sermons" className="sermon-list-tile">
            <div className="sermon-list-tile-wrapper">
                <div className="sermon-list-tile-hover"></div>
                <div className="sermon-list-tile-card">
                    <div className="sermon-list-tile-card-date">
                        January 10th, 2021
                    </div>
                    <h2 className="sermon-list-tile-card-title">
                        Sermon Title
                    </h2>
                    <div className="sermon-list-tiel-card-speaker">
                        Firstname Lastname
                    </div>
                </div>
                <div className="sermon-list-tile-art"></div>
            </div>
        </Link>
    )
}

export default SermonTile

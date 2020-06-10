import React, { FC } from 'react'
import './HomeSermonsView.css'
import SermonTile from '../components/SermonTile'
import ViewAllButton from '../components/ViewAllButton'

const HomeSermonsView: FC = () => {
    return (
        <div className="home-sermons">
            <h2 className="home-sermons-title">HomeSermonsView</h2>
            <ViewAllButton />
            <SermonTile />
            <SermonTile />
            <SermonTile />
        </div>
    )
}

export default HomeSermonsView

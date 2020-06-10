import React from 'react'
import { Link } from 'react-router-dom'
import HomeButton from '../components/HomeButton'

const HomeMainView = () => {
    return (
        <div>
            <h1 className="module-header">Home</h1>
            <div className="home-content">
                Welcome to Freedom in Christ Church :)
            </div>
            <div className="newButton">
                <Link to="/about">
                    <HomeButton text="I'm new here" />
                </Link>
                <Link to="/sermons">
                    <HomeButton text="Sermons" />
                </Link>
            </div>
        </div>
    )
}

export default HomeMainView

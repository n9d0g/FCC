/* eslint-disable react/jsx-no-undef */
import React, { FC, useEffect } from 'react'
import './styles/HomeView.css'
import HomeMissionView from './home-mission/HomeMissionView'
import HomeMainView from './home-main/HomeMainView'
// import HomeEventsView from './home-events/HomeEventsView'
import HomeSermonsView from './home-sermons/HomeSermonsView'

const HomeView: FC = () => {
    useEffect(() => {
        document.title = 'Home | FCC'
    }, [])

    return (
        <div>
            <HomeMainView />
            <HomeMissionView />
            {/* <HomeEventsView /> */}
            <HomeSermonsView />
        </div>
    )
}

export default HomeView

import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'

const HeaderView: React.FC = () => {
    return (
        <div className="header-container">
            <Banner />
            <NavBar />
        </div>
    )
}

export default HeaderView

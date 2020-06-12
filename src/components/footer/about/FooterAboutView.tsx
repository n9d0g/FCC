import React, { FC } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import './FooterAboutView.css'

const FooterAboutView: FC = () => {
    return (
        <div className="footer-about">
            <BrowserRouter>
                <Link to="/values" className="footer-about values">
                    Values
                </Link>
                <Link
                    to="/mission-vision"
                    className="footer-about mission-vision"
                >
                    Mission and Vision
                </Link>
                <Link to="/leadership" className="footer-about leadership">
                    Leadership
                </Link>
            </BrowserRouter>
        </div>
    )
}

export default FooterAboutView

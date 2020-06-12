import React, { FC } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const FooterConnectView: FC = () => {
    return (
        <div className="footer-connect">
            <BrowserRouter>
                <Link to="/ministries" className="footer-about values">
                    Ministries
                </Link>
                <Link
                    to="/small-groups"
                    className="footer-about mission-vision"
                >
                    Small Groups
                </Link>
                <Link to="/services" className="footer-about leadership">
                    Services
                </Link>
            </BrowserRouter>
        </div>
    )
}

export default FooterConnectView

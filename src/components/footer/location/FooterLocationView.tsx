import React, { FC } from 'react'
import './FooterLocationView.css'

const FooterLocationView: FC = () => {
    return (
        <div className="footer-location">
            <div className="address">
                5225 Orbitor Dr
                <br />
                Mississauga, ON
            </div>
            <div className="phone">
                123-123-1234
                <br /> Contact Us
            </div>
            <div className="service-time">
                Service Times: <br />
                10:30a via Zoom
            </div>
        </div>
    )
}

export default FooterLocationView

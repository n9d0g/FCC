import React, { FC } from 'react'
import './FooterLocationView.css'

const FooterLocationView: FC = () => {
    return (
        <div className="footer-column-location">
            <p className="footer-column-location-contact">
                5225 Orbitor Dr
                <br />
                Mississauga, ON
                <br />
                <br />
                123-123-1234
                <br /> Contact Us
                <br /> <br />
                Service Times: <br />
                10:30a via Zoom
            </p>
        </div>
    )
}

export default FooterLocationView

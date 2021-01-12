import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const FooterRemainingView: FC = () => {
    return (
        <div className="footer-column">
            {/* <Link to='/events'>
        <div className='footer-link'>Events</div>
      </Link> */}
            <Link to="/sermons">
                <div className="footer-link">Sermons</div>
            </Link>
            <Link to="/give">
                <div className="footer-link">Give</div>
            </Link>
        </div>
    )
}

export default FooterRemainingView

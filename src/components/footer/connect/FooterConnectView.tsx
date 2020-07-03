import React, {FC} from 'react'
import {Link} from 'react-router-dom'

const FooterConnectView: FC = () => {
  return (
    <div className='footer-column'>
      <Link to='/ministries'>
        <div className='footer-link'>Ministries</div>
      </Link>
      <Link to='/small-groups'>
        <div className='footer-link'>Small Groups</div>
      </Link>
      <Link to='/services'>
        <div className='footer-link'>Services</div>
      </Link>
    </div>
  )
}

export default FooterConnectView

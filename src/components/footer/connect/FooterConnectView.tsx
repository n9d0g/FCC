import React, {FC} from 'react'
import {Link} from 'react-router-dom'

const FooterConnectView: FC = () => {
  return (
    <div className='footer-column'>
      <Link to='/ministries' className='footer-about values'>
        Ministries
      </Link>
      <Link to='/small-groups' className='footer-about mission-vision'>
        Small Groups
      </Link>
      <Link to='/services' className='footer-about leadership'>
        Services
      </Link>
    </div>
  )
}

export default FooterConnectView

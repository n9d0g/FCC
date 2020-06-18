import React, {FC} from 'react'
import {Link} from 'react-router-dom'

const FooterRemainingView: FC = () => {
  return (
    <div className='footer-column'>
      <Link to='/events' className='footer-about values'>
        Events
      </Link>
      <Link to='/sermons' className='footer-about mission-vision'>
        Sermons
      </Link>
      <Link to='/give' className='footer-about leadership'>
        Give
      </Link>
    </div>
  )
}

export default FooterRemainingView

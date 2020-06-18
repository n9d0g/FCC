import React, {FC} from 'react'
import {Link} from 'react-router-dom'

const FooterAboutView: FC = () => {
  return (
    <div className='footer-column'>
      <Link to='/values' className='footer-about values'>
        Values
      </Link>
      <Link to='/mission-vision' className='footer-about mission-vision'>
        Mission and Vision
      </Link>
      <Link to='/leadership' className='footer-about leadership'>
        Leadership
      </Link>
    </div>
  )
}

export default FooterAboutView

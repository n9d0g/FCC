import React, {FC} from 'react'
import {Link} from 'react-router-dom'

const FooterAboutView: FC = () => {
  return (
    <div className='footer-column'>
      <Link to='/values'>
        <div className='footer-link'>Values</div>
      </Link>
      <Link to='/mission-vision'>
        <div className='footer-link'>Mission and Vision</div>
      </Link>
      <Link to='/leadership'>
        <div className='footer-link'>Leadership</div>
      </Link>
    </div>
  )
}

export default FooterAboutView

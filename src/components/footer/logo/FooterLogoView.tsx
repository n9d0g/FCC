import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../images/square-logo.png'

const FooterLogoView: FC = () => {
  return (
    <div className='footer-logo'>
      <Link to='/' className='logo'>
        <img className='logo-img' src={logo} alt='FCC logo' />
      </Link>
    </div>
  )
}

export default FooterLogoView

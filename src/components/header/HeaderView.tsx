import React, {FC} from 'react'
import HeaderNavBar from './navbar/HeaderNavBar'
import HeaderBanner from './banner/HeaderBanner'
import './styles/HeaderView.css'

const HeaderView: FC = () => {
  return (
    <div className='header-container'>
      <HeaderBanner />
      <HeaderNavBar />
    </div>
  )
}

export default HeaderView

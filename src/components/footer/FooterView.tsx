import React, {FC} from 'react'
import './styles/FooterView.css'
import SocialButtonsView from './social-buttons/SocialButtonsView'
import FooterLogoView from './logo/FooterLogoView'
import FooterLocationView from './location/FooterLocationView'
import FooterAboutView from './about/FooterAboutView'
import FooterConnectView from './connect/FooterConnectView'
import FooterRemainingView from './remaining/FooterRemainingView'

const FooterView: FC = () => {
  return (
    <div className='footer-container'>
      <FooterLogoView />
      <FooterLocationView />
      <FooterAboutView />
      <FooterConnectView />
      <FooterRemainingView />
      <SocialButtonsView />
      {/* 2020 Freedom in Christ Church, All Rights Reserved hello */}
    </div>
  )
}

export default FooterView

import React, {FC} from 'react'
import FooterSocialButton from '../components/FooterSocialButton'
import * as mediaLinks from '../../../data/strings.json'

const SocialButtonsView: FC = () => {
  return (
    <div className='social-buttons-container'>
      <div className='social-button'>
        <FooterSocialButton
          platform='Instagram'
          link={mediaLinks['social-media-links'].instagram}
        />
      </div>
      <div className='social-button'>
        <FooterSocialButton
          platform='FCC Facebook'
          link={mediaLinks['social-media-links'].facebook}
        />
      </div>
      <div className='social-button'>
        <FooterSocialButton
          platform='YouTube'
          link={mediaLinks['social-media-links'].youtube}
        />
      </div>
    </div>
  )
}

export default SocialButtonsView

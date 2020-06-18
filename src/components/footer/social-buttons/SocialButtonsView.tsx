import React, {FC} from 'react'
import FooterSocialButton from '../components/FooterSocialButton'
import * as mediaLinks from '../../../data/strings.json'

const SocialButtonsView: FC = () => {
  return (
    <div className='social-buttons'>
      <FooterSocialButton
        platform='Instagram'
        link={mediaLinks['social-media-links'].instagram}
      />
      <FooterSocialButton
        platform='FCC Facebook'
        link={mediaLinks['social-media-links'].facebook}
      />
      <FooterSocialButton
        platform='YouTube'
        link={mediaLinks['social-media-links'].youtube}
      />
    </div>
  )
}

export default SocialButtonsView

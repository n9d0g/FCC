import React, { FC } from 'react'
import FooterSocialButton from '../components/FooterSocialButton'
import * as mediaLinks from '../../../data/social-media-links.json'

const SocialButtonsView: FC = () => {
    return (
        <div className="social-buttons-container">
            <div className="social-button">
                <FooterSocialButton
                    platform="Instagram"
                    link={mediaLinks.instagram}
                />
            </div>
            <div className="social-button">
                <FooterSocialButton
                    platform="FCC Facebook"
                    link={mediaLinks.facebook}
                />
            </div>
            <div className="social-button">
                <FooterSocialButton
                    platform="YouTube"
                    link={mediaLinks.youtube}
                />
            </div>
        </div>
    )
}

export default SocialButtonsView

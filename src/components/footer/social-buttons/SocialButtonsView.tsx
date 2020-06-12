import React, { FC } from 'react'
import FooterSocialButton from '../components/FooterSocialButton'

const SocialButtonsView: FC = () => {
    return (
        <div className="social-buttons">
            <FooterSocialButton
                platform="Instagram"
                link="https://www.instagram.com/n9d0g/"
            />
            <FooterSocialButton
                platform="FCC Facebook"
                link="https://www.facebook.com/groups/1667915316820460/?ref=bookmarks"
            />
            <FooterSocialButton
                platform="YouTube"
                link="https://www.youtube.com/channel/UCwfnmKKZ8giVd3wtI-p7qvQ?view_as=subscriber"
            />
        </div>
    )
}

export default SocialButtonsView

import React, { FC } from 'react'
import { Layout } from 'antd'
import './styles/FooterView.css'
import FooterSocialButton from './components/FooterSocialButton'

const { Footer } = Layout

const FooterView: FC = () => {
    return (
        <Footer className="footer">
            2020 Freedom in Christ Church, All Rights Reserved
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
        </Footer>
    )
}

export default FooterView

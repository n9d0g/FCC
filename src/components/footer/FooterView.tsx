import React, { FC } from 'react'
import './FooterView.css'
import SocialButtonsView from './social-buttons/SocialButtonsView'
import FooterLogoView from './logo/FooterLogoView'
import FooterLocationView from './location/FooterLocationView'
import FooterColumn from './components/FooterColumn'

const about = [
    {
        link: '/about/values',
        value: 'Values',
    },
    {
        link: '/about/mission-vision',
        value: 'Mission and Vision',
    },
    {
        link: '/about/leadership',
        value: 'Leadership',
    },
]
const connect = [
    {
        link: '/connect/ministries',
        value: 'Ministries',
    },
    {
        link: '/connect/small-groups',
        value: 'Small Groups',
    },
    {
        link: '/connect/services',
        value: 'Services',
    },
]
const sermons_give = [
    {
        link: '/sermons',
        value: 'Sermons',
    },
    {
        link: '/give',
        value: 'Give',
    },
]
const FooterView: FC = () => {
    return (
        <footer className="footer-container">
            <div className="footer-wrapper">
                <FooterLogoView />
                <div className="footer-columns-container">
                    <FooterLocationView />
                    <FooterColumn columns={about} />
                    <FooterColumn columns={connect} />
                    <FooterColumn columns={sermons_give} />
                </div>
                <div className="footer-socials">
                    <SocialButtonsView />
                </div>
            </div>
        </footer>
    )
}

export default FooterView

import React, { FC } from 'react'
import {
    InstagramOutlined,
    FacebookOutlined,
    YoutubeOutlined,
} from '@ant-design/icons'

interface Props {
    platform: string
    link: string
}

const FooterSocialButton: FC<Props> = ({ platform, link }) => {
    let icon: JSX.Element
    switch (platform) {
        case 'Instagram':
            icon = <InstagramOutlined />
            break
        case 'YouTube':
            icon = <YoutubeOutlined />
            break
        default:
            icon = <FacebookOutlined />
            break
    }

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 20 }}
        >
            {icon}
        </a>
    )
}

export default FooterSocialButton

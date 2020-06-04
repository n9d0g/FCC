import React, { FC } from 'react'
import {
    InstagramFilled,
    FacebookFilled,
    YoutubeFilled,
} from '@ant-design/icons'

interface Props {
    platform: string
    link: string
}

const FooterSocialButton: FC<Props> = ({ platform, link }) => {
    var icon
    switch (platform) {
        case 'Instagram':
            icon = <InstagramFilled />
            break
        case 'YouTube':
            icon = <YoutubeFilled />
            break
        default:
            icon = <FacebookFilled />
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

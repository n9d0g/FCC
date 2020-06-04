import React, { FC } from 'react'
import { Button } from 'antd'

interface Props {
    platform: string
    link: string
}

const FooterSocialButton: FC<Props> = ({ platform, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Button type="primary" shape="round">
                {platform}
            </Button>
        </a>
    )
}

export default FooterSocialButton

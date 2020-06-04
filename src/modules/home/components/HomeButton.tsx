import React, { FC } from 'react'
import '../../app/App.css'
import './HomeView.css'
import { Button } from 'antd'

interface HomeButtonProps {
    text: string
}

const HomeButton: FC<HomeButtonProps> = ({ text }) => {
    return (
        <Button shape="round" type="primary">
            {text}
        </Button>
    )
}

export default HomeButton

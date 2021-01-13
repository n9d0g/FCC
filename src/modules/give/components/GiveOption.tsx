import React from 'react'
import HomeButton from '../../home/components/HomeButton'

const GiveOption = () => {
    return (
        <div className="give-content-body-option">
            <div className="give-content-body-option-title">Option Title</div>
            <p className="give-content-body-option-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="give-content-body-option-button"></div>
            <HomeButton text="Button" link="/sermons" isInverted={false} />
        </div>
    )
}

export default GiveOption

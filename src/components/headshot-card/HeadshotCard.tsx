import React from 'react'
import { FC } from 'react'
import './HeadshotCard.css'

interface HeadshotCardProps {
    name: string
    description: string
}

const HeadshotCard: FC<HeadshotCardProps> = ({ name, description }) => {
    return (
        <div className="headshot-container">
            <div className="headshot-wrapper">
                <div className="headshot-picture">picture</div>
                <h2 className="headshot-name">{name}</h2>
                <div className="headshot-description">{description}</div>
            </div>
        </div>
    )
}

export default HeadshotCard

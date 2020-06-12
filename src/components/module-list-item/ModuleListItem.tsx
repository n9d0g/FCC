import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './ModuleListItem.css'

interface ModuleListItemProps {
    link: string
    section: string
    subtext: string
}

const ModuleListItem: FC<ModuleListItemProps> = ({
    link,
    section,
    subtext,
}) => {
    return (
        <div>
            <Link to={link}>{section}</Link>
            <div className="list-item-subtext">{subtext}</div>
        </div>
    )
}

export default ModuleListItem

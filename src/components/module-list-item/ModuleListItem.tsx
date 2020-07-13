import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import './ModuleListItem.css'
import {RightOutlined} from '@ant-design/icons'

interface ModuleListItemProps {
  link: string
  section: string
  subtext: string
}

const ModuleListItem: FC<ModuleListItemProps> = ({link, section, subtext}) => {
  return (
    <Link to={link} className='page-listitem-link'>
      <div className='listitem-content'>
        <h3 className='listitem-section-title'>{section}</h3>
        <div className='list-item-subtext'>{subtext}</div>
      </div>
      <RightOutlined />
    </Link>
  )
}

export default ModuleListItem

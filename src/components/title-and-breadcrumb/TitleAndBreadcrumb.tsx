import React, {FC} from 'react'
import './TitleAndBreadcrumb.css'
import {Link} from 'react-router-dom'

interface TitleAndBreadcrumbProps {
  title: string
  secondBreadcrumbTitle?: string
}

const TitleAndBreadcrumb: FC<TitleAndBreadcrumbProps> = ({
  title,
  secondBreadcrumbTitle,
}) => {
  let middleBreadcrumb

  // check if second breadcrumb is provided, if so link it to respective pages
  if (secondBreadcrumbTitle) {
    let breadcrumbLink
    if (secondBreadcrumbTitle == 'About') breadcrumbLink = '/about'
    else breadcrumbLink = '/connect'

    middleBreadcrumb = (
      <li className='breadcrumb-item'>
        <Link to={breadcrumbLink} className='breadcrumb-link'>
          {secondBreadcrumbTitle}
        </Link>
        &nbsp;&nbsp;&nbsp;{'/'}
      </li>
    )
  }
  return (
    <div className='title-breadcrumb-container'>
      <h1 className='title'>{title}</h1>
      <ul className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link to='/' className='breadcrumb-link'>
            Home
          </Link>
          &nbsp;&nbsp;&nbsp;{'/'}
        </li>
        {middleBreadcrumb}
        <li className='breadcrumb-item'>
          <div className='breadcrumb-current'>{title}</div>
        </li>
      </ul>
    </div>
  )
}

export default TitleAndBreadcrumb

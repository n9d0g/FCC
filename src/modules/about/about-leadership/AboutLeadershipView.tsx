import React, {FC, useEffect} from 'react'
import TitleAndBreadcrumb from '../../../components/title-and-breadcrumb/TitleAndBreadcrumb'

const AboutLeadershipView: FC = () => {
  useEffect(() => {
    document.title = 'Leadership | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div className='content-container'>
      <div className='about-subtitle-container'>
        <TitleAndBreadcrumb title='Leadership' secondBreadcrumbTitle='About' />
      </div>
    </div>
  )
}

export default AboutLeadershipView

import React, {FC, useEffect} from 'react'
import TitleAndBreadcrumb from '../../../components/title-and-breadcrumb/TitleAndBreadcrumb'

const AboutValuesView: FC = () => {
  useEffect(() => {
    document.title = 'Values | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div className='content-container'>
      <div className='about-subtitle-container'>
        <TitleAndBreadcrumb
          title='What We Believe'
          secondBreadcrumbTitle='About'
        />
      </div>
    </div>
  )
}

export default AboutValuesView

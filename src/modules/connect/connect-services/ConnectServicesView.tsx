import React, {FC, useEffect} from 'react'
import TitleAndBreadcrumb from '../../../components/title-and-breadcrumb/TitleAndBreadcrumb'

const ConnectServicesView: FC = () => {
  useEffect(() => {
    document.title = 'Church Services | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div className='content-container'>
      <div className='connect-subtitle-container'>
        <TitleAndBreadcrumb
          title='Weekly Services'
          secondBreadcrumbTitle='Connect'
        />
      </div>
    </div>
  )
}

export default ConnectServicesView

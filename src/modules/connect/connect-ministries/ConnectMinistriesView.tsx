import React, {FC, useEffect} from 'react'
import TitleAndBreadcrumb from '../../../components/title-and-breadcrumb/TitleAndBreadcrumb'

const ConnectMinistriesView: FC = () => {
  useEffect(() => {
    document.title = 'Ministries | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div className='content-container'>
      <div className='connect-subtitle-container'>
        <TitleAndBreadcrumb
          title='Our Ministries'
          secondBreadcrumbTitle='Connect'
        />
      </div>
    </div>
  )
}

export default ConnectMinistriesView

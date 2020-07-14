import React, {FC, useEffect} from 'react'
import TitleAndBreadcrumb from '../../../components/title-and-breadcrumb/TitleAndBreadcrumb'

const ConnectSmallGroupsView: FC = () => {
  useEffect(() => {
    document.title = 'Small Groups | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div className='content-container'>
      <div className='connect-subtitle-container'>
        <TitleAndBreadcrumb
          title='Small Groups'
          secondBreadcrumbTitle='Connect'
        />
      </div>
    </div>
  )
}

export default ConnectSmallGroupsView

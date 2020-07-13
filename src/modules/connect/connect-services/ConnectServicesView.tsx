import React, {FC, useEffect} from 'react'

const ConnectServicesView: FC = () => {
  useEffect(() => {
    document.title = 'Church Services | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div className='content-container'>
      <h1 className='module-header'>ServicesView</h1>
    </div>
  )
}

export default ConnectServicesView

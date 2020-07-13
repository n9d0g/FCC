import React, {FC, useEffect} from 'react'

const ConnectMinistriesView: FC = () => {
  useEffect(() => {
    document.title = 'Ministries | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div className='content-container'>
      <h1 className='module-header'>MinistriesView</h1>
    </div>
  )
}

export default ConnectMinistriesView

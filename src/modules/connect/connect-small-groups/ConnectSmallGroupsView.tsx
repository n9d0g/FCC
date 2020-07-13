import React, {FC, useEffect} from 'react'

const ConnectSmallGroupsView: FC = () => {
  useEffect(() => {
    document.title = 'Small Groups | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div className='content-container'>
      <h1 className='module-header'>SmallGroupsView</h1>
    </div>
  )
}

export default ConnectSmallGroupsView

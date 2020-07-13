import React, {FC, useEffect} from 'react'

const AboutLeadershipView: FC = () => {
  useEffect(() => {
    document.title = 'Leadership | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div className='content-container'>
      <h1 className='module-header'>Leadership</h1>
    </div>
  )
}

export default AboutLeadershipView

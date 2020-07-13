import React, {FC, useEffect} from 'react'

const AboutValuesView: FC = () => {
  useEffect(() => {
    document.title = 'Values | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div className='content-container'>
      <h1 className='module-header'>Values</h1>
    </div>
  )
}

export default AboutValuesView

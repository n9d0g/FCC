import React, {FC, useEffect} from 'react'
import '../styles/AboutView.css'
import './AboutMissionVisionView.css'
import * as strings from '../../../data/strings.json'

const AboutMissionVisionView: FC = () => {
  useEffect(() => {
    document.title = 'Mission & Vision | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div className='content-container'>
      <h1 className='module-header'>FCC Mission and Vision</h1>
      <div className='about-content'>
        Mission: {strings.statements.mission}
        <br />
        Vision: {strings.statements.vision}
      </div>
    </div>
  )
}

export default AboutMissionVisionView
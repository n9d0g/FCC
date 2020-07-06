import React, {FC} from 'react'
import './HomeMissionView.css'
import * as JSONstrings from '../../../data/strings.json'

const HomeMissionView: FC = () => {
  return (
    <section className='home-mission'>
      <div className='home-mission-text-container'>
        <div className='home-mission-text'>
          The mission of Freedom in Christ Church is to be{' '}
          {JSONstrings['statements'].mission}
        </div>
      </div>
    </section>
  )
}

export default HomeMissionView

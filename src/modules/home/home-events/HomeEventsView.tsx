import React, {FC, useEffect} from 'react'
import './HomeEventsView.css'
import SermonTile from '../components/SermonTile'

const HomeEventsView: FC = () => {
  useEffect(() => {
    document.title = 'Home | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <section className='home-events'>
      <div className='home-events-container'>
        <div className='home-events-header-container'>
          <h2 className='home-events-header'>Events</h2>
        </div>
        <div className='home-events-eventlist'>
          <SermonTile />
          <SermonTile />
          <SermonTile />
        </div>
      </div>
    </section>
  )
}

export default HomeEventsView

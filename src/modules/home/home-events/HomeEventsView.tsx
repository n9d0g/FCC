import React, {FC} from 'react'
import './HomeEventsView.css'
import EventTile from '../components/EventTile'

const HomeEventsView: FC = () => {
  return (
    <section className='home-events'>
      <div className='home-events-container'>
        <div className='home-events-header-container'>
          <h2 className='home-events-header'>Events</h2>
        </div>
        <div className='home-events-eventlist'>
          <EventTile />
          <EventTile />
          <EventTile />
        </div>
      </div>
    </section>
  )
}

export default HomeEventsView

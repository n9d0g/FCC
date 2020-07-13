import React, {FC, useEffect} from 'react'
import {Calendar} from 'antd'
import EventsCarousel from './components/EventsCarousel'
import TitleAndBreadcrumb from '../../components/title-and-breadcrumb/TitleAndBreadcrumb'

const EventsView: FC = () => {
  useEffect(() => {
    document.title = 'Events | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])
  return (
    <section className='events-page-container'>
      <TitleAndBreadcrumb />
      <EventsCarousel />
      <Calendar />
    </section>
  )
}

export default EventsView

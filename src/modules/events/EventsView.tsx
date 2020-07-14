import React, {FC, useEffect} from 'react'
import TitleAndBreadcrumb from '../../components/title-and-breadcrumb/TitleAndBreadcrumb'
import './styles/EventsView.css'

const EventsView: FC = () => {
  useEffect(() => {
    document.title = 'Events | FCC'
    return () => {
      console.log('unmount')
    }
  }, [])
  return (
    <section className='events-page-container'>
      <div className='events-title-container'>
        <TitleAndBreadcrumb title='Events' />
      </div>
    </section>
  )
}

export default EventsView

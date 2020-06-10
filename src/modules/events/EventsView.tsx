import React, { FC } from 'react'
import { Calendar, Layout } from 'antd'
import EventsCarousel from './components/EventsCarousel'

const { Content } = Layout

// function onPanelChange(value, mode) {
//     console.log(value.format('YYYY-MM-DD'), mode)
// }

const EventsView: FC = () => {
    return (
        <Content className="content-container">
            <h1 className="module-header">Events Page</h1>
            <EventsCarousel />
            <Calendar />
        </Content>
    )
}

export default EventsView

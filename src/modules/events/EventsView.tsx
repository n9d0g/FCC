import React, { FC } from 'react'
import '../app/App.css'
import { Calendar, Layout, Breadcrumb } from 'antd'
import EventsCarousel from './components/EventsCarousel'

const { Content } = Layout

// function onPanelChange(value, mode) {
//     console.log(value.format('YYYY-MM-DD'), mode)
// }

const EventsView: FC = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <h1 className="module-header">Events Page</h1>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Events</Breadcrumb.Item>
            </Breadcrumb>
            <EventsCarousel />
            <Calendar />
        </Content>
    )
}

export default EventsView

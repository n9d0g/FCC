import React, { FC } from 'react'
import '../../app/App.css'
import { Carousel } from 'antd'

const EventsCarousel: FC = () => {
    return (
        <Carousel autoplay>
            <div>
                <h3>Father's Day Service</h3>
            </div>
            <div>
                <h3>Fall Retreat</h3>
            </div>
            <div>
                <h3>Living in Christ Anniversary</h3>
            </div>
            <div>
                <h3>Christmas Service</h3>
            </div>
        </Carousel>
    )
}

export default EventsCarousel

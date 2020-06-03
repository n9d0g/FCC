import React, { FC } from 'react'
import '../app/App.css'
import { Calendar } from 'antd'

// function onPanelChange(value, mode) {
//     console.log(value.format('YYYY-MM-DD'), mode)
// }

const EventsView: FC = () => {
    return (
        <div>
            <h1 className="module-header">Events Page</h1>
            <Calendar />
        </div>
    )
}

export default EventsView

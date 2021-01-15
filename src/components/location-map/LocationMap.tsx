import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import mapStyles from './mapStyles'

const containerStyle = {
    width: '526px',
    height: '500px',
}

const center = {
    lat: 43.6598788,
    lng: -79.6065117,
}

const options = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: mapStyles,
}

const key: string = process.env.REACT_APP_MAP_KEY as string

const LocationMap = () => {
    return (
        <div>
            <LoadScript googleMapsApiKey={key}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                    options={options}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default LocationMap

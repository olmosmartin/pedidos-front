import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import Markers from './Markers';
import './mapVista.css'
import { places } from './fakeTestPositions.json'


export const MapVista = () => {
    return (
        <MapContainer center={{ lat: '-34.733813', lon: '-58.392080' }} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers places={ places } />
        </MapContainer>
    )
}

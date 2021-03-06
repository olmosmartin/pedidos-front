import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import Markers from './Markers';
import './mapVista.css'
import { Positions } from './Positions'


export const MapVista = () => {

    return (
        <>
        <small>Cliente y negocio:</small>
        <MapContainer center={{ lat: '-34.713210', lon: '-58.379101' }} zoom={12}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers places={ Positions().places } />
        </MapContainer>
        </>
    )
}

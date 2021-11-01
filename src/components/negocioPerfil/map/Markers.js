import React from 'react';
import { Marker, Popup } from 'react-leaflet';


function Markers(props) {
    const {places} = props

    const marcadores = (
        <Marker
        key={1}
        position={places.geometry}
        >
        <Popup>
        {places.name + " "}
        {places.direccion}
        </Popup>
        </Marker>
    )
    
    return marcadores
}

export default Markers

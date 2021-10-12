import React from 'react';
import { Marker, Popup } from 'react-leaflet';


function Markers(props) {
    const {places} = props

    const marcadores = places.map( (place, i) => (
        <Marker
        key={i}
        position={place.geometry}
        >
        <Popup>
        {place.name + " "}
        {place.direccion}
        </Popup>
        </Marker>
    ))
    
    return marcadores
}

export default Markers

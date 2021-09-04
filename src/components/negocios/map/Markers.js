import React from 'react';
import { Marker } from 'react-leaflet';


function Markers(props) {
    const {places} = props

    const marcadores = places.map( (place, i) => (
        
        <Marker
        key={i}
        position={place.geometry}
        />
    ))
    
    return marcadores
}

export default Markers

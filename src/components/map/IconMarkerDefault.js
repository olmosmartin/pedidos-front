import L from 'leaflet';

export const IconLocation = L.icon({
    iconUrl: require('../../static/img/Map_marker.svg'),
    iconRetinaUrl: require('../../static/img/Map_marker.svg'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize:[35, 35],
    className:"leaflet-venue-icon",
})

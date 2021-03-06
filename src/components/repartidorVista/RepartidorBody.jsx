import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom"

import { fetchNegocioLocalidad } from '../../redux/actions/negocioAction';
import { Pedidos } from './Pedidos'
import { getNominatimReverse } from '../../api/nominatim';
import { fetchPedidosLocalidad, fetchPedidosIdRepartidor } from '../../redux/actions/pedidoAction';
import { limpiarPedidosRepartidor } from '../../redux/actions/pedidoAction';
import { MapVista } from './map/MapVista';


export const RepartidorBody = () => {
    const dispatch = useDispatch();
    const [position, setPosition] = useState({ longitud: 0, latitud: 0 })
    const [errorPosition, setErrorPosition] = useState(true)
    const [localidad, setLocalidad] = useState(null)
    const location = useLocation();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                setPosition({
                    longitud: position.coords.longitude,
                    latitud: position.coords.latitude
                })
                setErrorPosition(false)
            },
            function (error) {
                setErrorPosition(true)
            },
            { enableHighAccuracy: true }
        )

    }, [])

    useEffect(() => {
        dispatch(limpiarPedidosRepartidor())
        console.log('Location changed');
    }, [location, dispatch]);

    const traerDireccion = async () => {
        const direccionjson = await getNominatimReverse(position.latitud, position.longitud)
        var ciudad = ""
        JSON.stringify(direccionjson.data.address.town) ? ciudad = JSON.stringify(direccionjson.data.address.town) : ciudad = JSON.stringify(direccionjson.data.address.city)
        ciudad&&setLocalidad( ciudad.split('"').join('') )
        //ciudad&&setLocalidad( "Remedios de Escalada" )
        }

    const handleSubmitAutodetect = async (e) => {
        e.preventDefault()
        traerDireccion()
        dispatch(fetchPedidosLocalidad(localidad))
        dispatch(fetchPedidosIdRepartidor(sessionStorage.getItem('usuarioID')))
        localidad&&dispatch(fetchNegocioLocalidad(localidad))
    }
    
    return (
        <div>
            <div className="row justify-content-center mt-4">
                {
                <div className="input-group-append">
                    {errorPosition ? <h4 >Habilita la ubicaci??n para buscar por tu ciudad</h4> : <button onClick={handleSubmitAutodetect} className="btn btn-danger m-2 p-2" style={{ borderRadius: 30 }} type="submit">Buscar en mi ubicaci??n</button>}
                    
                </div>
                }
                <p>Ubicaci??n:{localidad}</p>
                <div className="col">
                <Pedidos localidad={localidad}/>
                </div>
                <div className="col">
                    {localidad&&<MapVista />}
                </div>
            </div>
        </div>
    )
}

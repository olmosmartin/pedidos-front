import React, { useEffect, useState } from 'react'
import { Pedidos } from './Pedidos'
import { useDispatch } from 'react-redux';
import { getNominatimReverse } from '../../api/nominatim';
import { fetchPedidosLocalidad, fetchPedidosIdRepartidor } from '../../redux/actions/pedidoAction';

export const RepartidorBody = () => {
    const dispatch = useDispatch();
    const [position, setPosition] = useState({ longitud: 0, latitud: 0 })
    const [errorPosition, setErrorPosition] = useState(true)
    const [localidad, setLocalidad] = useState("")

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

    const traerDireccion = async () => {
        const direccionjson = await getNominatimReverse(position.latitud, position.longitud)
        var ciudad = "Lste"
        //JSON.stringify(direccionjson.data.address.town) ? ciudad = JSON.stringify(direccionjson.data.address.town) : ciudad = JSON.stringify(direccionjson.data.address.city)
        ciudad&&setLocalidad( ciudad.split('"').join('') )
        }

    const handleSubmitAutodetect = async (e) => {
        e.preventDefault()
        dispatch(fetchPedidosLocalidad(localidad))
        dispatch(fetchPedidosIdRepartidor(sessionStorage.getItem('usuarioID')))
        traerDireccion()
    }
    
    return (
        <div>
            {
            <div className="input-group-append">
                {errorPosition ? <h4 >Habilita la ubicación para buscar por tu ciudad</h4> : <button onClick={handleSubmitAutodetect} className="btn btn-danger m-2 p-2" style={{ borderRadius: 30 }} type="submit">Buscar en mi ubicación</button>}
                
            </div>
            }
            <p>Ubicación:{localidad}</p>
            <Pedidos localidad={localidad}/>
        </div>
    )
}

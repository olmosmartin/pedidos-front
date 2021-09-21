import React, { useState, useRef, useMemo } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
//import { useDispatch, useSelector } from 'react-redux';

//import { registrarCliente } from '../../redux/actions/clienteAction';
import { createRepartidor } from '../../api/repartidorServices';
import { getNominatimReverse } from '../../api/nominatim';
import logo from '../../static/img/pediloya.png';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import { toast } from 'react-toastify';
import { Loading } from '../loading/Loading';

const center = {
    lat: -34.734,
    lng: -58.398,
}

const estadoInicialVacio = {
    nombre: " ",
    email: " ",
    password: " ",
    telefono: " ",
  
}

export const RepartidorRegistroCard = () => {
  
    const history = useHistory()
    let objeto={}
    const [repartidor, setRepartidor] = useState(estadoInicialVacio)
    const [position, setPosition] = useState(center)
    const [calleNombre, setCalleNombre] = useState(" ")
    const [calleNumero, setCalleNumero] = useState(" ")
    const [localidad, setLocalidad] = useState(" ")
    const [isLoading, setIsLoading] = useState(false)
    
    function DraggableMarker() {
        const markerRef = useRef(null)
        const eventHandlers = useMemo(
            () => ({
                dragend() {
                    const marker = markerRef.current
                    if (marker != null) {
                        setPosition(marker.getLatLng())
                    }
                },
            }),
            [],
        )

        return (
            <Marker
                draggable={true}
                eventHandlers={eventHandlers}
                position={position}
                ref={markerRef}>
            </Marker>
        )
    }

    const traerDireccion = async() => {
        const direccionjson = await getNominatimReverse(position.lat, position.lng)
        var numero = ""
        JSON.stringify(direccionjson.data.address.house_number)? numero=JSON.stringify(direccionjson.data.address.house_number):numero = ""
        var calle = JSON.stringify(direccionjson.data.address.road)
        var ciudad = ""
        JSON.stringify(direccionjson.data.address.town)?ciudad=JSON.stringify(direccionjson.data.address.town):ciudad=JSON.stringify(direccionjson.data.address.city)
        setCalleNombre(calle.split('"').join(''))
        setCalleNumero(numero.split('"').join(''))
        setLocalidad(ciudad.split('"').join(''))

        //setDireccion(""+calle+" "+numero+""+ciudad)

    }

    const handleInputChange = (e) => {
        setRepartidor({ ...repartidor, [e.target.name]: e.target.value });
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
            objeto.nombre=repartidor.nombre
            objeto.email=repartidor.email
            objeto.password=repartidor.password
            objeto.telefono=repartidor.telefono
       
            try {
                setIsLoading(true)
                const res = await createRepartidor(objeto);
    
                if (res.status===200){
                    setIsLoading(false)
                    toast.success("registro exitoso!")
                    history.push("/")
                }
                
            } catch (err) {
                setIsLoading(false)
                if (err.response && err.response.data) {
                    toast.error("error, intente nuevamente")
                    console.log(err.response.data.message) // error message
                }
            } finally{
                setIsLoading(false)
            }
    }

    return (
        isLoading?<Loading/>:
        <div>
            <div className="card" style={{ width: "30rem", textAlign: "center" }}>
                <div className="card-body" >
                    <div className="container-fluid">
                        <Link to="/"> <img src={logo} alt="logo" /> </Link>
                    </div>
                    <h5 className="card-title" >Registrarse como repartidor</h5>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                id="floatingInput1"
                                placeholder="Ingrese su nombre"
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="floatingInput1">Ingrese su nombre</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control"
                                type="email"
                                name="email"
                                id="InputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Ingrese su dirección de email"
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="InputEmail1">Correo electrónico</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="floatingInput2"
                                placeholder="Ingrese contraseña"
                                onChange={handleInputChange}
                                minLength="8"
                                required
                            />
                            <label htmlFor="floatingInput2">Ingrese contraseña</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                name=" "
                                className="form-control"
                                id="floatingInput3"
                                placeholder="Ingrese contraseña"
                                //onChange={}
                                minLength="8"
                                required
                            />
                            <label htmlFor="floatingInput3">Confirmar contraseña</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control"
                                type="text"
                                name="telefono"
                                id="InputTel"
                                aria-describedby="Tel"
                                placeholder="Ingrese su número de teléfono "
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="InputTel">Teléfono</label>
                        </div>
                       
                        <button type="submit" className="btn btn-danger">Comenzar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
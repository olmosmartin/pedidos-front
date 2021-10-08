import React, { useState, useRef, useMemo } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"

import { createCliente } from '../../api/clienteServices';
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
    latitud: 0,
    longitud: 0,
    ciudad: " ",
    calle: " ",
    numero: 0
}

export const ClienteRegistroCard = () => {
    /*
    const buscador = useSelector((state) => state.clienteReducer)
    const dispatch = useDispatch();
    */

    const history = useHistory()
    let objeto={}
    const [cliente, setCliente] = useState(estadoInicialVacio)
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
        var numero = " "
        JSON.stringify(direccionjson.data.address.house_number)? numero=JSON.stringify(direccionjson.data.address.house_number):numero = " "
        var calle = JSON.stringify(direccionjson.data.address.road)
        var ciudad = " "
        JSON.stringify(direccionjson.data.address.town)?ciudad=JSON.stringify(direccionjson.data.address.town):ciudad=JSON.stringify(direccionjson.data.address.city)
        calle&&setCalleNombre(calle.split('"').join(''))
        numero&&setCalleNumero(numero.split('"').join(''))
        ciudad&&setLocalidad(ciudad.split('"').join(''))

        //setDireccion(""+calle+" "+numero+""+ciudad)

    }

    const handleInputChange = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
            objeto.nombre=cliente.nombre
            objeto.email=cliente.email
            objeto.password=cliente.password
            objeto.telefono=cliente.telefono
            objeto.calle=calleNombre
            objeto.numero= calleNumero
            objeto.ciudad= localidad
            objeto.latitud= position.lat
            objeto.longitud= position.lng
            
            //dispatch( registrarCliente(objeto) )
            //console.log("buscador: "+ JSON.stringify(buscador))
            try {
                setIsLoading(true)
                const res = await createCliente(objeto);
    
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
                    <h5 className="card-title" >Registrarse</h5>
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
                        <small>Arrastra el marcador y preciona traer dirección</small>
                        <MapContainer center={center} zoom={11} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <DraggableMarker />
                        </MapContainer>

                        <p className="btn btn-danger" onClick={traerDireccion}>Traer Direccion</p>

                        <div className="form-floating mb-3">
                            <input className="form-control"
                                type="text"
                                name="calle"
                                id="InputTel"
                                placeholder=" "
                                //onChange={e => handleChangeCalleNombre(e.target.value)}
                                onChange={handleInputChange}
                                value={calleNombre}
                                required
                                disabled
                            />
                            <label htmlFor="InputTel">Calle</label>
                        </div>

                        <div className="form-floating mb-3">
                        <small>{calleNumero&&"Número sugerido:"+calleNumero}</small>
                            <input className="form-control"
                                type="text"
                                name="numero"
                                id="InputNum"
                                placeholder=" "
                                //onChange={e => handleChangecalleNumero(e.target.value)}
                                onChange={handleInputChange}
                                //value={calleNumero}
                                required
                                //disabled
                            />
                            
                            <label htmlFor="InputNum">Número</label>
                        </div>
                        

                        <div className="form-floating mb-3">
                            <input className="form-control"
                                type="text"
                                name="ciudad"
                                id="InputTel"
                                placeholder=" "
                                onChange={handleInputChange}
                                value={localidad}
                                required
                                disabled
                            />
                            <label htmlFor="InputTel">Localidad</label>
                        </div>

                        <input type="hidden" value={position.lat}/>
                        <input type="hidden" value={position.lgn}/>

                        <button type="submit" className="btn btn-danger">Comenzar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
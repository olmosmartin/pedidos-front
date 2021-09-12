import React, { useState, useRef, useMemo } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router-dom"

import { getNominatimReverse } from '../../api/nominatim';
import logo from '../../static/img/pediloya.png';
import FormData from 'form-data';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import { toast } from 'react-toastify';
//import { createNegocio } from '../../api/negocioServices'

const center = {
    lat: -34.734,
    lng: -58.398,
}
export const NegocioRegistroCard = () => {
    const history = useHistory()
    const [nombre, setNombre] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [telefono, setTelefono] = useState(" ")
    const [file, setFile] = useState()
    const [position, setPosition] = useState(center)
    const [calleNombre, setCalleNombre] = useState(" ")
    const [calleNumero, setCalleNumero] = useState(" ")
    const [localidad, setLocalidad] = useState(" ")
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

    var bodyFormData = new FormData();

    function handleChangeNombre(evt) {
        setNombre(evt.target.value)
        //bodyFormData.append('nombre', evt.target.value);
    }

    function handleChangePassword(evt) {
        setPassword(evt.target.value)
        //bodyFormData.append('nombre', evt.target.value);
    }

    function handleChangeEmail(evt) {
        setEmail(evt.target.value)
        //bodyFormData.append('email', evt.target.value);
    }
    function handleChangeTelefono(evt) {
        setTelefono(evt.target.value)
        //bodyFormData.append('telefono', evt.target.value);
    }
    function handleFileChosen(file) {
        setFile(file)
        //bodyFormData.append('file', file);
    }

    function handleChangeCalleNombre (e){
        setCalleNombre(e.target.value)
        //bodyFormData.append('calle', e.target.value)
    }

    function handleChangecalleNumero (e){
        setCalleNumero(e.target.value)
        //bodyFormData.append('numero', e.target.value)
    }

    function handleChangeLocalidad (e){
        setLocalidad(e.target.value)
        //bodyFormData.append('ciudad', e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        bodyFormData.append('nombre', nombre)
        console.log("nombre: "+nombre)
        bodyFormData.append('email', email)
        console.log("email: "+email)
        bodyFormData.append('password', password)
        console.log("password: "+password)
        bodyFormData.append('telefono', telefono)
        console.log("telefono: "+telefono)
        bodyFormData.append('file', file);
        console.log("file: "+file)
        bodyFormData.append('calle', calleNombre)
        console.log("CALLE: "+calleNombre)
        bodyFormData.append('numero', calleNumero)
        console.log("NUMERO: "+calleNumero)
        bodyFormData.append('ciudad', localidad)
        console.log("LOCALIDAD: "+localidad)
        bodyFormData.append('latitud', position.lat)
        console.log("LATITUD: "+position.lat)
        bodyFormData.append('longitud', position.lng)
        console.log("LONGITUD: "+position.lng)
        
        for (var value of bodyFormData.values()){
            console.log("BODYFORMDATA: "+value)
        }
        
        axios({
            method: "POST",
            url: "https://pedidosya-api.herokuapp.com/negocios/",
            data: bodyFormData
        })
            .then(function (response) {
                //handle success
                toast.success("Registro exitoso")
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                toast.error("Problemas en el registro")
                console.log(response);
            });
        history.push("/")
    }

    return (
        <div>
            <div className="card" style={{ width: "30rem", textAlign: "center" }}>
                <div className="card-body" >
                    <div className="container-fluid">
                        <Link to="/"> <img src={logo} alt="logo" /> </Link>
                    </div>
                    <h5 className="card-title" >Registro de tu local</h5>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                id="floatingInput1"
                                placeholder="Ingrese el nombre del local"
                                onChange={handleChangeNombre}
                                required
                            />
                            <label htmlFor="floatingInput1">Ingrese nombre del local</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control"
                                type="email"
                                name="email"
                                id="InputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Ingrese la dirección de email de su local"
                                onChange={handleChangeEmail}
                                required
                            />
                            <label htmlFor="InputEmail1">Correo electrónico</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                name="nombre"
                                className="form-control"
                                id="floatingInput1"
                                placeholder="Ingrese contraseña"
                                onChange={handleChangePassword}
                                minLength="8"
                                required
                            />
                            <label htmlFor="floatingInput1">Ingrese contraseña</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                name="nombre"
                                className="form-control"
                                id="floatingInput1"
                                placeholder="Ingrese contraseña"
                                //onChange={}
                                minLength="8"
                                required
                            />
                            <label htmlFor="floatingInput1">Confirmar contraseña</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control"
                                type="text"
                                name="telefono"
                                id="InputTel"
                                aria-describedby="Tel"
                                placeholder="Ingrese el número de teléfono de su local"
                                onChange={handleChangeTelefono}
                                required
                            />
                            <label htmlFor="InputTel">Teléfono</label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Seleccionar imagen</label>
                            <input className="form-control" type="file" name="imagen" id="formFile" onChange={e => handleFileChosen(e.target.files[0])} />
                        </div>
                        <small>Arrastra el marcador y preciona traer dirección</small>
                        <MapContainer center={center} zoom={12} scrollWheelZoom={true}>
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
                                name="calleNombre"
                                id="InputTel"
                                placeholder=" "
                                //onChange={e => handleChangeCalleNombre(e.target.value)}
                                onChange={handleChangeCalleNombre}
                                value={calleNombre}
                                required
                                disabled
                            />
                            <label htmlFor="InputTel">Calle</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control"
                                type="text"
                                name="calleNumero"
                                id="InputTel"
                                placeholder=" "
                                //onChange={e => handleChangecalleNumero(e.target.value)}
                                onChange={handleChangecalleNumero}
                                value={calleNumero}
                                required
                                disabled
                            />
                            <label htmlFor="InputTel">Numero</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control"
                                type="text"
                                name="localidad"
                                id="InputTel"
                                placeholder=" "
                                onChange={handleChangeLocalidad}
                                value={localidad}
                                required
                                disabled
                            />
                            <label htmlFor="InputTel">Localidad</label>
                        </div>

                        <button type="submit" className="btn btn-danger">Comenzar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
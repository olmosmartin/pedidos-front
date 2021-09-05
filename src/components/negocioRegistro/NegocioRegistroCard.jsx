import React, { useState, useRef, useMemo } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import { getNominatimReverse } from '../../api/nominatim';
import logo from '../../static/img/pediloya.png';
import FormData from 'form-data';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//import { createNegocio } from '../../api/negocioServices'

const center = {
    lat: -34.733813,
    lng: -58.392080,
}
export const NegocioRegistroCard = () => {
    const [position, setPosition] = useState(center)
    const [calleNombre, setCalleNombre] = useState()
    const [calleNumero, setCalleNumero] = useState()
    const [localidad, setLocalidad] = useState()
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
        console.log("numero: "+JSON.stringify(direccionjson.data.address.house_number))
        console.log("calle: "+JSON.stringify(direccionjson.data.address.road))
        console.log("town: "+JSON.stringify(direccionjson.data.address.town))
        console.log("ciudad: "+JSON.stringify(direccionjson.data.address.city))
        setCalleNombre(calle.split('"').join(''))
        setCalleNumero(numero.split('"').join(''))
        setLocalidad(ciudad.split('"').join(''))

        //setDireccion(""+calle+" "+numero+""+ciudad)

    }

    var bodyFormData = new FormData();

    function handleChangeNombre(evt) {
        console.log("nombre:" + evt.target.value)
        bodyFormData.append('nombre', evt.target.value);
    }
    function handleChangeEmail(evt) {
        console.log("email:" + evt.target.value)
        bodyFormData.append('email', evt.target.value);
    }
    function handleChangeTelefono(evt) {
        console.log("telefono:" + evt.target.value)
        bodyFormData.append('telefono', evt.target.value);
    }
    function handleFileChosen(file) {

        bodyFormData.append('file', file);
    }

    function handleChangeCalleNombre (value){
            setCalleNombre(value)
    }

    function handleChangecalleNumero (value){
        setCalleNumero(value)
    }

    function handleChangeLocalidad (value){
        setLocalidad(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUBMIT: " + bodyFormData);
        axios({
            method: "POST",
            url: "https://pedidosya-api.herokuapp.com/negocios/",
            data: bodyFormData
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
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
                            <label for="formFile" class="form-label">Seleccionar imagen</label>
                            <input className="form-control" type="file" name="imagen" id="formFile" onChange={e => handleFileChosen(e.target.files[0])} />
                        </div>

                        <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <DraggableMarker />
                        </MapContainer>
                        <button type="button" className="btn btn-danger" onClick={traerDireccion}>Traer Direccion</button>

                        <div className="form-floating mb-3">
                            <input className="form-control"
                                type="text"
                                name="calleNombre"
                                id="InputTel"
                                placeholder=" "
                                onChange={e => handleChangeCalleNombre(e.target.value)}
                                value={calleNombre}
                                required
                                
                            />
                            <label htmlFor="InputTel">Calle</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control"
                                type="text"
                                name="calleNumero"
                                id="InputTel"
                                placeholder=" "
                                onChange={e => handleChangecalleNumero(e.target.value)}
                                value={calleNumero}
                                required
                                
                            />
                            <label htmlFor="InputTel">Numero</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control"
                                type="text"
                                name="localidad"
                                id="InputTel"
                                placeholder=" "
                                onChange={e => handleChangeLocalidad(e.target.value)}
                                value={localidad}
                                required
                                
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
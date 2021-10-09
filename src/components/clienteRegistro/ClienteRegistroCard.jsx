import React, { useState, useRef, useMemo } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

export const ClienteRegistroCard = () => {

    const history = useHistory()
    let objeto={
        nombre: " ",
        email: " ",
        password: " ",
        telefono: " ",
        latitud: 0,
        longitud: 0,
        ciudad: " ",
        calle: " ",
        numero: ""
    }
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
                    <Formik
                        initialValues={{
                            nombre: "",
                            email: "",
                            password: "",
                            password2:"",
                            telefono: "",
                            latitud: 0,
                            longitud: 0,
                            ciudad: "",
                            calle: "",
                            numero: ""
                        }}

                        validationSchema={
                            Yup.object({
                                //validacion nombre
                                nombre: Yup.string()
                                .max(20, "Debe tener 100 caracteres o menos")
                                .matches(/^[a-zA-ZÀ-ÿ\s]{1,48}$/, "El nombre solo puede contener letras y espacios")
                                .required("complete este campo"),

                                email: Yup.string()
                                .email("Debe ingresar un email válido")
                                .required("complete este campo"),

                                numero: Yup.number()
                                .required("complete este campo")

                            })
                        }

                        validate={(valores)=>{
                            let errores = {};

                            //validacion contraseña
                            if (!valores.password){
                                errores.password="Ingrese una contraseña"
                            }

                            if (!valores.password2){
                                errores.password2="Ingrese una contraseña"
                            } else if(valores.password!==valores.password2){
                                errores.password2="Las contraseñas deben coincidir"
                            }

                            //validacion telefono
                            if (!valores.telefono){
                                errores.telefono="Ingrese un telefono"
                            } else if (!/^[0-9\s]{1,20}$/.test(valores.telefono)){
                                errores.telefono="El telefono solo puede contener numeros sin espacios"
                            }

                            return errores;
                        }}

                        onSubmit={async (valores)=>{
                            objeto.nombre=valores.nombre
                            objeto.email=valores.email
                            objeto.password=valores.password
                            objeto.telefono=valores.telefono
                            objeto.calle=calleNombre
                            objeto.numero= calleNumero
                            objeto.ciudad= localidad
                            objeto.latitud= position.lat
                            objeto.longitud= position.lng
                            console.log("objeto: "+JSON.stringify(objeto))
                            
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
                            
                        }}

                    >
                        {(props) => (
                            <Form >
                                <div className="form-floating mb-3">
                                    <Field
                                        type="text"
                                        name="nombre"
                                        className="form-control"
                                        id="floatingInput1"
                                        placeholder="Ingrese su nombre"
                                        required
                                    />
                                    <ErrorMessage name="nombre" component={() => { return <p className="text-danger">{props.errors.nombre}</p> }} />
                                    <label htmlFor="floatingInput1">Ingrese su nombre</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <Field className="form-control"
                                        type="email"
                                        name="email"
                                        id="InputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Ingrese su dirección de email"
                                        required
                                    />
                                    <ErrorMessage name="email" component={() => { return <p className="text-danger">{props.errors.email}</p> }} />
                                    <label htmlFor="InputEmail1">Correo electrónico</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <Field
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        id="floatingInput2"
                                        placeholder="Ingrese contraseña"
                                        minLength="8"
                                        required
                                    />
                                    <ErrorMessage name="password" component={() => { return <p className="text-danger">{props.errors.password}</p> }} />
                                    <label htmlFor="floatingInput2">Ingrese contraseña</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <Field
                                        type="password"
                                        name="password2"
                                        className="form-control"
                                        id="floatingInput3"
                                        placeholder="Ingrese contraseña"
                                        minLength="8"
                                        required
                                    />
                                    <ErrorMessage name="password2" component={() => { return <p className="text-danger">{props.errors.password2}</p> }} />
                                    <label htmlFor="floatingInput3">Confirmar contraseña</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <Field className="form-control"
                                        type="text"
                                        name="telefono"
                                        id="InputTel"
                                        aria-describedby="Tel"
                                        placeholder="Ingrese su número de teléfono "
                                        required
                                    />
                                    <ErrorMessage name="telefono" component={() => { return <p className="text-danger">{props.errors.telefono}</p> }} />
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
                                    <Field className="form-control"
                                        type="text"
                                        name="calle"
                                        id="Inputcalle"
                                        placeholder=" "
                                        value={calleNombre}
                                        required
                                        disabled
                                    />
                                    <ErrorMessage name="calle" component={() => { return <p className="text-danger">{props.errors.calle}</p> }} />
                                    <label htmlFor="Inputcalle">Calle</label>
                                </div>

                                <div className="form-floating mb-3">
                                <small>{calleNumero&&"Número sugerido:"+calleNumero}</small>
                                    <Field className="form-control"
                                        type="text"
                                        name="numero"
                                        id="InputNum"
                                        placeholder=" "
                                        required
                                    />
                                    <ErrorMessage name="numero" component={() => { return <p className="text-danger">{props.errors.numero}</p> }} />
                                    <label htmlFor="InputNum">Número</label>
                                </div>
                                

                                <div className="form-floating mb-3">
                                    <Field className="form-control"
                                        type="text"
                                        name="ciudad"
                                        id="Inputciudad"
                                        placeholder=" "
                                        value={localidad}
                                        required
                                        disabled
                                    />
                                    <ErrorMessage name="ciudad" component={() => { return <p className="text-danger">{props.errors.ciudad}</p> }} />
                                    <label htmlFor="Inputciudad">Localidad</label>
                                </div>

                                <Field type="hidden" value={position.lat}/>
                                <Field type="hidden" value={position.lng}/>

                                <button type="submit" className="btn btn-danger">Comenzar</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
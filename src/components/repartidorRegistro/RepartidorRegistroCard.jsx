import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { createRepartidor } from '../../api/repartidorServices';
import logo from '../../static/img/pediloya.png';
import { toast } from 'react-toastify';
import { Loading } from '../loading/Loading';


export const RepartidorRegistroCard = () => {
  
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    return (
        isLoading?<Loading/>:
        <div>
            <div className="card" style={{ width: "30rem", textAlign: "center" }}>
                <div className="card-body" >
                    <div className="container-fluid">
                        <Link to="/"> <img src={logo} alt="logo" /> </Link>
                    </div>
                    <h5 className="card-title" >Registrarse como repartidor</h5>
                    <Formik
                        initialValues={{
                            nombre:"",
                            email:"",
                            password:"",
                            password2:"",
                            telefono:""
                        }}

                        validate={(valores)=>{
                            let errores = {};

                            //validacion nombre
                            if (!valores.nombre){
                                errores.nombre="Ingrese un nombre"
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,48}$/.test(valores.nombre)){
                                errores.nombre="El nombre solo puede contener letras y espacios"
                            }

                            //validacion correo
                            if (!valores.email){
                                errores.email="Ingrese un correo"
                            } else if (!/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(valores.email)){
                                errores.email="El correo electronico no es valido"
                            }

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
                            } else if (!/^[1-9\s]{1,20}$/.test(valores.telefono)){
                                errores.telefono="El telefono solo puede contener numeros sin espacios"
                            }

                            return errores;
                        }}

                        onSubmit={ async(valores, {resetForm})=>{
                            let repartidor = {
                                nombre: valores.nombre,
                                email: valores.email,
                                password: valores.password,
                                telefono: valores.telefono
                            }
                            resetForm();
                            try {
                                setIsLoading(true)
                                const res = await createRepartidor(repartidor);
                    
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
                            /*
                            console.log("valores: "+JSON.stringify(valores))
                            console.log("repartidor: "+JSON.stringify(repartidor))
                            */
                        }}
                    >   
                    {(props) => (
                        <Form>
                            <div className="form-floating mb-3">
                                <Field
                                    type="text"
                                    name="nombre"
                                    className="form-control"
                                    id="floatingInput1"
                                    placeholder="Ingrese su nombre"
                                />
                                <ErrorMessage name="nombre" component={()=>{return<p className="text-danger">{props.errors.nombre}</p>}} />
                                <label htmlFor="floatingInput1">Ingrese su nombre</label>
                            </div>

                            <div className="form-floating mb-3">
                                <Field className="form-control"
                                    type="email"
                                    name="email"
                                    id="InputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Ingrese su dirección de email"
                                />
                                <ErrorMessage name="email" component={()=>{return<p className="text-danger">{props.errors.email}</p>}} />
                                <label htmlFor="InputEmail1">Correo electrónico</label>
                            </div>

                            <div className="form-floating mb-3">
                                <Field className="form-control"
                                    type="password"
                                    name="password"
                                    id="Inputpassword1"
                                    placeholder="Ingrese contraseña"
                                />
                                <ErrorMessage name="password" component={()=>{return<p className="text-danger">{props.errors.password}</p>}} />
                                <label htmlFor="Inputpassword1">Ingrese contraseña</label>
                            </div>

                            <div className="form-floating mb-3">
                                <Field className="form-control"
                                    type="password"
                                    name="password2"
                                    id="Inputpassword2"
                                    placeholder="Repita contraseña"
                                />
                                <ErrorMessage name="password2" component={()=>{return<p className="text-danger">{props.errors.password2}</p>}} />
                                <label htmlFor="Inputpassword2">Repita contraseña</label>
                            </div>

                            <div className="form-floating mb-3">
                                <Field className="form-control"
                                    type="text"
                                    name="telefono"
                                    id="Inputnumber"
                                    placeholder="Ingrese su número de teléfono"
                                />
                                <ErrorMessage name="telefono" component={()=>{return<p className="text-danger">{props.errors.telefono}</p>}} />
                                <label htmlFor="Inputnumber">Teléfono</label>
                            </div>
                        
                            <button type="submit" className="btn btn-danger">Comenzar</button>
                        </Form>
                        )}

                        {/*(props) => (
                        <form onSubmit={props.handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    name="nombre"
                                    className="form-control"
                                    id="floatingInput1"
                                    placeholder="Ingrese su nombre"
                                    onChange={props.handleChange}
                                    value={props.values.nombre}
                                    onBlur={props.handleBlur}
                                    
                                />
                                {props.touched.nombre && props.errors.nombre&&<p className="text-danger">{props.errors.nombre}</p>}
                                <label htmlFor="floatingInput1">Ingrese su nombre</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input className="form-control"
                                    type="email"
                                    name="email"
                                    id="InputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Ingrese su dirección de email"
                                    onChange={props.handleChange}
                                    value={props.values.email}
                                    onBlur={props.handleBlur}
                                    
                                />
                                {props.touched.email && props.errors.email&&<p className="text-danger">{props.errors.email}</p>}
                                <label htmlFor="InputEmail1">Correo electrónico</label>
                            </div>
                        
                            <button type="submit" className="btn btn-danger">Comenzar</button>
                        </form>
                        )*/}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
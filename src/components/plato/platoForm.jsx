import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import FormData from 'form-data';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { agregarPlato } from '../../api/negocioServices';
import { Loading } from '../loading/Loading';


export const PlatoForm = () => {
    var bodyFormData = new FormData();
    const [isLoading, setIsLoading] = useState(false)
    const [archivo, setArchivo] = useState(" ")

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id");

    const handleFileChosen = (file) => {
        setArchivo(file)
    }

    return (
        isLoading ? <Loading /> :
            <div className="card" style={{ width: "50%", left: "25%", textAlign: "center" }}>
                <div className="card-body" >
                    <h5 className="card-title" >Ingrese su plato</h5>
                    <Formik
                        initialValues={{
                            nombre: "",
                            descripcion: "",
                            precio: "",
                        }}

                        validate={(valores) => {
                            let errores = {};

                            //validacion nombre
                            if (!valores.nombre) {
                                errores.nombre = "Ingrese un nombre"
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,48}$/.test(valores.nombre)) {
                                errores.nombre = "El nombre solo puede contener letras y espacios"
                            }

                            //validacion descripcion
                            if (!valores.descripcion) {
                                errores.descripcion = "Ingrese una descripcion"
                            } else if (!/^[a-zA-ZÀ-ÿ1-9\s]{1,80}$/.test(valores.descripcion)) {
                                errores.descripcion = "descripción incorrecta"
                            }

                            //validacion precio
                            if (!valores.precio) {
                                errores.precio = "Ingrese un precio"
                            } else if (!/^[0-9\s]{1,20}$/.test(valores.precio)) {
                                errores.precio = "El precio solo puede contener numeros"
                            }

                            return errores;
                        }}

                        onSubmit={async (valores, { resetForm }) => {
                            let plato = {
                                nombre: valores.nombre,
                                descripcion: valores.descripcion,
                                precio: valores.precio,
                            }
                            resetForm();
                            bodyFormData.append('nombre', plato.nombre)
                            bodyFormData.append('descripcion', plato.descripcion)
                            bodyFormData.append('precio', plato.precio)
                            bodyFormData.append('file', archivo)

                            setIsLoading(true)
                            agregarPlato(idNegocio, bodyFormData)
                                .then(function (response) {
                                    //handle success
                                    console.log(JSON.stringify(response))
                                    toast.success("plato creado")
                                    console.log(response);
                                }).catch(function (response) {
                                    //handle error
                                    toast.error("Problemas en la creacion")
                                    console.log(response);
                                }).finally(
                                    setIsLoading(false)
                                )
                            //history.push(`/negocioVista?id=${idNegocio}`);
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
                                        placeholder="Ingrese el nombre del plato"
                                    //onChange={handleChangeNombre}
                                    />
                                    <ErrorMessage name="nombre" component={() => { return <p className="text-danger">{props.errors.nombre}</p> }} />
                                    <label htmlFor="floatingInput1">Ingrese nombre del plato</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <Field className="form-control"
                                        type="text"
                                        name="descripcion"
                                        id="floatingInput2"
                                        aria-describedby="descripcion"
                                        placeholder="Ingrese la descripción de su plato"
                                    //onChange={handleChangeDescripcion}
                                    />
                                    <ErrorMessage name="descripcion" component={() => { return <p className="text-danger">{props.errors.descripcion}</p> }} />
                                    <label htmlFor="floatingInput2">Descripción</label>
                                </div>
                                <div className="form-floating mb-3">

                                    <Field className="form-control"
                                        type="text"
                                        name="precio"
                                        id="floatingInput3"
                                        aria-describedby="precio"
                                        placeholder="Ingrese el precio de su plato"
                                    //onChange={handleChangePrecio}
                                    />
                                    <ErrorMessage name="precio" component={() => { return <p className="text-danger">{props.errors.precio}</p> }} />
                                    <label htmlFor="floatingInput3">Precio</label>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Seleccionar imagen</label>
                                    <input className="form-control" type="file" name="imagen" id="formFile" onChange={e => handleFileChosen(e.target.files[0])} />
                                </div>

                                <button type="submit" className="btn btn-danger">Guardar</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

    )
}


import React, { useState, useEffect } from 'react'
import FormData from 'form-data';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { modificarPlato, getPlato } from '../../../api/negocioServices';
import { toast } from 'react-toastify';

export const ModificarPlatoCard = (propsPlato) => {
    var bodyFormData = new FormData();
    const [isLoading, setIsLoading] = useState(false)
    const [archivo, setArchivo] = useState(" ")

    const handleFileChosen = (file) => {
        setArchivo(file)
    }

    return (
        <div className="card" style={{ width: "50%", left: "25%", textAlign: "center", marginTop:"10%" }}>
                <div className="card-body" >
                    <h5 className="card-title" >Modificar</h5>
                    <Formik
                        initialValues={{
                            nombre: propsPlato.nombre,
                            descripcion: propsPlato.descripcion,
                            precio: propsPlato.precio,
                            descuento: propsPlato.descuento,
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
                            
                            /*
                            //validacion descuento
                            if ( (!/^[0-9\s]{0,3}$/.test(valores.descuento) || (valores.descuento>100)) ) {
                                errores.descuento = "El descuento solo puede contener numeros y ser menor a 100"
                            }
                            */
                            

                            return errores;
                        }}

                        onSubmit={async (valores, { resetForm }) => {
                            let plato = {
                                nombre: valores.nombre,
                                descripcion: valores.descripcion,
                                precio: valores.precio,
                                descuento: valores.descuento
                            }
                            resetForm();
                            bodyFormData.append('nombre', plato.nombre)
                            bodyFormData.append('descripcion', plato.descripcion)
                            bodyFormData.append('precio', plato.precio)
                            bodyFormData.append('file', archivo)
                            //bodyFormData.append('descuento', plato.descuento)
                            
                            for (var value of bodyFormData.values()){
                                console.log("BODYFORMDATA: "+value)
                            }

                            setIsLoading(true)
                            modificarPlato(propsPlato.idNegocio, propsPlato.idPlato, bodyFormData)
                                .then(function (response) {
                                    //handle success
                                    console.log(JSON.stringify(response))
                                    toast.success("Plato modificado")
                                    console.log(response);
                                }).catch(function (response) {
                                    //handle error
                                    toast.error("Problemas en la modificación")
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
                                    />
                                    <ErrorMessage name="precio" component={() => { return <p className="text-danger">{props.errors.precio}</p> }} />
                                    <label htmlFor="floatingInput3">Precio</label>
                                </div>
                                <p>Imagen actual:</p>
                                <img className="img-fluid" src={propsPlato.imagen} alt="sans" width="100px" />

                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Seleccionar imagen nueva</label>
                                    <input className="form-control" type="file" name="imagen" id="formFile" onChange={e => handleFileChosen(e.target.files[0])} />
                                </div>

                                <div className="form-floating mb-3">
                                    <Field className="form-control"
                                        type="text"
                                        name="descuento"
                                        id="floatingInputdesc"
                                        placeholder="Ingrese procentaje de descuento"
                                    //onChange={handleChangeDescripcion}
                                    />
                                    <ErrorMessage name="descuento" component={() => { return <p className="text-danger">{props.errors.descuento}</p> }} />
                                    <label htmlFor="floatingInputdesc">Descuento</label>
                                </div>

                                <button type="submit" className="btn btn-danger">Guardar</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
    )
}

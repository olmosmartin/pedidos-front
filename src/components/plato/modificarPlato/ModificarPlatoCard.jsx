import React, { useState } from 'react'
import FormData from 'form-data';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { modificarPlato } from '../../../api/negocioServices';
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
                            descuento: propsPlato.descuento || "",
                            tipo: propsPlato.tipo || ""
                        }}

                        validationSchema={
                            Yup.object({
                                //validacion nombre
                                nombre: Yup.string()
                                .max(20, "Debe tener 100 caracteres o menos")
                                .matches(/^[a-zA-ZÀ-ÿ\s]{1,48}$/, "El nombre solo puede contener letras y espacios")
                                .required("complete este campo"),

                                //validacion descripcion
                                descripcion: Yup.string()
                                .matches(/^[a-zA-ZÀ-ÿ1-9\s]{1,100}$/, "descripción incorrecta")
                                .required("complete este campo"),

                                precio: Yup.string()
                                .matches(/^[0-9\s]{1,20}$/, "El precio solo puede contener numeros")
                                .required("complete este campo"),
                                
                                descuento: Yup.number()
                                .max(100, "Debe ser menor a 100")
                            })
                        }

                        onSubmit={async (valores, { resetForm }) => {
                            let plato = {
                                nombre: valores.nombre,
                                descripcion: valores.descripcion,
                                precio: valores.precio,
                                descuento: valores.descuento,
                                tipo: valores.tipo
                            }
                            resetForm();
                            bodyFormData.append('nombre', plato.nombre)
                            bodyFormData.append('descripcion', plato.descripcion)
                            bodyFormData.append('precio', plato.precio)
                            bodyFormData.append('file', archivo)
                            bodyFormData.append('descuento', plato.descuento)
                            bodyFormData.append('tipo_comida', plato.tipo)
                            
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

                                <Field className="form-select" as="select" name="tipo" aria-label="Tipo de comida">
                                    <option value=""></option>
                                    <option value="sin TACC">sin TACC</option>
                                    <option value="vegana">Vegana</option>
                                </Field>
                                <ErrorMessage name="tipo" component={() => { return <p className="text-danger">{props.errors.tipo}</p> }} />

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

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const TarjetaForm = (props) => {
    return (
        <div>
            <h3>{props.Opction}</h3>
            <Formik
                initialValues={{
                    numero: '',
                    nombre: '',
                    codSeguridad: '',
                    fechaVen: '',
                }}

                validationSchema={
                    Yup.object({
                        //validacion nombre
                        nombre: Yup.string()
                        .max(20, "Debe tener 100 caracteres o menos")
                        .matches(/^[a-zA-ZÀ-ÿ\s]{1,48}$/, "El nombre solo puede contener letras y espacios")
                        .required("complete este campo"),
                        
                        //validacion numero
                        numero: Yup.string()
                        .max(16, "Debe tener 16 caracteres")
                        .min(16, "Debe tener 16 caracteres")
                        .matches(/^[0-9]{1,16}$/, "El numero solo puede contener numeros")
                        .required("complete este campo"),
                        
                        //validacion codigo seguridad
                        codSeguridad: Yup.string()
                        .max(3, "Debe tener 3 caracteres")
                        .min(3, "Debe tener 3 caracteres")
                        .matches(/^[0-9]{1,3}$/, "El codigo solo puede contener numeros")
                        .required("complete este campo"),

                        //validar fecha formato MM/YY
                        fechaVen: Yup.string()
                        .matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, "El formato de la fecha es MM/YY")
                        .required("complete este campo"),
                        
                    })
                }
                onSubmit={async (valores)=>{
                }}

            >
                {(props) => (
                    <Form >
                         <div className="form-floating mb-3">
                            <Field
                                type="text"
                                name="numero"
                                className="form-control"
                                id="floatingInput0"
                                placeholder="Ingrese número"
                                required
                            />
                            <ErrorMessage name="numero" component={() => { return <p className="text-danger">{props.errors.numero}</p> }} />
                            <label htmlFor="floatingInput0">Ingrese número</label>
                        </div>

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
                                type="password"
                                name="codSeguridad"
                                id="InputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Ingrese código de seguridad"
                                required
                            />
                            <ErrorMessage name="codSeguridad" component={() => { return <p className="text-danger">{props.errors.codSeguridad}</p> }} />
                            <label htmlFor="InputEmail1">código de seguridad</label>
                        </div>

                        <div className="form-floating mb-3">
                            <Field
                                type="text"
                                name="fechaVen"
                                className="form-control"
                                id="floatingInput2"
                                placeholder="Ingrese fecha de vencimiento"
                                minLength="8"
                                required
                            />
                            <ErrorMessage name="fechaVen" component={() => { return <p className="text-danger">{props.errors.fechaVen}</p> }} />
                            <label htmlFor="floatingInput2">Fecha de vencimiento</label>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Loading} from "../../components/loading/Loading"
import { passwordReset } from '../../api/usuariosServices';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom"


export const RecuperarContraseñaCard = () => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    return (
        isLoading?<Loading/>:
        <div className="card">
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h5 className="card-title">Recuperar Contraseña</h5>
                <Formik
                        initialValues={{
                            email:"",
                        }}

                        validate={(valores)=>{
                            let errores = {};

                            //validacion correo
                            if (!valores.email){
                                errores.email="Ingrese un correo"
                            } else if (!/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(valores.email)){
                                errores.email="El correo electronico no es valido"
                            }

                            return errores;
                        }}

                        onSubmit={ async(valores, {resetForm})=>{

                            //resetForm();
                            console.log(valores.email)
                            try {
                                setIsLoading(true)
                                const res = await passwordReset(valores.email);
                    
                                if (res.status===200){
                                    setIsLoading(false)
                                    toast.success("Revisa tu email!")
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
                    <Form>

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
                    
                        <button type="submit" className="btn btn-danger mt-4">Enviar</button>

                    </Form>
                )}
                </Formik>

            </div>
        </div>
    )
}

import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Loading} from "../../components/loading/Loading"
import { passwordChange } from '../../api/usuariosServices';
import { toast } from 'react-toastify';
import { useHistory, useLocation } from "react-router-dom"

export const PaswordResetCard = () => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const token = query.get("token");

    return (
        isLoading?<Loading/>:
        <div className="card">
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h5 className="card-title">Recuperar Contraseña</h5>
                <Formik
                        initialValues={{
                            password:"",
                            password2:"",
                        }}

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

                            return errores;
                        }}

                        onSubmit={ async(valores, {resetForm})=>{

                            //resetForm();
                            console.log(valores.password)
                            if (token){
                                try {
                                    setIsLoading(true)
                                    const res = await passwordChange(valores.password, token);
                        
                                    if (res.status===200){
                                        setIsLoading(false)
                                        toast.success("contraseña cambiada")
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
                            } else {
                                try {
                                    setIsLoading(true)
                                    const res = await passwordChange(valores.password);
                        
                                    if (res.status===200){
                                        setIsLoading(false)
                                        toast.success("contraseña cambiada")
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
                            }
                    }
                    >   
                {(props) => (
                    <Form>

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
                    
                        <button type="submit" className="btn btn-danger mt-4">Enviar</button>

                    </Form>
                )}
                </Formik>

            </div>
        </div>
    )
}

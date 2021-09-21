import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"

import { createRepartidor } from '../../api/repartidorServices';
import logo from '../../static/img/pediloya.png';
import { toast } from 'react-toastify';
import { Loading } from '../loading/Loading';


const estadoInicialVacio = {
    nombre: " ",
    email: " ",
    password: " ",
    telefono: " ",
}

export const RepartidorRegistroCard = () => {
  
    const history = useHistory()
    const [repartidor, setRepartidor] = useState(estadoInicialVacio)
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e) => {
        setRepartidor({ ...repartidor, [e.target.name]: e.target.value });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

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
    }

    return (
        isLoading?<Loading/>:
        <div>
            <div className="card" style={{ width: "30rem", textAlign: "center" }}>
                <div className="card-body" >
                    <div className="container-fluid">
                        <Link to="/"> <img src={logo} alt="logo" /> </Link>
                    </div>
                    <h5 className="card-title" >Registrarse como repartidor</h5>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                id="floatingInput1"
                                placeholder="Ingrese su nombre"
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="floatingInput1">Ingrese su nombre</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control"
                                type="email"
                                name="email"
                                id="InputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Ingrese su dirección de email"
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="InputEmail1">Correo electrónico</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="floatingInput2"
                                placeholder="Ingrese contraseña"
                                onChange={handleInputChange}
                                minLength="8"
                                required
                            />
                            <label htmlFor="floatingInput2">Ingrese contraseña</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                name=" "
                                className="form-control"
                                id="floatingInput3"
                                placeholder="Ingrese contraseña"
                                //onChange={}
                                minLength="8"
                                required
                            />
                            <label htmlFor="floatingInput3">Confirmar contraseña</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control"
                                type="text"
                                name="telefono"
                                id="InputTel"
                                aria-describedby="Tel"
                                placeholder="Ingrese su número de teléfono "
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="InputTel">Teléfono</label>
                        </div>
                       
                        <button type="submit" className="btn btn-danger">Comenzar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
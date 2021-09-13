import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom"

import { usuarioLogin } from '../../api/usuariosServices'

const estadoInicialVacio = {
    email: "",
    password: ""
}


export const IniciarSesionCard = () => {
    const history = useHistory()
    const [usuario, setUsuario] = useState(estadoInicialVacio)

    const handleInputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(usuario);
        try {
            const res = await usuarioLogin(usuario);
            console.log("RES: " +JSON.stringify(res))

            if (res.data.auth_token){
                
                console.log("token: "+res.data.auth_token);
                console.log("role: "+res.data.role);
                console.log("id: "+res.data.id);
                console.log("usuario: "+JSON.stringify(usuario));
                
                sessionStorage.setItem('token', res.data.auth_token);
                sessionStorage.setItem('usuarioID', res.data.id);
                sessionStorage.setItem('role', res.data.role);

                toast.success("Bienvenido!")
                history.push("/negocioVista")
            }
            
        } catch (err) {
            if (err.response && err.response.data) {
                toast.error("usuario o contraseña no válidas")
                console.log(err.response.data.message) // error message
            }
        }
    }

    return (
        <div className="card">
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h5 class="card-title">Iniciar sesion</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating w-100">
                        <input className="form-control"
                            type="email"
                            name="email"
                            id="InputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Ingrese la dirección de email de su local"
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="InputEmail1">Correo electrónico</label>
                    </div>

                    <div className="form-floating w-100 mt-3">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="floatingInput1"
                            placeholder="Ingrese contraseña"
                            onChange={handleInputChange}
                            minLength="8"
                            required
                        />
                        <label htmlFor="floatingInput1">Ingrese contraseña</label>
                    </div>

                    <button type="submit" className="btn btn-danger mt-2">Comenzar</button>
                </form>
            </div>
        </div>
    )
}

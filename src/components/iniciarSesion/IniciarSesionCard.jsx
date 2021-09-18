import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom"

import { getUsuario } from '../../api/usuariosServices';
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
        try {
            const res = await usuarioLogin(usuario)
            const res2 = await getUsuario(res.data.id); //id del negocio a partir de la id de usuario

            if (res.data.auth_token){
                
                sessionStorage.setItem('token', res.data.auth_token);
                sessionStorage.setItem('usuarioID', res.data.id);
                sessionStorage.setItem('role', res.data.role);
                //const idUsuario =  res.data.id;
                
                toast.success("Bienvenido!")
                res.data.role==='NEGOCIO'&&history.push('/negocioVista?id='+res2.data[0]._id+'')
                res.data.role==='CLIENTE'&&history.push("/")
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

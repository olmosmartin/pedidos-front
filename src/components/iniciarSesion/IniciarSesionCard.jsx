import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useHistory, Link } from "react-router-dom"

//import { getUsuario } from '../../api/usuariosServices';
import { usuarioLogin } from '../../api/usuariosServices'
import { Loading } from '../loading/Loading'

const estadoInicialVacio = {
    email: "",
    password: ""
}


export const IniciarSesionCard = () => {
    const history = useHistory()
    const [usuario, setUsuario] = useState(estadoInicialVacio)
    const [isLoading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setLoading(true)
            console.log("usuario: "+JSON.stringify(usuario))
            const res = await usuarioLogin(usuario)
            //const res2 = await getUsuario(res.data.id); //id del negocio a partir de la id de usuario

            if (res.data.auth_token){
                setLoading(false)
                sessionStorage.setItem('token', res.data.auth_token);
                sessionStorage.setItem('usuarioID', res.data.id);
                sessionStorage.setItem('role', res.data.role);
                //const idUsuario =  res.data.id;
                
                toast.success("Bienvenido!")
                res.data.role==='NEGOCIO'&&history.push('/negocioVista?id='+res.data.id)
                res.data.role==='CLIENTE'&&history.push("/")
                res.data.role==='REPARTIDOR'&&history.push("/repartidorVista?id="+res.data.id)
            }
            
        } catch (err) {
            setLoading(false)
            if (err.response && err.response.data) {
                toast.error("usuario o contraseña no válidas")
                console.log(err.response.data.message) // error message
            }
        }
    }

    return (
        isLoading? <Loading/>:
        <div className="card">
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h5 className="card-title">Iniciar sesion</h5>
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

                    <button type="submit" className="btn btn-danger mt-4">Comenzar</button>

                    <p className="mt-4"><Link to={"/clienteRegistro"}>Registrarse</Link></p>
                </form>
            </div>
        </div>
    )
}

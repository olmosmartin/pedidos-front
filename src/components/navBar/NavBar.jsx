import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../static/img/pediloya.png';
import logoMin from '../../static/img/lap.png'
import { useHistory, } from "react-router-dom" // para cambiar de ruta
import './NavBar.css'
import LogOut from '../logOut/LogOut';


export const NavBar = () => {
    const history = useHistory()

    const handleSubmit = () => {

        history.push(`/negocioRegistro`);
    }

    const handleNegocio = async() => {
        history.push(`/negocioVista?id=${sessionStorage.getItem('usuarioID')}`);
    }

    const handleRepartidor = () => {

        history.push(`/repartidorVista?id=${sessionStorage.getItem('usuarioID')}`);
    }

    
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top sombra">
                <div className="container-fluid">
                    <Link className="navbar-brand px-5" to="/"> <img src={logo} alt="logo" /> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="container m-2">
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {sessionStorage.getItem('role')==='NEGOCIO'&&
                                <li>
                                    <button className="badge rounded-pill btn-danger  p-2 mt-2" type="submit" onClick={handleNegocio} style={{marginRight: '5px'}}>Mi negocio</button>   
                                </li>
                            }

                            {(!sessionStorage.getItem('role') || sessionStorage.getItem('role')==='CLIENTE') &&                       
                                <li>
                                    <button className="badge rounded-pill bg-secondary p-2 mt-2" type="submit" onClick={handleSubmit}>Registr?? tu negocio</button>
                                </li>
                            }

                            {sessionStorage.getItem('role')==='REPARTIDOR'&&                            
                                <li>
                                    <button className="badge rounded-pill bg-secondary p-2 mt-2" type="submit" onClick={handleRepartidor}>Ver Pedidos</button>
                                </li>
                            }
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle px-5" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="#"> <img src={logoMin} alt="logomin" width="20"/> </Link>
                                
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {sessionStorage.getItem('usuarioID')?<><LogOut/>  <Link className="dropdown-item" to="/passwordReset">Cambiar contrase??a</Link></>:<Link className="dropdown-item" to="/iniciarSesion">Iniciar Sesion</Link>}
                                    {sessionStorage.getItem('role')==='CLIENTE'&&<Link className="dropdown-item" to="/pedidosRealizados"><i className="fa fa-history" aria-hidden="true"></i>  Historial Pedidos</Link>}
                                    {sessionStorage.getItem('role')==='REPARTIDOR'&&<Link className="dropdown-item" to="/repartidorHistorial">  Pedidos Entregados</Link>}
                                    {!sessionStorage.getItem('usuarioID')&&<Link className="dropdown-item" to="/clienteRegistro">Registrarse</Link>}
                                </ul>
                                
                            </li>

                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

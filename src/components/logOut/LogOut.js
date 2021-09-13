import React from 'react'
import { Link } from "react-router-dom";

export default function LogOut() {
    const handleClick = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('usuarioID');
        sessionStorage.removeItem('role');
    }
    return (
        <div>
            <Link className="dropdown-item" to="/" onClick={()=>{handleClick()}}>Cerrar Sesion</Link>
        </div>
    )
}
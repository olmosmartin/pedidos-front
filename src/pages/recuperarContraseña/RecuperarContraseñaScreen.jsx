import React from 'react'
import { NavBar } from '../../components/navBar/NavBar'
import { RecuperarContraseñaCard } from '../../components/recuperarContraseña/RecuperarContraseñaCard'

export const RecuperarContraseñaScreen = () => {
    return (
        <div>
            <NavBar/>
            <div style={{ marginTop:"10%" }}></div>
            <RecuperarContraseñaCard/>
        </div>
    )
}

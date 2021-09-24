import React from 'react'
import { HistorialPedidos } from '../../components/historialPedidos/HistorialPedidos'
import { NavBar } from '../../components/navBar/NavBar'


export const HistorialPedidosScreen = () => {
    return (
        <div>
            <NavBar/>
            <div className={"space"} style={{margin:40}}></div>
            <HistorialPedidos/>
        </div>
    )
}

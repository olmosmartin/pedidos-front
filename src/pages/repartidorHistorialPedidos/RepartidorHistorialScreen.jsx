import React from 'react'
import { NavBar } from '../../components/navBar/NavBar'
import { RepartidorHistorialPedidos } from '../../components/repartidorHistorial/repartidorHistorialPedidos'


export const RepartidorHistorialPedidosScreen = () => {
    return (
        <div>
            <NavBar/>
            <div className={"space"} style={{margin:40}}></div>
            <RepartidorHistorialPedidos/>
        </div>
    )
}

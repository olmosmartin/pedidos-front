import axios from 'axios';
import { path } from '../constantes';


export const crearPedido =async (pedido)=>{

    return await axios({
        method: "POST",
        url: `${path}pedidos`,
        data: pedido,
        headers: {
            //'Content-Type': 'application/json',
            "auth-token": sessionStorage.getItem('token')
        }
    })

}

export const getPedidosNegocio = async (id)=>{
    return await axios.get(`${path}pedidos/${id}`);
}

export const aceptarPedido = async (id)=>{
    
    return await axios({
        method: "PUT",
        url: `${path}pedidos/${id}/aceptar`,
        headers: {
            //'Content-Type': 'application/json',
            "auth-token": sessionStorage.getItem('token')
        }
    })

    //return await axios.put(`${path}pedidos/${id}/aceptar`);
}

export const rechazarPedido = async (id)=>{

    return await axios({
        method: "PUT",
        url: `${path}pedidos/${id}/rechazar`,
        headers: {
            //'Content-Type': 'application/json',
            "auth-token": sessionStorage.getItem('token')
        }
    })

    //return await axios.put(`${path}pedidos/${id}/rechazar`);
}
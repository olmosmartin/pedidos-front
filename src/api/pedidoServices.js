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

export const getPedido = async (id)=>{
    return await axios.get(`${path}pedidos/${id}`);
}

export const getPedidoLocalidad = async (localidad)=>{
    return await axios.get(`${path}pedidos?ciudad=${localidad}`);
}

export const puntuarPedido = async (id, puntuacion)=>{
    return await axios({
        method: "POST",
        url: `${path}pedidos/${id}/puntuar`,
        data:puntuacion,
        headers: {
            //'Content-Type': 'application/json',
            "auth-token": sessionStorage.getItem('token')
        }
    })
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
}
////////////////////////////////////////////////////////
export const listoPedido = async (id)=>{

    return await axios({
        method: "PUT",
        url: `${path}pedidos/${id}/listo`,
        headers: {
            //'Content-Type': 'application/json',
            "auth-token": sessionStorage.getItem('token')
        }
    })
}

export const enCaminoPedido = async (id)=>{

    return await axios({
        method: "PUT",
        url: `${path}pedidos/${id}/encaminar`,
        headers: {
            //'Content-Type': 'application/json',
            "auth-token": sessionStorage.getItem('token')
        }
    })
}

export const finalizarPedido = async (id)=>{

    return await axios({
        method: "PUT",
        url: `${path}pedidos/${id}/finalizar`,
        headers: {
            //'Content-Type': 'application/json',
            "auth-token": sessionStorage.getItem('token')
        }
    })
}
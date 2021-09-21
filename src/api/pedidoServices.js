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
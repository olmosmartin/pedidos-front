import { getNegocio } from '../../api/negocioServices'
import { getCliente } from '../../api/clienteServices'

//types
export const FETCH_PEDIDO_REQUEST = 'FETCH_PEDIDO_REQUEST'
export const FETCH_PEDIDO_SUCCESS = 'FETCH_PEDIDO_SUCCESS'
export const FETCH_PEDIDO_FAILURE = 'FETCH_PEDIDO_FAILURE'

//actions
const fetchPedidoRequest = () => {
    return{
        type: FETCH_PEDIDO_REQUEST,
        payload:{
            
        }
    }
}

const fetchPedidoSuccess = (pedidos) => {
    return{
        type: FETCH_PEDIDO_SUCCESS,
        payload:{
            pedidos: pedidos,
        }
    }
}

const fetchPedidoFailure = (error) => {
    return{
        type: FETCH_PEDIDO_FAILURE,
        payload:{
            error: error
        }
    }
}

export const fetchPedidosIdNegocio = (id) => {
    return (dispatch) => {
        dispatch( fetchPedidoRequest() );
        getNegocio(id)
        .then(response => {
            dispatch( fetchPedidoSuccess([response?.data?.pedidos]) );
        })
        .catch(error => {
            dispatch( fetchPedidoFailure('Pedidos no encontrados') )
        })
    }
}

export const fetchPedidosIdCliente = (id) => {
    return (dispatch) => {
        dispatch( fetchPedidoRequest() );
        getCliente(id)
        .then(response => {
            dispatch( fetchPedidoSuccess([response?.data?.pedidos]) );
        })
        .catch(error => {
            dispatch( fetchPedidoFailure('Pedidos no encontrados') )
        })
    }
}
import { getNegocio, getNegocioLocalidad } from '../../api/negocioServices'
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

export const fetchPedidosLocalidad = (localidad) => {
    return (dispatch) => {
        dispatch( fetchPedidoRequest() );

        getNegocioLocalidad(localidad).then(response=>{
            let array = []
            response?.data.map((negocio)=>{
                //traigo los negocios
                getNegocio(negocio._id)
                .then(response2 => {
                    response2?.data?.pedidos.map((pedido)=>{
                        //traigo los pedidos del negocio
                        array=[...array, pedido]
                    })
                    dispatch( fetchPedidoSuccess([array]) );
                })
                .catch(error => {
                    dispatch( fetchPedidoFailure('Pedidos no encontrados') )
                })

            })
        }).catch(error => {
            dispatch( fetchPedidoFailure('localidad sin negocios') )
        })
    }
}
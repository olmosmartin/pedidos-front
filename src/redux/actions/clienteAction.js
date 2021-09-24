//import axios from "axios"
import { getCliente } from '../../api/clienteServices'

//types
export const FETCH_CLIENTE_REQUEST = 'FETCH_CLIENTE_REQUEST'
export const FETCH_CLIENTE_SUCCESS = 'FETCH_CLIENTE_SUCCESS'
export const FETCH_CLIENTE_FAILURE = 'FETCH_CLIENTE_FAILURE'

//actions
const fetchClienteRequest = () => {
    return{
        type: FETCH_CLIENTE_REQUEST,
        payload:{
            
        }
    }
}

const attemptClientePostSucces = (cliente) => {
    return{
        type: FETCH_CLIENTE_SUCCESS,
        payload:{
            cliente: cliente,
        }
    }
}

const attemptClientePostFailure = (error) => {
    return{
        type: FETCH_CLIENTE_FAILURE,
        payload:{
            error: error
        }
    }
}

export const traerCliente = (id) => {
    return (dispatch) => {
        dispatch( fetchClienteRequest() );
        getCliente(id)
        .then(response => {
            dispatch( attemptClientePostSucces([response.data]) );
        })
        .catch(error => {
            dispatch( attemptClientePostFailure('Error') )
        })
    }
}

import axios from "axios"
import { getNegocios } from '../../api/negocioServices'

//types
export const FETCH_NEGOCIO_REQUEST = 'FETCH_NEGOCIO_REQUEST'
export const FETCH_NEGOCIO_SUCCESS = 'FETCH_NEGOCIO_SUCCESS'
export const FETCH_NEGOCIO_FAILURE = 'FETCH_NEGOCIO_FAILURE'

//actions
const fetchNegocioRequest = () => {
    return{
        type: FETCH_NEGOCIO_REQUEST,
        payload:{
            
        }
    }
}

const fetchNegocioSuccess = (negocio) => {
    return{
        type: FETCH_NEGOCIO_SUCCESS,
        payload:{
            negocio: negocio,
        }
    }
}

const fetchNegocioFailure = (error) => {
    return{
        type: FETCH_NEGOCIO_FAILURE,
        payload:{
            error: error
        }
    }
}

//
export const fetchNegocio = () => {
    return (dispatch) => {
        dispatch( fetchNegocioRequest() );
        //axios.get(`https://pokeapi.co/api/v2/pokemon?offset=300&limit=100`)
        getNegocios()
        .then(response => {
            dispatch( fetchNegocioSuccess([response.data]) );
        })
        .catch(error => {
            dispatch( fetchNegocioFailure('negocios no encontrados') )
        })
    }
}

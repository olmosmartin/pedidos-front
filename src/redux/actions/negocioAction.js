//import axios from "axios"
import { getNegocios, getNegocio, getNegocioLocalidad } from '../../api/negocioServices'

//types
export const FETCH_NEGOCIO_REQUEST = 'FETCH_NEGOCIO_REQUEST'
export const FETCH_NEGOCIO_SUCCESS = 'FETCH_NEGOCIO_SUCCESS'
export const FETCH_NEGOCIO_FAILURE = 'FETCH_NEGOCIO_FAILURE'
export const ORDENAR_RANKING = 'ORDENAR_RANKING'
export const ORDENAR_ALFABETICO = 'ORDENAR_ALFABETICO'

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

export const ordenarRanking = () => {
    return{
        type: ORDENAR_RANKING,
        payload:{
        }
    }
}

export const ordenarAlfabeticamente = () => {
    return{
        type: ORDENAR_ALFABETICO,
        payload:{
        }
    }
}

//
export const fetchNegocio = () => {
    return (dispatch) => {
        dispatch( fetchNegocioRequest() );
        getNegocios()
        .then(response => {
            dispatch( fetchNegocioSuccess([response.data]) );
        })
        .catch(error => {
            dispatch( fetchNegocioFailure('negocios no encontrados') )
        })
    }
}

export const fetchNegocioId = (id) => {
    return (dispatch) => {
        dispatch( fetchNegocioRequest() );
        getNegocio(id)
        .then(response => {
            dispatch( fetchNegocioSuccess([response.data]) );
        })
        .catch(error => {
            dispatch( fetchNegocioFailure('negocios no encontrados') )
        })
    }
}

export const fetchNegocioLocalidad = (localidad) => {
    return (dispatch) => {
        dispatch( fetchNegocioRequest() );
        getNegocioLocalidad(localidad)
        .then(response => {
            dispatch( fetchNegocioSuccess([response.data]) );
        })
        .catch(error => {
            dispatch( fetchNegocioFailure('negocios no encontrados') )
        })
    }
}

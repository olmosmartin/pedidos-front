import { getNegocio } from '../../api/negocioServices'

//types
export const FETCH_PRODUCTO_REQUEST = 'FETCH_PRODUCTO_REQUEST'
export const FETCH_PRODUCTO_SUCCESS = 'FETCH_PRODUCTO_SUCCESS'
export const FETCH_PRODUCTO_FAILURE = 'FETCH_PRODUCTO_FAILURE'

//actions
const fetchProductoRequest = () => {
    return{
        type: FETCH_PRODUCTO_REQUEST,
        payload:{
            
        }
    }
}

const fetchProductoSuccess = (productos) => {
    return{
        type: FETCH_PRODUCTO_SUCCESS,
        payload:{
            productos: productos,
        }
    }
}

const fetchProductoFailure = (error) => {
    return{
        type: FETCH_PRODUCTO_FAILURE,
        payload:{
            error: error
        }
    }
}

export const fetchProductosIdNegocio = (id) => {
    return (dispatch) => {
        dispatch( fetchProductoRequest() );
        //axios.get(`https://pokeapi.co/api/v2/pokemon?offset=300&limit=100`)
        getNegocio(id)
        .then(response => {
            dispatch( fetchProductoSuccess([response?.data?.productos]) );
        })
        .catch(error => {
            dispatch( fetchProductoFailure('productos no encontrados') )
        })
    }
}
import { getNegocio } from '../../api/negocioServices'

//types
export const FETCH_PRODUCTO_REQUEST = 'FETCH_PRODUCTO_REQUEST'
export const FETCH_PRODUCTO_SUCCESS = 'FETCH_PRODUCTO_SUCCESS'
export const FETCH_PRODUCTO_FAILURE = 'FETCH_PRODUCTO_FAILURE'
export const FILTRAR_POR_TIPO = 'FILTRAR_POR_TIPO'

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

export const filtrarProductoPorTipo = (tipo) => {
    return{
        type: FILTRAR_POR_TIPO,
        payload:{
            tipo: tipo
        }
    }
}

export const fetchProductosIdNegocio = (id) => {
    return (dispatch) => {
        dispatch( fetchProductoRequest() );
        getNegocio(id)
        .then(response => {
            dispatch( fetchProductoSuccess([response?.data?.productos]) );
        })
        .catch(error => {
            dispatch( fetchProductoFailure('productos no encontrados') )
        })
    }
}

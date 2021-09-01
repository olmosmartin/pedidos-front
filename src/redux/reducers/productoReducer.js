import { FETCH_PRODUCTO_REQUEST, FETCH_PRODUCTO_SUCCESS, FETCH_PRODUCTO_FAILURE } from '../actions/productoAction'


const initialState = {
    isLoading: false,
    productos: [],
    error: ''
}

const productoReducer = (state = initialState, action ) => {
    switch (action.type) {

    case FETCH_PRODUCTO_REQUEST:
        return { 
            ...state,
            isLoading: true 
        }
    
    case FETCH_PRODUCTO_SUCCESS:
        return { 
            ...state,
            isLoading: false,
            productos: action.payload.productos
        }

    case FETCH_PRODUCTO_FAILURE:
        return { 
            ...state,
            isLoading: false,
            productos: [],
            error: action.payload.error
        }

    default:
        return state
    }
}

export default productoReducer;
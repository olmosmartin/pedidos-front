import { FETCH_NEGOCIO_REQUEST, FETCH_NEGOCIO_SUCCESS, FETCH_NEGOCIO_FAILURE } from '../actions/negocioAction'


const initialState = {
    isLoading: false,
    negocio: [],
    error: ''
}

const buscadorReducer = (state = initialState, action ) => {
    switch (action.type) {

    case FETCH_NEGOCIO_REQUEST:
        return { 
            ...state,
            isLoading: true 
        }
    
    case FETCH_NEGOCIO_SUCCESS:
        return { 
            ...state,
            isLoading: false,
            negocio: action.payload.negocio
        }

    case FETCH_NEGOCIO_FAILURE:
        return { 
            ...state,
            isLoading: false,
            negocio: [],
            error: action.payload.error
        }

    default:
        return state
    }
}

export default buscadorReducer;
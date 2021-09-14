import { FETCH_CLIENTE_REQUEST, FETCH_CLIENTE_SUCCESS, FETCH_CLIENTE_FAILURE, FETCH_CLIENTE_POST } from '../actions/clienteAction'


const initialState = {
    isLoading: false,
    cliente: [],
    error: ''
}

const clienteReducer = (state = initialState, action ) => {
    switch (action.type) {

    case FETCH_CLIENTE_POST:
        return { 
            ...state,
            isLoading: true 
        }
    
    case FETCH_CLIENTE_REQUEST:
        return { 
            ...state,
            isLoading: true 
        }
    
    case FETCH_CLIENTE_SUCCESS:
        return { 
            ...state,
            isLoading: false,
            cliente: action.payload.cliente
        }

    case FETCH_CLIENTE_FAILURE:
        return { 
            ...state,
            isLoading: false,
            cliente: [],
            error: action.payload.error
        }

    default:
        return state
    }
}

export default clienteReducer;
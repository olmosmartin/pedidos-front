import { FETCH_PEDIDO_REQUEST, FETCH_PEDIDO_SUCCESS, FETCH_PEDIDO_FAILURE } from '../actions/pedidoAction'


const initialState = {
    isLoading: false,
    pedidos: [],
    error: ''
}

const pedidoReducer = (state = initialState, action ) => {
    switch (action.type) {

    case FETCH_PEDIDO_REQUEST:
        return { 
            ...state,
            isLoading: true 
        }
    
    case FETCH_PEDIDO_SUCCESS:
        return { 
            ...state,
            isLoading: false,
            pedidos: action.payload.pedidos
        }

    case FETCH_PEDIDO_FAILURE:
        return { 
            ...state,
            isLoading: false,
            pedidos: [],
            error: action.payload.error
        }

    default:
        return state
    }
}

export default pedidoReducer;
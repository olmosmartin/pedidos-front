import { FETCH_PEDIDO_REQUEST, FETCH_PEDIDO_SUCCESS, FETCH_PEDIDO_FAILURE, SET_PEDIDO_SELECTED, SET_PEDIDO_REPARTIDOR } from '../actions/pedidoAction'


const initialState = {
    isLoading: false,
    pedidos: [],
    pedidoSelected: "",
    pedidoRepartidor: [],
    error: ''
}

const pedidoReducer = (state = initialState, action ) => {
    switch (action.type) {

    case FETCH_PEDIDO_REQUEST:
        return { 
            ...state,
            isLoading: true 
        }
    
    case SET_PEDIDO_SELECTED:
    return { 
        ...state,
        isLoading: false,
        pedidoSelected: action.payload.pedidoSelected
    }

    case SET_PEDIDO_REPARTIDOR:
    return { 
        ...state,
        isLoading: false,
        pedidoRepartidor: action.payload.pedidoRepartidor
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
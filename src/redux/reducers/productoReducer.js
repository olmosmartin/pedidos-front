import { FETCH_PRODUCTO_REQUEST, FETCH_PRODUCTO_SUCCESS, FETCH_PRODUCTO_FAILURE, FILTRAR_POR_TIPO } from '../actions/productoAction'


const initialState = {
    isLoading: false,
    productos: [],
    error: '',
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

    case FILTRAR_POR_TIPO:
        /*
        state.productos[0].map( (producto) => {
            console.log("producto.tipo_comida: "+JSON.stringify(producto.tipo_comida))
            console.log("action.payload.tipo: "+JSON.stringify(action.payload.tipo))
        })
        */
        let listanueva=[]

        if(state.productos[0] && state.productos[0].length >= 1){
            listanueva=[...listanueva, state.productos[0].filter( producto => producto?.tipo_comida === action.payload.tipo )]
        }
        return { 
            ...state,
            productos: listanueva,
        }

    default:
        return state
    }
}

export default productoReducer;
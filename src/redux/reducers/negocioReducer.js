import { FETCH_NEGOCIO_REQUEST, FETCH_NEGOCIO_SUCCESS, FETCH_NEGOCIO_FAILURE, ORDENAR_RANKING, ORDENAR_ALFABETICO, TOP_NEGOCIOS, NEGOCIO_SELECTED } from '../actions/negocioAction'


const initialState = {
    isLoading: false,
    negocio: [],
    error: '',
    topNegocios: [],
    negocioSelected: ""
}

const negocioReducer = (state = initialState, action ) => {
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

    case NEGOCIO_SELECTED:
        return {
            ...state,
            isLoading: false,
            negocioSelected: action.payload.negocio
        }
    
    case ORDENAR_RANKING:
        state.negocio[0].sort((a, b) =>
        (parseFloat(a.puntuacionAvg) > parseFloat(b.puntuacionAvg)) ? -1 :
        (parseFloat(a.puntuacionAvg) < parseFloat(b.puntuacionAvg)) ? 1 :
        0)
        state.negocio[0].reverse()
        return { 
            ...state,
        }

    case ORDENAR_ALFABETICO:
        state.negocio[0]&&state.negocio[0].sort((a, b) =>
        a.usuario.nombre.toLowerCase() > b.usuario.nombre.toLowerCase() ? 1 :
        a.usuario.nombre.toLowerCase() < b.usuario.nombre.toLowerCase() ? -1:
        0)

        return { 
            ...state,
        }

    case TOP_NEGOCIOS:
        let listanueva=[]
        listanueva=[...listanueva, state.negocio[0].filter( negocio => negocio.puntuacionAvg!==undefined )]
    
        listanueva[0].sort((a, b) =>
        (parseFloat(a.puntuacionAvg) > parseFloat(b.puntuacionAvg)) ? 1 :
        (parseFloat(a.puntuacionAvg) < parseFloat(b.puntuacionAvg)) ? -1 :
        0)
    
        console.log("listanueva: "+listanueva)
        return { 
            ...state,
            topNegocios: listanueva
        }

    default:
        return state
    }
}

export default negocioReducer;
import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE } from '../actions/buscadorAction'

const initialState = {
    isLoading: false,
    pokemon: [],
    error: ''
}

const buscadorReducer = (state = initialState, action ) => {
    switch (action.type) {

    case FETCH_POKEMON_REQUEST:
        return { 
            ...state,
            isLoading: true 
        }
    
    case FETCH_POKEMON_SUCCESS:
        return { 
            ...state,
            isLoading: false,
            pokemon: action.payload.pokemon
        }

    case FETCH_POKEMON_FAILURE:
        return { 
            ...state,
            isLoading: false,
            pokemon: [],
            error: action.payload.error
        }

    default:
        return state
    }
}

export default buscadorReducer;
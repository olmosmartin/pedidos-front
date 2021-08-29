import axios from "axios"

//types
export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST'
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE'

//actions
const fetchPokemonRequest = () => {
    return{
        type: FETCH_POKEMON_REQUEST,
        payload:{
            
        }
    }
}

const fetchPokemonSuccess = (pokemon) => {
    return{
        type: FETCH_POKEMON_SUCCESS,
        payload:{
            pokemon: pokemon,
        }
    }
}

const fetchPokemonFailure = (error) => {
    return{
        type: FETCH_POKEMON_FAILURE,
        payload:{
            error: error
        }
    }
}

//
const fetchPokemon = () => {
    return (dispatch) => {
        dispatch( fetchPokemonRequest() );
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=300&limit=100`)
        .then(response => {
            dispatch( fetchPokemonSuccess([response.data]) );
        })
        .catch(error => {
            dispatch( fetchPokemonFailure('pokemon no encontrado') )
        })
    }
}

export default fetchPokemon;
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetchPokemon from '../../redux/actions/buscadorAction';
import { NegocioCard } from './NegocioCard';


const ListaNegocios = () => {
    const buscador = useSelector((state) => state.buscadorReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemon())

    }, [])

    return (
        <div>
            <h3 className="text-black">Resultado</h3>
            {
                buscador.isLoading ?
                    <div className="text-warning">buscando... </div>
                    :
                    null
            }
            {buscador.pokemon.length >= 1 && !buscador.error ?
            
                <div className="text-success">
                    {buscador.pokemon[0]?.results.map( (pokemon, i) => (
                        <p key={i} > {pokemon.name} </p>
                    ))
                    }
                </div>
                :
                null
            }
            {
                buscador.error !== '' && buscador.pokemon.length === 0 ?
                    <span className="text-danger"> {buscador.error} </span>
                    :
                    null
            }
        </div>
    )
}

export default ListaNegocios;


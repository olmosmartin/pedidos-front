import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetchPokemon from '../../redux/actions/buscadorAction';
import { MenuCard } from './MenuCard';
import './menuLista.css';

const MenuLista = () => {
    const buscador = useSelector((state) => state.buscadorReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemon())

    }, [])

    return (
        <div className="">
            <div className="row justify-content-center">
                <div className="mt-8">
                    <h3 className="text-black">Resultado</h3>
                    {
                        buscador.isLoading ?
                            <div className="text-warning">buscando... </div>
                            :
                            null
                    }
                    {buscador.pokemon.length >= 1 && !buscador.error ?

                        <div className="text-success">
                            {buscador.pokemon[0]?.results.map((pokemon, i) => (
                                <MenuCard key={i} nombre={pokemon.name} />
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
            </div>
        </div>
    )
}

export default MenuLista;


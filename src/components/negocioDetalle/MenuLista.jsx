import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetchNegocio from '../../redux/actions/negocioAction';
import { MenuCard } from './MenuCard';
import './menuLista.css';

const MenuLista = () => {
    const buscador = useSelector((state) => state.negocioReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNegocio())

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
                    {buscador.negocio.length >= 1 && !buscador.error ?

                        <div className="text-success">
                            {buscador.negocio[0]?.results.map((negocio, i) => (
                                <MenuCard key={i} nombre={negocio.name} />
                            ))
                            }
                        </div>
                        :
                        null
                    }
                    {
                        buscador.error !== '' && buscador.negocio.length === 0 ?
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


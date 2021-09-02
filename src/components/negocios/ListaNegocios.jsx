import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchNegocio } from '../../redux/actions/negocioAction';
import { NegocioCard } from './NegocioCard';
import './listaNegocios.css';

const ListaNegocios = () => {
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
                            
                            <div className="spaces">
                                <div className="d-flex align-items-center">
                                    <strong>Loading...</strong>
                                    <div className="spinner-border ms-auto" role="status" aria-hidden="true" />
                                </div>
                                <div className="spinner-grow text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            :
                            null
                    }
                    {buscador.negocio.length >= 1 && !buscador.error ?

                        <div className="text-success">
                            {buscador.negocio[0]?.map((negocio, i) => (
                                <NegocioCard key={i} id={negocio._id} nombre={negocio.nombre} imagen={negocio.imagen} email={negocio.email} />
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

export default ListaNegocios;


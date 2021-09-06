import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchNegocio, fetchNegocioLocalidad } from '../../redux/actions/negocioAction';
import { NegocioCard } from './NegocioCard';
import { FiltrosAcordeon } from './FiltrosAcordeon';
import { MapVista } from './map/MapVista';
import './listaNegocios.css';

const ListaNegocios = (props) => {
    const buscador = useSelector((state) => state.negocioReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        props.ciudad === 'Ver todos' ? dispatch(fetchNegocio()) : dispatch(fetchNegocioLocalidad(props.ciudad))
        //dispatch(fetchNegocio())
        //dispatch(fetchNegocioLocalidad(props.ciudad))

    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="space"></div>
                {
                    buscador.isLoading ?

                        <div className="spaces">
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
                        <>
                            <FiltrosAcordeon />
                            <div className="col">
                                {buscador.negocio.length >= 1 && !buscador.error ?

                                    <div className="">
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
                            <div className="col">
                                <MapVista />
                                <p>Puntuacion y comentarios:</p>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default ListaNegocios;


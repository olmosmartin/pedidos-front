import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchNegocio, fetchNegocioLocalidad } from '../../redux/actions/negocioAction';
import { NegocioCard } from './NegocioCard';
import { FiltrosAcordeon } from './FiltrosAcordeon';
import { MapVista } from './map/MapVista';
import './listaNegocios.css';
import { Loading } from '../loading/Loading';

const ListaNegocios = (props) => {
    const buscador = useSelector((state) => state.negocioReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        props.ciudad === 'Ver todos' ? dispatch(fetchNegocio()) : dispatch(fetchNegocioLocalidad(props.ciudad))
        //dispatch(fetchNegocio())
        //dispatch(fetchNegocioLocalidad(props.ciudad))

    }, [dispatch, props.ciudad])

    return (
        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="space"></div>
                {
                    buscador.isLoading ?

                        <Loading/>
                        :
                        <>
                            {/*<FiltrosAcordeon />*/}
                            <div className="col">
                                {buscador.negocio.length >= 1 && !buscador.error ?

                                    <div className="">
                                        {buscador.negocio[0]?.map((negocio, i) => (
                                            <NegocioCard key={i} id={negocio._id} nombre={negocio.usuario.nombre} imagen={negocio.imagen} email={negocio.usuario.email} puntuacionAvg={negocio.puntuacionTotal/negocio.puntuacionCount/*negocio.puntuacionAvg*/}  />
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
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default ListaNegocios;


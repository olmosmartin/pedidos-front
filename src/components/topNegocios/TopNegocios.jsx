import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { topNegociosAtempt } from '../../redux/actions/negocioAction';
import { Loading } from '../loading/Loading';
import { NegocioCard } from '../negocios/NegocioCard';

export const TopNegocios = () => {
    const dispatch = useDispatch();
    const buscador = useSelector((state) => state.negocioReducer)

    return (
        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="space"></div>
                {
                    buscador.isLoading ?

                        <Loading/>
                        :
                        <>
                            <div className="col">
                                {buscador.negocio.length >= 1 && !buscador.error ?

                                    <div className="">
                                        {buscador.topNegocios[0]?.map((negocio, i) => (
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
                        </>
                }
            </div>
        </div>
    )
}

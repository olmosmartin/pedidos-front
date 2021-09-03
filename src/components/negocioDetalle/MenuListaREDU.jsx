import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom"

import './menuLista.css';
import { fetchProductosIdNegocio } from '../../redux/actions/productoAction';
import { MenuCard } from './MenuCard';
import { FiltrosAcordeonNegocioDetalle } from './FiltrosAcordeonNegocioDetalle'

export const MenuListaREDU = () => {
    const buscador = useSelector((state) => state.productoReducer)
    const dispatch = useDispatch();

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id");

    useEffect(() => {
        dispatch(fetchProductosIdNegocio(idNegocio))
    }, [])

    return (
        <div className="">
            <div className="row justify-content-center ">
                    <div className="space"></div>
                    {console.log("BUSCADOR: " + JSON.stringify(buscador))}
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
                    <FiltrosAcordeonNegocioDetalle/>
                    <div className="col">
                    {buscador.productos.length >= 1 && !buscador.error ?

                        <div className="">
                            {buscador.productos[0]?.map((producto, i) => (
                                <MenuCard key={i} nombre={producto.nombre} imagen={producto.imagen} precio={producto.precio} />
                            ))
                            }
                        </div>
                        :
                        null
                    }
                    {
                        buscador.error !== '' && buscador.productos.length === 0 ?
                            <span className="text-danger"> {buscador.error} </span>
                            :
                            null
                    }
                    </div>
                    <div className="col">
                        <p>algo escrito acá</p>
                    </div>
                </div>
            </div>
    )
}

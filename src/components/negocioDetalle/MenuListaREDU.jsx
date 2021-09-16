import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from "react-router-dom"

import './menuLista.css';
import { fetchProductosIdNegocio } from '../../redux/actions/productoAction';
import { MenuCard } from './MenuCard';
import { FiltrosAcordeonNegocioDetalle } from './FiltrosAcordeonNegocioDetalle'
import { Carrito } from '../carrito/Carrito';
import { limpiarCarrito } from '../../redux/actions/carritoAction';

export const MenuListaREDU = () => {
    const buscador = useSelector((state) => state.productoReducer)
    const dispatch = useDispatch();

    const location = useLocation();

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id");
   
    useEffect(() => {
        dispatch(fetchProductosIdNegocio(idNegocio))
    }, [])

    useEffect(() => {
        dispatch(limpiarCarrito())
        console.log('Location changed');
    }, [location]);

    return (
        <div className="">
            <div className="row justify-content-center ">
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
                            {/*<FiltrosAcordeonNegocioDetalle />*/}
                            
                            <div className="col">
                                {buscador.productos.length >= 1 && !buscador.error ?

                                    <div className="">
                                        {buscador.productos[0]?.map((producto, i) => (
                                            <MenuCard key={i} id={producto._id} nombre={producto.nombre} imagen={producto.imagen} precio={producto.precio} descripcion={producto.descripcion} />
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
                                <Carrito/>
                            </div>
                        </>
                }

            </div>
        </div>
    )
}

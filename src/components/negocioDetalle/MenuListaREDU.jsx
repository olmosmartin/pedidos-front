import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom"

import './menuLista.css';
import { fetchProductosIdNegocio } from '../../redux/actions/productoAction';
import { MenuCard } from './MenuCard';
import { Carrito } from '../carrito/Carrito';
import { limpiarCarrito } from '../../redux/actions/carritoAction';
import { Loading } from '../loading/Loading';
import { FiltrosAcordeonNegocioDetalle } from './FiltrosAcordeonNegocioDetalle'


export const MenuListaREDU = () => {
    const buscador = useSelector((state) => state.productoReducer)
    const dispatch = useDispatch();

    const location = useLocation();

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id");
   
    useEffect(() => {
        dispatch(fetchProductosIdNegocio(idNegocio))
    }, [idNegocio, dispatch])

    useEffect(() => {
        dispatch(limpiarCarrito())
        console.log('Location changed');
    }, [location, dispatch]);

    return (
        <div className="">
            <div className="row justify-content-center ">
                <div className="space"></div>
                {
                    buscador.isLoading ?
                        <Loading/>
                        :
                        <>
                            {<FiltrosAcordeonNegocioDetalle idNegocio={idNegocio}/>}
                            {console.log("buscador.productos.length: "+buscador.productos[0]?.length)}
                            <div className="col">
                                {buscador.productos[0]?.length >= 1 && !buscador.error ?
                                    
                                    <div className="">
                                        {buscador.productos[0]?.map((producto, i) => (
                                            <MenuCard key={i} id={producto._id} descuento={producto.descuento} nombre={producto.nombre} imagen={producto.imagen} precio={producto.precio} descripcion={producto.descripcion} />
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

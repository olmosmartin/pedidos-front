import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from "react-router-dom"

import '../negocioDetalle/menuLista.css';
import { fetchPedidosIdNegocio } from '../../redux/actions/pedidoAction';

import { Loading } from '../loading/Loading';
import { PedidosCardRow } from '../negocioPedidos/pedidosCardRow';

export const PedidosCard = () => {
    const buscador = useSelector((state) => state.pedidoReducer)
    const dispatch = useDispatch();

    const location = useLocation();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id");

    useEffect(() => {
        dispatch(fetchPedidosIdNegocio(idNegocio))
    }, [location])

    return (
        <div className="col">
          
                {
                    buscador.isLoading ?
                        <Loading/>
                        :
                        <>
                            <div> 
                                <h4>Pedidos:</h4>
                                {buscador.pedidos.length >= 1 && !buscador.error ?
                                   
                        
                                    <div className="">
                                        {buscador.pedidos[0]?.map((pedido, i) => (
                                            <PedidosCardRow key={i} productos={pedido.productos} estado={pedido.estado} total={pedido.total}  />
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
                            
                        </>
                }

            
        </div>
    )
}

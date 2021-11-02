import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation} from "react-router-dom"

import '../negocioDetalle/menuLista.css';
import { fetchPedidosIdNegocio } from '../../redux/actions/pedidoAction';

import { Loading } from '../loading/Loading';
import { PedidosCardRow } from './pedidosCardRow';

export const PedidosCard = () => {
    const buscador = useSelector((state) => state.pedidoReducer)
    const dispatch = useDispatch();

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id");

    useEffect(() => {
        dispatch(fetchPedidosIdNegocio(idNegocio))
    }, [idNegocio, dispatch])

    return (
        <div className="col">
          
            {
                buscador.isLoading ?
                    <Loading/>
                    :
                    <>
                        <div> 
                            <div className="row">
                                <h4>Comentarios:</h4>
                                <button className="btn btn-success" onClick={()=>{dispatch(fetchPedidosIdNegocio(idNegocio))}}> <i className="fa fa-retweet" aria-hidden="true"></i>Actualizar</button>
                            </div>
                            {buscador.pedidos.length >= 1 && !buscador.error ?
                                
                   
                                <div className="">
                                    {buscador.pedidos[0]?.map((pedido, i) => (
                                     
                                     pedido.estado==='FINALIZADO'&&<PedidosCardRow key={i} idNegocio={idNegocio} id={pedido._id} comentario={pedido?.review?.comentario} fecha={pedido.updatedAt} />
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

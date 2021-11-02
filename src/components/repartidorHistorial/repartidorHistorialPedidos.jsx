import React, { useEffect, useState } from 'react'
import { PedidoRow } from './PedidoRow'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPedidosIdRepartidor } from '../../redux/actions/pedidoAction';
import { Loading } from '../loading/Loading';
import { fetchNegocio } from '../../redux/actions/negocioAction';


export const RepartidorHistorialPedidos = () => {
    const buscador = useSelector((state) => state.pedidoReducer)
    const dispatch = useDispatch();
    const [idRepartidor, setIdRepartidor] = useState(sessionStorage.getItem('usuarioID'));

    useEffect(() => {
        dispatch(fetchNegocio())
        dispatch(fetchPedidosIdRepartidor(idRepartidor))
    }, [dispatch, idRepartidor])

    return (
        <div>
            {
            buscador.isLoading ?
                    <Loading/>
                    :
                    <>
                        <div> 
                            <div className="row">
                                <h4>Pedidos:</h4>
                                <button className="btn btn-success" onClick={()=>{dispatch(fetchPedidosIdRepartidor(idRepartidor))}}> <i className="fa fa-retweet" aria-hidden="true"></i>Actualizar</button>
                            </div>
                            {buscador.pedidos.length >= 1 && !buscador.error ?
                                
                                <div className="">
                                    {buscador.pedidos[0]?.map((pedido, i) => (
                                        pedido.estado === 'FINALIZADO'&&<PedidoRow key={i} idRepartidor={idRepartidor} negocioId={pedido.negocio} id={pedido._id} productos={pedido.productos} estado={pedido.estado} total={pedido.total} fecha={pedido.createdAt}/>
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

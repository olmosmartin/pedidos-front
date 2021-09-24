import React, { useEffect, useState } from 'react'
import { PedidoRow } from './PedidoRow'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPedidosIdCliente } from '../../redux/actions/pedidoAction';
import { Loading } from '../loading/Loading';
import { fetchNegocio } from '../../redux/actions/negocioAction';


export const Pedidos = () => {
    const buscador = useSelector((state) => state.pedidoReducer)
    const dispatch = useDispatch();
    const [idCliente, setIdCliente] = useState(sessionStorage.getItem('usuarioID'));
    const [isLoading, setIsLoading] = useState(false)

    /*
    const getNegocioNombre = async(id) => {
        let negocio= await getNegocio(id).then(function (response) {
            //handle success
            setIsLoading(false)
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            setIsLoading(false)
            console.log(response);
        });
        console.log("NEGOCIO:"+JSON.stringify(negocio.data.usuario.nombre))
    }
    */

    useEffect(() => {
        dispatch(fetchNegocio())
        dispatch(fetchPedidosIdCliente(idCliente))
    }, [])

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
                                <button className="btn btn-success" onClick={()=>{dispatch(fetchPedidosIdCliente(idCliente))}}> <i className="fa fa-retweet" aria-hidden="true"></i>Actualizar</button>
                            </div>
                            {buscador.pedidos.length >= 1 && !buscador.error ?
                    
                                <div className="">
                                    {buscador.pedidos[0]?.map((pedido, i) => (
                                        pedido.estado!=='CANCELADO'&&pedido.estado!=='FINALIZADO'&&pedido.estado!=='RECHAZADO'&&<PedidoRow key={i} idCliente={idCliente} negocioId={pedido.negocio} id={pedido._id} productos={pedido.productos} estado={pedido.estado} total={pedido.total} />
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

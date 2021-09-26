import React, { useEffect, useState } from 'react'
import { PedidosRow } from './PedidosRow'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPedidosLocalidad, fetchPedidosIdNegocio } from '../../redux/actions/pedidoAction';
import { fetchNegocio } from '../../redux/actions/negocioAction';
import { Loading } from '../loading/Loading';


export const Pedidos = (props) => {
    const buscador = useSelector((state) => state.pedidoReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        //Remedios de Escalada
        //Lanús Este
        dispatch(fetchNegocio())
        props.localidad&&dispatch(fetchPedidosLocalidad(props.localidad))
    }, [])

    return (
        <div>
            {
                buscador.isLoading ?
                    <Loading />
                    : 
                    props.localidad?
                    <>
                        <div>
                            <div className="row">
                                <h4>Pedidos:</h4>
                                <button className="btn btn-success" onClick={() => { dispatch(fetchPedidosLocalidad(props.localidad)) }}> <i className="fa fa-retweet" aria-hidden="true"></i>Actualizar</button>
                            </div>
                            {buscador.pedidos.length >= 1 && !buscador.error ?

                                <div className="">
                                    {buscador.pedidos[0]?.map((pedido, i) => (
                                        /*pedido.estado==='LISTO'&&*/<PedidosRow key={pedido._id} idCliente={pedido.cliente} negocioId={pedido.negocio} id={pedido._id} productos={pedido.productos} estado={pedido.estado} total={pedido.total} />
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
                    :
                    <>
                    <h4>Precione en el boton buscar en mi ubicacion, si no lo ve active la ubicación en el navegador</h4>
                    </>
            }
        </div>
    )
}

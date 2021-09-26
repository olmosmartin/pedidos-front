import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

import { setPedidoSeleccionado } from '../../../redux/actions/pedidoAction';
import { MapVista } from './map/MapVista';
import { Loading } from '../../loading/Loading'


export const PedidoDetalleRepartidorCard = () => {
    const dispatch = useDispatch();
    const pedidoREDUX = useSelector((state) => state.pedidoReducer)
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    const idPedido = query.get("id"); 

    //const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        dispatch(setPedidoSeleccionado(idPedido))
    }, [])

    const handleClickEnReparto = () => {
        console.log("en reparto")
    }

    return (
        pedidoREDUX.isLoading?<Loading/>:
        <div className="d-flex" style={{alignContent:"center", justifyContent:"center"}}>
            <div className="card " style={{ width: "30rem", textAlign: "center"}}>
                <div className="card-body" >
                    <h5 className="card-title" >Pedido listo para entregar</h5>
                    <p>Pedido numero: {idPedido}</p>
                    <MapVista/>
                    {
                        pedidoREDUX.pedidoSelected?.productos?.map((producto, i)=>{
                            return<>
                            <p>{producto.producto.nombre} X{producto.cantidad}</p>
                            </>
                        })
                    }
                    <p>total: ${pedidoREDUX.pedidoSelected?.total}</p>
                    <small>Recuarda que primero debes ir al Negocio y retirar en el local con el numero de pedido </small>
                    <p><button className="btn btn-success" onClick={handleClickEnReparto}><i className="fa fa-check-square-o fa-lg"></i>Lo tengo!</button></p>
                </div>
            </div>
        </div>
        
    )
}

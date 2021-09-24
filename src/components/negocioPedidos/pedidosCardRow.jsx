import React, { useEffect, useState } from 'react'
import './pedidosCardRow.css'
import { Link } from "react-router-dom";
import { aceptarPedido, rechazarPedido } from '../../api/pedidoServices';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPedidosIdNegocio } from '../../redux/actions/pedidoAction';
import { Loading } from '../loading/Loading'


export const PedidosCardRow = (props) => {
  const buscador = useSelector((state) => state.pedidoReducer)
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  var date = props.productos[1].producto.date;
  var fecha = date.substring(0, 10);
  var hora = date.substring(16, 11)



  const handleClickAceptar = () => {
    setIsLoading(true)
    aceptarPedido(props.id)
      .then(function (response) {
        //handle success
        dispatch(fetchPedidosIdNegocio(props.idNegocio))
        setIsLoading(false)
      })
      .catch(function (response) {
        //handle error
        setIsLoading(false)
      });
  }

  const handleClickRechazar = () => {
    setIsLoading(true)
    rechazarPedido(props.id)
    .then(function (response) {
      //handle success
      dispatch(fetchPedidosIdNegocio(props.idNegocio))
      setIsLoading(false)
    })
    .catch(function (response) {
      //handle error
      setIsLoading(false)
    });
  }

  return (
    isLoading ? <Loading /> :
      <div className="cardPedido col mt-4" style={props.estado === 'RECHAZADO'?{backgroundColor:'rgb(247, 126, 89)'}:props.estado === 'PREPARANDO'?{backgroundColor:'rgb(251, 252, 184)'}:null} >
        {props.productos.length >= 1 ?

          <div className="card-body">
            <h5 className="card-title">{props.estado} {/*-- {hora} -- {fecha}*/}</h5>
            {props.productos?.map((productosArray) => (
              <div className="row g-1" style={{ borderStyle: 'solid', borderWidth: 'thin', margin: 3 }} >
                <div className="col-6">
                  <p className="card-text">{productosArray.producto.nombre}</p>
                </div>
                <div className="col-6">
                  <p className="card-text"> X {productosArray.cantidad}</p>
                </div>
              </div>))
            }
            <div className="card-body justify-content-center">
              {
                props.estado === 'PENDIENTE' &&
                <>
                  <button className="btn btn-success" onClick={handleClickAceptar}><i className="fa fa-check-square-o fa-lg"></i> Aceptar</button>
                  <button className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={handleClickRechazar}> <i className="fa fa-times fa-lg"></i> Rechazar</button>
                </>
              }
              {
                props.estado === 'PREPARANDO' &&
                <>
                  <button className="btn btn-success" ><i className="fa fa-check-square-o fa-lg"></i>Listo</button>
                </>
              }
              {
                props.estado === 'RECHAZADO' &&
                <>
                  <button className="btn btn-danger" ><i className="fa fa-check-square-o fa-lg"></i>Eliminar</button>
                </>
              }
            </div>

          </div> :
          null}

      </div>
  )
}

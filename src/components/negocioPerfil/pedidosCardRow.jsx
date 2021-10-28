import React, { useState } from 'react'
import './pedidosCardRow.css'
import { aceptarPedido, rechazarPedido, listoPedido } from '../../api/pedidoServices';
import { useDispatch } from 'react-redux';
import { fetchPedidosIdNegocio } from '../../redux/actions/pedidoAction';
import { Loading } from '../loading/Loading'
import { FechaHora } from './fechaHora';


export const PedidosCardRow = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
 

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

  const handleClickListo = () => {
    setIsLoading(true)
    listoPedido(props.id)
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
    
      <div className="cardPedido col mt-4" style={{backgroundColor:'#fff', textAlign:'left'}} >
        {props.comentario ?

          <div className="card-body">
          
            <h5 className="card-title">{props.fecha &&<FechaHora fecha= {props.fecha}/>}: </h5>
           
            <p> {props.comentario} </p>
          </div> :
          null}

      </div>
  )
}

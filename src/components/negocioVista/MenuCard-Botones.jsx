import React, { useEffect, useState } from 'react'
import { eliminarPlato } from '../../api/negocioServices';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from "react-router-dom"
import './MenuCard-Botones'
import { fetchNegocioId } from '../../redux/actions/negocioAction';
import { fetchProductosIdNegocio } from '../../redux/actions/productoAction';
import { Loading } from '../loading/Loading';
import { descuento } from '../../utils/funciones';


export const MenuCardBotones = (props) => {
  const history = useHistory();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const idNegocio = query.get("id");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)

  const handleClickEliminar = () => {
    // setIsLoading(true)  
    eliminarPlato(idNegocio, props.id)
      .then(function (response) {
        //handle success
        dispatch(fetchProductosIdNegocio(idNegocio))
        setIsLoading(false)
      })
      .catch(function (response) {
        //handle error
        setIsLoading(false)
      });
  }

  const handleClickModificar = () => {
    history.push(`/modificarPlato?idPlato=${props.id}&&idNegocio=${idNegocio}`)
  }

  return (
    isLoading ? <Loading /> :
      <div className="card col mt-4" style={{ padding: 20 }}>
        <img className="img-fluid" src={props.imagen} alt="sans" width="100px" />
        <div className="card-body">
          <h4 className="card-title">{props.nombre}</h4>
          <p className="card-text">{props.descripcion}</p>
          <p className="card-text">Precio: ${props.precio}</p>
          {props.descuento&&<p className="card-text">Descuento: %{props.descuento}</p>}
          {props.descuento&&<p className="card-text">Precio final: ${descuento(props.precio, props.descuento)}</p>}
          <button className="btn btn-danger" style={{ marginRight: '5px' }} onClick={handleClickEliminar}>
            <i className="fa fa-trash-o fa-lg"></i> Eliminar</button>
          <button className="btn btn-secondary" onClick={handleClickModificar}>
            <i className="fa fa-pencil-square-o"></i> Modificar</button>

        </div>
      </div>
  )
}

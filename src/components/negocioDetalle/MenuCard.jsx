import React from 'react'
//import { Link} from "react-router-dom" 
import { useDispatch } from 'react-redux';
import { agregarProductoAction } from '../../redux/actions/carritoAction';


import './menuCard.css'

export const MenuCard = (props) => {
  const dispatch = useDispatch();

  const producto = [
    {
        id: props.id,
        nombre: props.nombre,
        precio: props.precio,
        descripcion: props.descripcion,
        cantidad: 1
    }
]

  const handleClick = () => {
    dispatch(agregarProductoAction(producto))
  }

  return (
      <div className="card col mt-4" style={{ width: 600 , marginLeft: 20, padding:20}}>
        {/*<Link to='#' className="stretched-link"></Link>*/}
        <img className="img-fluid" src={props.imagen} alt="sans" width="100px" />
        <div className="card-body">
          <h4 className="card-title">{props.nombre}</h4>
          <p className="card-text">{props.descripcion}</p>
          <p className="card-text">Precio: ${props.precio}</p>
          <button type="button" class="btn btn-success" style={{borderRadius:10}} onClick={handleClick}><i class="fa fa-cart-plus fa-lg" aria-hidden="true"> Añadir al carrito</i></button>
        </div>
        
      </div>
      
  )
}

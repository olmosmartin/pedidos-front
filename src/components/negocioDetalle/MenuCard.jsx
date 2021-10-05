import React from 'react'
//import { Link} from "react-router-dom" 
import { useDispatch, useSelector } from 'react-redux';
import { agregarProductoAction, sumarUno } from '../../redux/actions/carritoAction';
import { descuento } from '../../utils/funciones';


import './menuCard.css'

export const MenuCard = (props) => {
  const carrito = useSelector((state) => state.carritoShopping)
  const dispatch = useDispatch();
  
  const producto = [
    {
        id: props.id,
        nombre: props.nombre,
        //precio: props.precio,
        precio: props.descuento?descuento(props.precio, props.descuento):props.precio,
        descripcion: props.descripcion,
        cantidad: 1
    }
]

  const handleClick = () => {
    let itemEnCarrito=[]
    itemEnCarrito = carrito.productos.filter( prod => prod.id === props.id )
    
    if(itemEnCarrito.length > 0){
      dispatch(sumarUno(producto))
    }else{
      dispatch(agregarProductoAction(producto))
    }
  }
  return (
      <div className="card col mt-4" style={{ width: 600 , marginLeft: 20, padding:20}}>
        {/*<Link to='#' className="stretched-link"></Link>*/}
        <img className="img-fluid" src={props.imagen} alt="sans" width="100px" />
        <div className="card-body">
          <h4 className="card-title">{props.nombre}</h4>
          <p className="card-text">{props.descripcion}</p>
          <p className="card-text">Precio: ${props.precio}</p>
          {props.descuento&&<p className="card-text">Descuento: %{props.descuento}</p>}
          {props.descuento&&<p className="card-text">Precio final: ${descuento(props.precio, props.descuento)}</p>}
          <button type="button" className="btn btn-success" style={{borderRadius:10}} onClick={handleClick}><i className="fa fa-cart-plus fa-lg" aria-hidden="true"> Añadir al carrito</i></button>
        </div>
        
      </div>
      
  )
}

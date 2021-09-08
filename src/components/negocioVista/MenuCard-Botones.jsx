import React from 'react'
import { Link} from "react-router-dom" // para cambiar de ruta

import './MenuCard-Botones'



export const MenuCardBotones = (props) => {

  return (
      <div className="card col mt-4" style={{ width: 400 }}>
      <Link to='#' className="stretched-link"></Link>
        <img className="img-fluid" src={props.imagen} alt="sans" width="100px" />
        <div className="card-body">
          <h4 className="card-title">{props.nombre}</h4>
          <p className="card-text">precio: ${props.precio}</p>
          <a class="btn btn-danger" href="#" style={{marginRight: '5px'}}>
            <i class="fa fa-trash-o fa-lg"></i> Eliminar</a>
          <a class="btn btn-secondary" href="#">
            <i class="fa fa-pencil-square-o"></i> Modificar</a>
          
        </div>
      </div>
  )
}

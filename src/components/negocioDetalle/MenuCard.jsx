import React from 'react'
import { useHistory, } from "react-router-dom" // para cambiar de ruta

import './menuCard.css'


export const MenuCard = (props) => {

  const history = useHistory()

  return (
    <div className="container">
      <div className="card mt-4" style={{ width: 400 }}>
        <img className="img-fluid" src={props.imagen} alt="sans" width="100px" />
        <div className="card-body">
          <h4 className="card-title">{props.nombre}</h4>
          <p className="card-text">precio: ${props.precio}</p>
        </div>
      </div>
    </div>
  )
}

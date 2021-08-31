import React from 'react'
import { useHistory, } from "react-router-dom" // para cambiar de ruta

import './menuCard.css'


export const MenuCard = (props) => {

  const history = useHistory()

  return (
    <div class="container">
      <div class="card mt-4" style={{ width: 400 }}>
        <img className="img-fluid" src={props.imagen} alt="sans" width="100px" />
        <div class="card-body">
          <h4 class="card-title">{props.nombre}</h4>
          <p class="card-text">{props.email}</p>
        </div>
      </div>
    </div>
  )
}

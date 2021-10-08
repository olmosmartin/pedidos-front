import React from 'react'
import { Link } from "react-router-dom" // para cambiar de ruta

import './negocioCard.css'


export const NegocioCard = (props) => {

  //const history = useHistory()
  return (

      <div className="card col mt-4" style={{ width: 400 }} /*onClick={() => history.push(`/negocio?id=${props.id}`)}*/>
      <Link to={`/negocio?id=${props.id}`} className="stretched-link"></Link>
        <img className="img-fluid" src={props.imagen} alt="sans" width="100px" />
        <div className="card-body">
          <h4 className="card-title">{props.nombre}</h4>
          <p className="card-text">{props.email}</p>
        </div>
      </div>

  )
}

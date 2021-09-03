import React from 'react'
import { Link } from "react-router-dom" // para cambiar de ruta

import './negocioCard.css'


export const NegocioCard = (props) => {

  //const history = useHistory()
  return (

    <div className="container">
      <div className="card mt-4" style={{ width: 400 }} /*onClick={() => history.push(`/negocio?id=${props.id}`)}*/>
      <Link to={`/negocio?id=${props.id}`} className="stretched-link"></Link>
        <img className="img-fluid" src={props.imagen} alt="sans" width="100px" />
        <div className="card-body">
          <h4 className="card-title">{props.nombre}</h4>
          <p className="card-text">{props.email}</p>
        </div>
      </div>
    </div>
    
    /*
  <div className="row mt-4">
      <div className="col-6">
        <div className="card" onClick={() => history.push(`/negocio?nombre=${props.nombre}`)}>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.email}</p>
              </div>
              <div className="col-6 text-right">
                <img className="img-fluid" src={props.imagen} alt="sans" width="100px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    */

  )
}

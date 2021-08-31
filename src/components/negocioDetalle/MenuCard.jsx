import React from 'react'
import { useHistory, } from "react-router-dom" // para cambiar de ruta

import './menuCard.css'


export const MenuCard = (props) => {
    
    const history = useHistory()

    return (
    <div className="row mt-4">
        <div className="col-3">
          <div className="card" onClick={() => history.push(`/negocio?nombre=${props.nombre}`)}>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6">
                  <h5 className="card-title">{props.nombre}</h5>
                  <p className="card-text">Más texto acá</p>
                </div>
                <div className="col-sm-6 text-right">
                  <img className="img-fluid" src="//placehold.it/100" alt="sans" width="100px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

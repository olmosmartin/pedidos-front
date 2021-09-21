import React from 'react'

import './pedidosCard'



export const PedidosCard = (props) => {

  return (
      <div className="card col mt-4" style={{ width: 400 }}>
       {/*<img className="img-fluid" src={props.imagen} alt="sans" width="100px" />
          <div className="card-body">
          <h4 className="card-title">{props.nombre}</h4>
          <p className="card-text">{props.descripcion}</p>
          <p className="card-text">Precio: ${props.precio}</p>*/
          }
          <a className="btn btn-success" href="#">
            <i className="fa fa-pencil-square-o"></i> Aceptar</a>
          <a className="btn btn-danger" href="#" style={{marginRight: '5px'}}>
            <i className="fa fa-trash-o fa-lg"></i> Rechazar</a>
          
          
       {/* </div>*/}
      </div>
  )
}

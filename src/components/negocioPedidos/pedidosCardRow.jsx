import React from 'react'
import './pedidosCardRow.css'
import { Link} from "react-router-dom";
export const PedidosCardRow = (props) => {

  var date = props.productos[1].producto.date;
  var fecha = date.substring(0,10);
  var hora = date.substring(16,11)
 

  return (
      <div className="cardPedido col mt-4" >
           
            {props.productos.length >= 1 ?

              <div className="card-body">
                <h5 className="card-title">{props.estado} {/*-- {hora} -- {fecha}*/}</h5>  
                  {props.productos?.map((productosArray) => (
                    <div className="row g-1" style={{ borderStyle: 'solid', borderWidth: 'thin', margin: 3}} >
                      <div className="col-6">
                        <p className="card-text">{productosArray.producto.nombre }</p>
                      </div>
                      <div className="col-6">
                        <p className="card-text"> X {productosArray.cantidad}</p>
                      </div> 
                    </div>) )
                  }
                <div className="card-body justify-content-center">
                  <a className="btn btn-success" href="#"><i className="fa fa-check-square-o fa-lg"></i> Aceptar</a>
                  <a className="btn btn-danger" href="#" style={{marginLeft: '5px'}}> <i className="fa fa-times fa-lg"></i> Rechazar</a>
                </div> 
            
              </div> :
                  null}
             
      </div>
  )
}

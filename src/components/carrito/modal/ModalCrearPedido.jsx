import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useHistory } from "react-router-dom"


export const ModalCrearPedido = () => {
    const history = useHistory()
    const carrito = useSelector((state) => state.carritoShopping)
    var sum=0;
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id");
    const idCliente = sessionStorage.getItem('usuarioID')

    const handleClick = () =>{
        console.log("click")
        history.push("/iniciarsesion")

    }

    return (
        <>
        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Pedido:</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>ID cliente: {idCliente&&idCliente}</p>
                <p>ID negocio: {idNegocio}</p>
                {carrito.productos.map( (item, i) => {
                    sum=sum+((item.precio)*item.cantidad)
                    return<>
                    <p>-----------------------------------</p>
                    <p>producto: {item.nombre}</p>
                    <p>cantidad: {item.cantidad}</p>
                    <p>precio: {item.precio * item.cantidad }</p>
                    <p>-----------------------------------</p>
                    </>
                    })
                }
                <p>Total a pagar:{sum}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Volver</button>
                {idCliente?<button type="button" className="btn btn-success">Confirmar</button>:<button type="button" className="btn btn-warning" data-dismiss="modal" onClick={handleClick}> Inicia sesion para pedir </button>}
              </div>
            </div>
          </div>
        </div>
        </>
        
    )
}

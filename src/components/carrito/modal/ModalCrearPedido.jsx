import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useHistory } from "react-router-dom"
import { crearPedido } from '../../../api/pedidoServices';
import { toast } from 'react-toastify';


export const ModalCrearPedido = () => {
  const [state, setstate] = useState([])
  const history = useHistory()
  const carrito = useSelector((state) => state.carritoShopping)
  var pedido = {
    negocio: "",
    productos: [
      {
        id: "",
        cantidad: ""
      },
    ],
    medio_de_pago: ""
  }
  var sum = 0;
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const idNegocio = query.get("id");
  const idCliente = sessionStorage.getItem('usuarioID')

  const onValueChange = (event) => {
    setstate({
      selectedOption: event.target.value
    });
  }

  const handleClick = () => {
    console.log("click")
    history.push("/iniciarsesion")

  }

  const handleClickConfirmar = async() => {
    pedido.negocio = idNegocio
    carrito.productos.map((item, i) => {
      pedido.productos[i] = { id: item.id, cantidad: item.cantidad }
    })
    pedido.medio_de_pago = state.selectedOption
    try {
      //setIsLoading(true)
      const res = await crearPedido(pedido);

      if (res.status === 200) {
        toast.success("pedido exitoso!")
        history.push("/")
      }

    } catch (err) {
      if (err.response && err.response.data) {
        toast.error("error, intente nuevamente")
        console.log(err.response.data.message) // error message
      }
    } finally {
      //setIsLoading(false)
    }

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
              {carrito.productos.map((item, i) => {
                sum = sum + ((item.precio) * item.cantidad)
                return <>
                  <p>Producto: {item.nombre}</p>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Precio: ${item.precio * item.cantidad}</p>
                  <p>-----------------------------------</p>
                </>
              })
              }
              <p>Total a pagar: ${sum}</p>
            </div>

            <div style={{marginLeft: 10}}>
              <div className="form-check mb-3">
                <input
                  type="radio"
                  name="picked"
                  className="form-check-input"
                  id="1"
                  value="Tarjeta Débito"
                  onChange={onValueChange}
                />
                <label htmlFor="1">Tarjeta Débito</label>
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="picked"
                  id="2"
                  value="Tarjeta crédito"
                  onChange={onValueChange}
                />
                <label htmlFor="2">Tarjeta crédito</label>
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="picked"
                  id="3"
                  value="Efectivo"
                  onChange={onValueChange}
                />
                <label htmlFor="3">Efectivo</label>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Volver</button>
              {idCliente ? <button type="button" className="btn btn-success" data-dismiss="modal" onClick={handleClickConfirmar}>Confirmar</button>
                :
                <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={handleClick}> Inicia sesion para pedir </button>}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

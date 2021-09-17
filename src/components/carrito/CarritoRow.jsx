import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sumarUno, restarUno, removerProductoAction } from '../../redux/actions/carritoAction';
import './carritoRow.css'


export const CarritoRow = (props) => {
    const carrito = useSelector((state) => state.carritoShopping)
    const dispatch = useDispatch();

    const producto = [
        {
            id: props.id,
            nombre: props.nombre,
            precio: props.precio,
            cantidad: 1
        }
    ]
    const handleClickAdd = () => {
        dispatch(sumarUno(producto))
    }

    const handleClickDelete = () => {
        carrito.productos.map(item => {
            if (item.id === props.id) {
                if (item.cantidad === 1) {
                    dispatch(removerProductoAction(producto))
                } else {
                    dispatch(restarUno(producto))
                }
            }
        })
    }

    return (

        <div className="carritoItem">
            <div className="container " style={{ margin: '5px' }}>
                <div className="row g-1">
                    <div className="col-6">
                        <   p>{props.nombre}</p>
                    </div>
                    <div className="col-6">
                        <button type="button" class="btn btn-success" onClick={handleClickAdd}>+</button>
                        <a className="btn btn-default" >{props.cantidad}</a>
                        <button type="button" class="btn btn-danger" onClick={handleClickDelete}>-</button>

                    </div>
                    Precio: ${props.precio}
                </div>
            </div>
        </div>

    )
}

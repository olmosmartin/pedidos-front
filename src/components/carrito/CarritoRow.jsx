import React from 'react'
import { useDispatch } from 'react-redux';
import { agregarProductoAction, removerProductoAction } from '../../redux/actions/carritoAction';


export const CarritoRow = (props) => {
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
        dispatch(agregarProductoAction(producto))
    }

    const handleClickDelete = () => {
        dispatch(removerProductoAction(producto))
    }

    return (
        <div>
            {props.nombre}
            <button type="button" class="btn btn-success" onClick={handleClickAdd}>+</button>
            {props.cantidad}
            <button type="button" class="btn btn-danger" onClick={handleClickDelete}>-</button>
            ${props.precio}
        </div>
    )
}
